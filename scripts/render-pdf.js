#!/usr/bin/env node
// Render an HTML CV or cover letter to PDF using a headless browser.
// Usage: node render-pdf.js <input.html> <output.pdf>
// Needs Playwright (npm i -D playwright && npx playwright install chromium)
// or Puppeteer (npm i -D puppeteer), installed in the folder you run this from.
// Page size and margins come from the HTML's @page rule.
//
// Safety: the page is rendered with JavaScript switched off, and every request is blocked
// except files in the HTML file's own folder, so a downloaded or edited HTML file can't
// run scripts, send anything over the network or pull other files on your computer into
// the PDF.

const path = require('path');
const fs = require('fs');
const { createRequire } = require('module');
const { pathToFileURL, fileURLToPath } = require('url');

// This script runs from the plugin's install folder, so look in the user's folder first.
function load(mod) {
  for (const req of [createRequire(path.join(process.cwd(), 'index.js')), require]) {
    let resolved;
    try { resolved = req.resolve(mod); } catch { continue; }
    return require(resolved);
  }
  return null;
}

function allowedIn(dir) {
  return (url) => {
    if (url.startsWith('data:')) return true;
    if (!url.startsWith('file:')) return false;
    try {
      const rel = path.relative(dir, fileURLToPath(url));
      return rel !== '..' && !rel.startsWith('..' + path.sep) && !path.isAbsolute(rel);
    } catch {
      return false;
    }
  };
}

async function renderWithPlaywright({ chromium }, url, output, allowed) {
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ javaScriptEnabled: false });
    await context.route('**/*', (route) =>
      allowed(route.request().url()) ? route.continue() : route.abort());
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
}

async function renderWithPuppeteer(puppeteer, url, output, allowed) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', (req) => (allowed(req.url()) ? req.continue() : req.abort()));
    await page.goto(url, { waitUntil: 'load' });
    await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
}

(async () => {
  const [input, output] = process.argv.slice(2);
  if (!input || !output) {
    console.error('Usage: node render-pdf.js <input.html> <output.pdf>');
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
  const url = pathToFileURL(file).href;
  const allowed = allowedIn(path.dirname(file));
  const playwright = load('playwright');
  const puppeteer = playwright ? null : load('puppeteer');
  if (playwright) await renderWithPlaywright(playwright, url, out, allowed);
  else if (puppeteer) await renderWithPuppeteer(puppeteer, url, out, allowed);
  else {
    console.error('Install Playwright or Puppeteer in this folder first:\n' +
      '  npm i -D playwright && npx playwright install chromium\n' +
      'or open the HTML in a browser and use Print > Save as PDF.');
    process.exit(1);
  }
  console.log(`Saved ${output}`);
})().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
