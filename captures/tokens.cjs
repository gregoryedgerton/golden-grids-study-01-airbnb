const { chromium } = require('playwright');
(async () => {
  const url = process.argv[2];
  const browser = await chromium.launch({ channel: 'chrome' });
  const out = {};
  for (const w of [1440, 390]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, locale: 'en-US' });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForTimeout(4000);
    for (const sel of ['[role="dialog"] button:has-text("Got it")', '[role="dialog"] button[aria-label="Close"]']) { try { const b = page.locator(sel).first(); if (await b.isVisible({ timeout: 500 })) await b.click({ timeout: 1000 }); } catch {} }
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 600) { await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(80); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    out[w] = await page.evaluate(() => {
      const cs = (e) => getComputedStyle(e);
      const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && cs(e).visibility !== 'hidden' && cs(e).display !== 'none'; };
      const count = (map, k) => map.set(k, (map.get(k) || 0) + 1);
      const top = (map, n = 8) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
      // text styles histogram over leaf elements with text
      const textMap = new Map(), colorMap = new Map(), famMap = new Map();
      const els = [...document.querySelectorAll('body *')].filter(e => vis(e) && e.children.length === 0 && (e.textContent || '').trim().length > 1);
      for (const e of els) {
        const s = cs(e);
        count(textMap, `${s.fontSize}/${s.lineHeight} ${s.fontWeight}`);
        count(colorMap, s.color);
        count(famMap, s.fontFamily.split(',')[0].trim().replace(/"/g, ''));
      }
      // borders
      const borderMap = new Map(), radiusMap = new Map(), bgMap = new Map();
      for (const e of document.querySelectorAll('body *')) {
        if (!vis(e)) continue;
        const s = cs(e);
        for (const side of ['Top', 'Bottom', 'Left', 'Right']) {
          const bw = s[`border${side}Width`], bcol = s[`border${side}Color`], bs = s[`border${side}Style`];
          if (bs !== 'none' && bw !== '0px') count(borderMap, `${bw} ${bs} ${bcol}`);
        }
        if (s.borderRadius !== '0px' && (e.tagName === 'IMG' || e.tagName === 'BUTTON' || e.tagName === 'A' || e.tagName === 'DIV')) count(radiusMap, `${e.tagName}:${s.borderRadius}`);
        if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') count(bgMap, s.backgroundColor);
      }
      const headings = ['h1', 'h2', 'h3'].map(t => { const e = [...document.querySelectorAll(t)].find(vis); if (!e) return null; const s = cs(e); return { tag: t, text: e.textContent.trim().slice(0, 40), fontSize: s.fontSize, lineHeight: s.lineHeight, fontWeight: s.fontWeight, color: s.color, fontFamily: s.fontFamily.slice(0, 60), letterSpacing: s.letterSpacing, marginBottom: s.marginBottom }; });
      const btn = (text) => { const e = [...document.querySelectorAll('button, a[role=button]')].find(b => vis(b) && b.textContent.trim().startsWith(text)); if (!e) return null; const s = cs(e); const r = e.getBoundingClientRect(); return { text, w: Math.round(r.width), h: Math.round(r.height), bg: s.backgroundImage !== 'none' ? s.backgroundImage.slice(0, 120) : s.backgroundColor, color: s.color, border: `${s.borderWidth} ${s.borderStyle} ${s.borderColor}`, radius: s.borderRadius, padding: s.padding, fontSize: s.fontSize, fontWeight: s.fontWeight }; };
      const link = [...document.querySelectorAll('a')].find(a => vis(a) && /Show all|reviews work|Learn more|Report/.test(a.textContent)); const ls = link ? cs(link) : null;
      const h1 = document.querySelector('h1'); const r1 = h1 ? h1.getBoundingClientRect() : null;
      // section dividers: elements whose border-top is 1px and width > 50% viewport
      const dividers = [...document.querySelectorAll('body *')].filter(e => vis(e) && cs(e).borderTopWidth === '1px' && e.getBoundingClientRect().width > innerWidth * 0.4).slice(0, 12).map(e => { const s = cs(e); const r = e.getBoundingClientRect(); return { color: s.borderTopColor, w: Math.round(r.width), pt: s.paddingTop, pb: s.paddingBottom, mt: s.marginTop, mb: s.marginBottom }; });
      // h2 y positions and their distance to previous divider
      const h2s = [...document.querySelectorAll('h2')].filter(vis).slice(0, 8).map(e => { const s = cs(e); const r = e.getBoundingClientRect(); return { text: e.textContent.trim().slice(0, 30), y: Math.round(r.top + scrollY), fontSize: s.fontSize, fontWeight: s.fontWeight, mb: s.marginBottom, pb: s.paddingBottom }; });
      const img = [...document.querySelectorAll('picture img, img')].find(i => vis(i) && i.getBoundingClientRect().width > 150); const is = img ? cs(img) : null; const ip = img ? cs(img.parentElement) : null;
      return {
        bodyFont: cs(document.body).fontFamily, bodyColor: cs(document.body).color, bodySize: cs(document.body).fontSize, bodyLH: cs(document.body).lineHeight,
        textStyles: top(textMap, 12), textColors: top(colorMap, 8), families: top(famMap, 4), borders: top(borderMap, 8), radii: top(radiusMap, 10), backgrounds: top(bgMap, 6),
        headings, primaryBtn: btn('Check availability'), secondaryBtn: btn('Show all'), showMore: btn('Show more'), link: ls ? { color: ls.color, decoration: ls.textDecorationLine, weight: ls.fontWeight, size: ls.fontSize } : null,
        h1Box: r1 ? { left: Math.round(r1.left), right: Math.round(innerWidth - r1.right), width: Math.round(r1.width) } : null,
        dividers, h2s, image: is ? { radius: is.borderRadius, parentRadius: ip.borderRadius, parentOverflow: ip.overflow } : null,
      };
    });
    await ctx.close();
  }
  await browser.close();
  console.log(JSON.stringify(out, null, 1));
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
