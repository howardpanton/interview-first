#!/usr/bin/env node
// Render an HTML CV or cover letter to PDF using a headless browser.
// Usage: node scripts/render-pdf.js <input.html> <output.pdf>
// Needs Playwright (npm i -D playwright && npx playwright install chromium)
// or Puppeteer (npm i -D puppeteer). Page size and margins come from the HTML's @page rule.

const path = require('path');
const fs = require('fs');

async function launch() {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    return { browser, newPage: () => browser.newPage() };
  } catch (e) {
    try {
      const puppeteer = require('puppeteer');
      const browser = await puppeteer.launch();
      return { browser, newPage: () => browser.newPage() };
    } catch (e2) {
      console.error('Install Playwright or Puppeteer first:\n' +
        '  npm i -D playwright && npx playwright install chromium\n' +
        'or open the HTML in a browser and use Print > Save as PDF.');
      process.exit(1);
    }
  }
}

(async () => {
  const [input, output] = process.argv.slice(2);
  if (!input || !output) {
    console.error('Usage: node scripts/render-pdf.js <input.html> <output.pdf>');
    process.exit(1);
  }
  const file = path.resolve(input);
  if (!fs.existsSync(file)) {
    console.error(`Not found: ${file}`);
    process.exit(1);
  }
  const { browser, newPage } = await launch();
  const page = await newPage();
  await page.goto('file://' + file, { waitUntil: 'load' });
  await page.pdf({ path: path.resolve(output), preferCSSPageSize: true, printBackground: true });
  await browser.close();
  console.log(`Saved ${output}`);
})();
