#!/usr/bin/env node
// Render an HTML CV or cover letter to PDF using a headless browser.
// Usage: node scripts/render-pdf.js <input.html> <output.pdf>
// Needs Playwright (npm i -D playwright && npx playwright install chromium)
// or Puppeteer (npm i -D puppeteer). Page size and margins come from the HTML's @page rule.
//
// Safety: the page is rendered with JavaScript switched off, and every request other
// than local files is blocked, so a downloaded or edited HTML file can't run scripts or
// send anything over the network while it is rendered.

const path = require('path');
const fs = require('fs');

const isLocal = (url) => url.startsWith('file:') || url.startsWith('data:');

async function renderWithPlaywright(file, output) {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ javaScriptEnabled: false });
    await context.route('**/*', (route) =>
      isLocal(route.request().url()) ? route.continue() : route.abort());
    const page = await context.newPage();
    await page.goto('file://' + file, { waitUntil: 'load' });
    await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
}

async function renderWithPuppeteer(file, output) {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', (req) => (isLocal(req.url()) ? req.continue() : req.abort()));
    await page.goto('file://' + file, { waitUntil: 'load' });
    await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
}

function has(mod) {
  try { require.resolve(mod); return true; } catch { return false; }
}

(async () => {
  const [input, output] = process.argv.slice(2);
  if (!input || !output) {
    console.error('Usage: node scripts/render-pdf.js <input.html> <output.pdf>');
    process.exit(1);
  }
  const file = path.resolve(input);
  if (!fs.existsSync(file) || !/\.html?$/i.test(file)) {
    console.error(`Not an HTML file: ${file}`);
    process.exit(1);
  }
  if (!/\.pdf$/i.test(output)) {
    console.error('The output file name must end in .pdf');
    process.exit(1);
  }
  const out = path.resolve(output);
  if (has('playwright')) await renderWithPlaywright(file, out);
  else if (has('puppeteer')) await renderWithPuppeteer(file, out);
  else {
    console.error('Install Playwright or Puppeteer first:\n' +
      '  npm i -D playwright && npx playwright install chromium\n' +
      'or open the HTML in a browser and use Print > Save as PDF.');
    process.exit(1);
  }
  console.log(`Saved ${output}`);
})().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
