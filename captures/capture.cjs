const { chromium } = require('playwright');
(async () => {
  const [url, out, prefix = 'reference', only] = process.argv.slice(2);
  const widths = only ? [Number(only)] : [390, 820, 1440];
  let browser;
  try { browser = await chromium.launch({ channel: 'chrome' }); } catch (e) { console.error('chrome channel failed, using chromium:', e.message.split('\n')[0]); browser = await chromium.launch(); }
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1, locale: 'en-US', timezoneId: 'America/New_York' });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForTimeout(4000);
    const home = page.url().split('?')[0];
    for (const sel of ['[role="dialog"] button:has-text("Got it")', '[role="dialog"] button[aria-label="Close"]', '[role="dialog"] button:has-text("Accept all")']) {
      try { const b = page.locator(sel).first(); if (await b.isVisible({ timeout: 700 })) { await b.click({ timeout: 1500 }); await page.waitForTimeout(500); } } catch {}
      if (page.url().split('?')[0] !== home) { await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {}); await page.waitForTimeout(2000); }
    }
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 500) { await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(120); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${out}/${prefix}-${w}.png`, fullPage: true });
    console.log(w, 'height', await page.evaluate(() => document.documentElement.scrollHeight), '|', (await page.title()).slice(0, 80), '|', page.url().slice(0, 80));
    await ctx.close();
  }
  await browser.close();
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
