# SaaStanak Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a single-page, mobile-first "we met at SaaStanak" landing page that converts conference contacts into a 30-minute call, leading with a branded AI-influencer offer.

**Architecture:** Static single page. Plain HTML + CSS + a small amount of vanilla JS (smooth scroll, bookmark prompt, sticky bar). No build step, no backend. Deploys to GitHub Pages or any static host. Dark terminal-future visual shell with a warm amber accent; full-bleed colorful media tiles carry the color.

**Tech Stack:** HTML5, CSS3 (custom properties, fl/grid, `prefers-reduced-motion`), vanilla JS, Google Fonts (Space Grotesk for headings/body, JetBrains Mono for labels/buttons). No framework.

**Verification model:** This is a static site, not tested code. Each task ends with a browser-preview check (open `site/index.html` and confirm the described result on a mobile viewport ~390px wide) plus a commit. No unit tests.

**Copy rule (applies to every task):** No em dashes or en dashes anywhere in page copy. Use commas, periods, or "to" for ranges.

---

## File Structure

```
SaaStanak/
  site/
    index.html        ← all page markup, single file
    styles.css        ← all styling, design tokens at top
    script.js         ← smooth scroll, sticky bar, bookmark prompt
    assets/
      img/            ← poster images, og image, favicon
      video/          ← mp4 clips OR we embed external links in index.html
  CONFIG.md           ← the drop-in assets (links, number) in one place for easy editing
```

Single `index.html` is correct here: the page is one screen flow, splitting it would add friction with no benefit. Design tokens (colors, fonts, spacing) live at the top of `styles.css` so the whole skin can be retuned in one place.

---

### Task 1: Scaffold the page shell and design tokens

**Files:**
- Create: `site/index.html`
- Create: `site/styles.css`
- Create: `site/assets/img/.gitkeep`
- Create: `site/assets/video/.gitkeep`

- [ ] **Step 1: Create `site/index.html` with head, font links, and empty section anchors**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We met at SaaStanak | AI Factory</title>
  <meta name="description" content="Your brand's own AI face, making content forever. Built by AI Factory." />
  <meta property="og:title" content="We met at SaaStanak" />
  <meta property="og:description" content="Your brand's own AI face, making content forever." />
  <meta property="og:image" content="assets/img/og.png" />
  <link rel="icon" href="assets/img/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main>
    <section id="hero"></section>
    <nav id="connect-bar"></nav>
    <section id="offers"></section>
    <section id="proof"></section>
    <section id="guarantee"></section>
    <section id="cta"></section>
    <footer id="footer"></footer>
  </main>
  <script src="script.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Create `site/styles.css` with design tokens and base reset**

```css
:root {
  --bg: #0B0B0C;
  --surface: #141416;
  --ink: #ECE8E1;
  --ink-dim: #9A968E;
  --accent: #F5A623;       /* warm amber phosphor */
  --accent-soft: rgba(245,166,35,0.15);
  --border: rgba(236,232,225,0.12);
  --font-head: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --maxw: 720px;
  --pad: 20px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-head);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
main { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--pad); }
.eyebrow { font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); }
.btn {
  display: inline-block; font-family: var(--font-mono); font-weight: 600;
  background: var(--accent); color: #0B0B0C; text-decoration: none;
  padding: 14px 22px; border-radius: 4px; border: 0; cursor: pointer;
  transition: transform 0.12s ease;
}
.btn:hover { transform: translateY(-2px); }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .btn { transition: none; }
}
```

- [ ] **Step 3: Add the CRT scanline overlay (light, behind content)**

```css
body::before {
  content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 1;
  background: repeating-linear-gradient(
    to bottom, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px,
    transparent 1px, transparent 3px
  );
}
main { position: relative; z-index: 2; }
```

- [ ] **Step 4: Browser-preview check**

Open `site/index.html` in a browser, set viewport to ~390px wide. Expected: near-black background with a very faint scanline texture, fonts loaded (no fallback flash on reload). Page is empty otherwise.

- [ ] **Step 5: Commit**

```bash
git add site/index.html site/styles.css site/assets
git commit -m "feat: scaffold SaaStanak page shell with dark terminal-future tokens"
```

---

### Task 2: Hero section

**Files:**
- Modify: `site/index.html` (`#hero`)
- Modify: `site/styles.css`

- [ ] **Step 1: Fill `#hero` markup**

```html
<section id="hero">
  <p class="eyebrow">// we met at saastanak</p>
  <h1 class="hero-title">Your brand deserves its own face. One that never sleeps, never asks for a raise, and posts forever.</h1>
  <p class="hero-sub">I'm Darko, founder of AI Factory. We build branded AI personas and content systems for SaaS companies and the agencies that serve them.</p>
  <a class="btn" href="#cta">Book a 30 minute call</a>
</section>
```

- [ ] **Step 2: Style the hero**

```css
#hero { padding: 64px 0 40px; }
.hero-title { font-size: 34px; font-weight: 700; line-height: 1.15; margin: 14px 0 16px; }
.hero-sub { color: var(--ink-dim); font-size: 17px; margin-bottom: 28px; max-width: 56ch; }
@media (min-width: 640px) { .hero-title { font-size: 44px; } }
```

- [ ] **Step 3: Browser-preview check**

Viewport ~390px. Expected: amber "// we met at saastanak" eyebrow, large white headline, dim subline, amber CTA button that lifts on hover. Tapping the button scrolls smoothly to the bottom CTA.

- [ ] **Step 4: Commit**

```bash
git add site/index.html site/styles.css
git commit -m "feat: add hero section"
```

---

### Task 3: Sticky connect bar (LinkedIn, WhatsApp, Bookmark)

**Files:**
- Modify: `site/index.html` (`#connect-bar`)
- Modify: `site/styles.css`
- Create: `site/script.js`
- Create: `site/CONFIG.md`

- [ ] **Step 1: Create `site/CONFIG.md` documenting the drop-in values**

```markdown
# Drop-in assets for the page

Edit these in `index.html` (search for the placeholder):

- LINKEDIN_URL  -> the href of the LinkedIn link in #connect-bar and #footer
- WHATSAPP_NUMBER -> used in https://wa.me/<number> (digits only, no + or spaces)
- CALENDAR_URL -> the href of the "Book a 30 minute call" buttons (or reuse the WhatsApp link)
- FB_PAGE_URL -> the href of the "See a live page we run" button in #proof
- Video assets -> drop mp4s in assets/video/ or replace the <video>/embed in #proof
```

- [ ] **Step 2: Fill `#connect-bar` markup (placeholders clearly marked)**

```html
<nav id="connect-bar" aria-label="Connect">
  <a href="LINKEDIN_URL" target="_blank" rel="noopener">LinkedIn</a>
  <a href="https://wa.me/WHATSAPP_NUMBER" target="_blank" rel="noopener">WhatsApp</a>
  <button type="button" id="bookmark-btn">Bookmark</button>
</nav>
```

- [ ] **Step 3: Style the sticky bar (mobile-first, stays at bottom on small screens)**

```css
#connect-bar {
  position: sticky; bottom: 0; z-index: 5;
  display: flex; gap: 10px; justify-content: center;
  padding: 12px; margin: 0 calc(-1 * var(--pad));
  background: rgba(11,11,12,0.85); backdrop-filter: blur(8px);
  border-top: 1px solid var(--border);
}
#connect-bar a, #connect-bar button {
  font-family: var(--font-mono); font-size: 14px; color: var(--ink);
  text-decoration: none; background: transparent; border: 1px solid var(--border);
  padding: 9px 14px; border-radius: 4px; cursor: pointer;
}
#connect-bar a:hover, #connect-bar button:hover { border-color: var(--accent); color: var(--accent); }
```

- [ ] **Step 4: Create `site/script.js` with the bookmark prompt + fallback**

```javascript
document.getElementById("bookmark-btn")?.addEventListener("click", () => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const combo = isMac ? "Cmd + D" : "Ctrl + D";
  // No reliable cross-browser programmatic bookmark API exists; guide the user.
  alert(`To save this page, press ${combo}. On mobile, use your browser's Share or menu, then "Add to Home Screen" or "Bookmark".`);
});
```

- [ ] **Step 5: Browser-preview check**

Viewport ~390px. Expected: a bar pinned to the bottom of the screen with LinkedIn, WhatsApp, Bookmark. Tapping Bookmark shows the save instructions. Bar stays visible while scrolling.

- [ ] **Step 6: Commit**

```bash
git add site/index.html site/styles.css site/script.js site/CONFIG.md
git commit -m "feat: add sticky connect bar with bookmark prompt"
```

---

### Task 4: Offer cards (hero offer first)

**Files:**
- Modify: `site/index.html` (`#offers`)
- Modify: `site/styles.css`

- [ ] **Step 1: Fill `#offers` markup with three cards**

```html
<section id="offers">
  <p class="eyebrow">// what we build</p>
  <h2 class="section-title">Three ways to put AI to work for your brand</h2>

  <article class="card card-hero">
    <span class="card-tag">Most popular</span>
    <h3>Your brand's face, on autopilot</h3>
    <p>A custom AI persona locked to your brand. One consistent face and voice that produces video and posts indefinitely. We run the whole thing. You stop depending on creators, cameras, and calendars.</p>
  </article>

  <article class="card">
    <h3>Done for you content engine</h3>
    <p>No persona, just output. We produce a steady stream of on brand AI content so your presence never goes quiet. You buy the result, not the hours.</p>
  </article>

  <article class="card">
    <h3>Build it, you own it</h3>
    <p>Prefer to run it in house? We build the content automation as a system and hand it over. One build, no retainer, your team owns it.</p>
  </article>
</section>
```

- [ ] **Step 2: Style the cards**

```css
#offers { padding: 48px 0; }
.section-title { font-size: 26px; margin: 12px 0 24px; }
.card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; padding: 22px; margin-bottom: 16px;
}
.card h3 { font-size: 20px; margin-bottom: 10px; }
.card p { color: var(--ink-dim); font-size: 16px; }
.card-hero { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent-soft); }
.card-tag {
  display: inline-block; font-family: var(--font-mono); font-size: 12px;
  color: var(--accent); border: 1px solid var(--accent); border-radius: 999px;
  padding: 3px 10px; margin-bottom: 12px;
}
```

- [ ] **Step 3: Browser-preview check**

Viewport ~390px. Expected: three stacked cards. The first has an amber "Most popular" pill and an amber-tinted border; the other two are neutral. Copy contains no em dashes.

- [ ] **Step 4: Commit**

```bash
git add site/index.html site/styles.css
git commit -m "feat: add offer cards with hero offer first"
```

---

### Task 5: Proof section (videos + live FB page link)

**Files:**
- Modify: `site/index.html` (`#proof`)
- Modify: `site/styles.css`

- [ ] **Step 1: Fill `#proof` markup with three media tiles and the FB button**

```html
<section id="proof">
  <p class="eyebrow">// proof</p>
  <h2 class="section-title">Real AI faces, real content</h2>
  <div class="media-grid">
    <div class="media-tile">
      <video controls preload="none" poster="assets/img/poster-1.jpg">
        <source src="assets/video/example-1.mp4" type="video/mp4" />
      </video>
      <p class="media-cap">A SaaS brand's AI spokesperson</p>
    </div>
    <div class="media-tile">
      <video controls preload="none" poster="assets/img/poster-2.jpg">
        <source src="assets/video/example-2.mp4" type="video/mp4" />
      </video>
      <p class="media-cap">One face, many formats</p>
    </div>
    <div class="media-tile">
      <video controls preload="none" poster="assets/img/poster-3.jpg">
        <source src="assets/video/example-3.mp4" type="video/mp4" />
      </video>
      <p class="media-cap">Always on, always on brand</p>
    </div>
  </div>
  <a class="btn btn-ghost" href="FB_PAGE_URL" target="_blank" rel="noopener">See a live page we run</a>
</section>
```

- [ ] **Step 2: Style the media grid (colorful tiles pop against dark)**

```css
#proof { padding: 48px 0; }
.media-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
.media-tile { background: #000; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); }
.media-tile video { width: 100%; aspect-ratio: 9 / 16; object-fit: cover; display: block; background: #000; }
.media-cap { font-family: var(--font-mono); font-size: 13px; color: var(--ink-dim); padding: 10px 12px; }
.btn-ghost { background: transparent; color: var(--accent); border: 1px solid var(--accent); }
@media (min-width: 640px) { .media-grid { grid-template-columns: repeat(3, 1fr); } }
```

- [ ] **Step 3: Browser-preview check**

Viewport ~390px. Expected: three stacked 9:16 video tiles (black until a poster/mp4 is dropped in), each with a mono caption, and an amber-outline "See a live page we run" button below. On a ~700px viewport the tiles sit in a row of three.

- [ ] **Step 4: Commit**

```bash
git add site/index.html site/styles.css
git commit -m "feat: add proof section with video tiles and live page link"
```

---

### Task 6: Guarantee + scarcity, final CTA, footer

**Files:**
- Modify: `site/index.html` (`#guarantee`, `#cta`, `#footer`)
- Modify: `site/styles.css`

- [ ] **Step 1: Fill the three remaining sections**

```html
<section id="guarantee">
  <div class="guarantee-box">
    <p class="eyebrow">// the deal</p>
    <h2 class="section-title">Your first content batch on time, or month one is free.</h2>
    <p class="guarantee-note">I take on a handful of brands at a time. Only 2 SaaStanak slots open this month.</p>
  </div>
</section>

<section id="cta">
  <h2 class="section-title">Let's build your AI face</h2>
  <p class="cta-sub">A 30 minute call. No slides, no pressure. We map what your brand could run on autopilot.</p>
  <a class="btn" href="CALENDAR_URL" target="_blank" rel="noopener">Book a 30 minute call</a>
</section>

<footer id="footer">
  <p>AI Factory. Built for the people I met at SaaStanak.</p>
  <p><a href="LINKEDIN_URL" target="_blank" rel="noopener">LinkedIn</a></p>
</footer>
```

- [ ] **Step 2: Style them**

```css
#guarantee { padding: 32px 0; }
.guarantee-box { background: var(--accent-soft); border: 1px solid var(--accent); border-radius: 10px; padding: 24px; }
.guarantee-note { font-family: var(--font-mono); font-size: 14px; color: var(--accent); margin-top: 8px; }
#cta { padding: 56px 0; text-align: center; }
.cta-sub { color: var(--ink-dim); margin-bottom: 24px; }
#footer { padding: 40px 0 120px; border-top: 1px solid var(--border); color: var(--ink-dim); font-family: var(--font-mono); font-size: 13px; }
#footer a { color: var(--ink-dim); }
#footer p { margin-bottom: 6px; }
```

Note: `#footer` bottom padding (120px) keeps content clear of the sticky connect bar.

- [ ] **Step 3: Browser-preview check**

Viewport ~390px. Expected: an amber-tinted guarantee box with the scarcity line in mono, a centered final CTA with the amber button, and a quiet footer. Nothing is hidden behind the sticky bar.

- [ ] **Step 4: Commit**

```bash
git add site/index.html site/styles.css
git commit -m "feat: add guarantee, final CTA, and footer"
```

---

### Task 7: Mobile polish, accessibility, and metadata pass

**Files:**
- Modify: `site/styles.css`
- Modify: `site/index.html`

- [ ] **Step 1: Verify tap targets and spacing on a 360px viewport**

Confirm all buttons/links are at least 44px tall, no horizontal scroll, text is readable at default zoom. Adjust `--pad` or font sizes only if something overflows.

- [ ] **Step 2: Add focus styles for keyboard users**

```css
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--accent); outline-offset: 2px;
}
```

- [ ] **Step 3: Confirm reduced-motion and contrast**

With OS "reduce motion" on, smooth scroll and hover lift are disabled (already handled by the media query). Confirm amber on near-black passes contrast for large text (it does at this lightness).

- [ ] **Step 4: Add a placeholder favicon and og image note**

Confirm `assets/img/` has `favicon.png` and `og.png` or the references degrade gracefully (broken image is acceptable until Darko supplies them; note it in `CONFIG.md`).

- [ ] **Step 5: Browser-preview check**

Tab through the page with the keyboard: every link/button shows an amber focus ring. No horizontal scrollbar at 360px. 

- [ ] **Step 6: Commit**

```bash
git add site/styles.css site/index.html
git commit -m "feat: mobile polish, focus styles, accessibility pass"
```

---

### Task 8: Deploy to GitHub Pages on saastanak.digitalcorner.nl

**Files:**
- Create: `SaaStanak/README.md` (deploy notes)
- Create: `site/CNAME` (custom domain)

**Decided:** GitHub Pages, custom subdomain `saastanak.digitalcorner.nl`.

- [ ] **Step 1: Create `site/CNAME`**

File contents (single line, no protocol):

```
saastanak.digitalcorner.nl
```

- [ ] **Step 2: Initialize a git repo and create the remote (confirm-before-acting)**

The workspace root is not a git repo. Create a dedicated repo for this site (e.g. under the user's GitHub org) and push. Creating/pushing a remote repo is a confirm-before-acting step.

- [ ] **Step 3: Push and enable Pages**

```bash
# from inside SaaStanak/ once a repo + remote exist
git push -u origin main
# repo Settings -> Pages: source = main branch, folder = /site
# set custom domain = saastanak.digitalcorner.nl, then Enforce HTTPS once cert provisions
```

- [ ] **Step 4: DNS record (hand to Darko)**

Add a CNAME record at the `digitalcorner.nl` DNS provider:
`saastanak` (host) -> `<github-username>.github.io` (target).
Provide Darko the exact record to paste. HTTPS cert provisions a few minutes to ~1 hour after DNS resolves.

- [ ] **Step 5: Verify the live URL on a real phone**

Open `https://saastanak.digitalcorner.nl` on a phone. Confirm fonts load, sticky bar works, videos play, all four placeholders (LinkedIn, WhatsApp, calendar, FB page) point to real destinations.

- [ ] **Step 5: Commit deploy notes**

```bash
git add README.md
git commit -m "docs: add deploy notes"
```

---

## Drop-in assets still needed from Darko

These do not block the build (placeholders are wired in). Supply before going live:
1. Facebook page URL to feature (`FB_PAGE_URL`)
2. LinkedIn URL (`LINKEDIN_URL`)
3. WhatsApp number, digits only (`WHATSAPP_NUMBER`)
4. Calendar link for the 30 minute call (`CALENDAR_URL`), or confirm WhatsApp is the booking channel
5. Video files for `assets/video/` (or external embed URLs) plus poster images
6. favicon.png and og.png

## Video examples to produce (separate work stream, reuse-first)

Three 9:16 clips in the canonical HeyReach full-screen format (see `HeyReach Influencer/docs/playbooks/short-form-video-workflow.md`):
1. "Meet your AI face" demo, AI presenter introduces itself as a brand's spokesperson (~30 to 45s).
2. Repurposed existing HeyReach clip as a real SaaS example (ships first, already exists).
3. "One face, infinite content" range reel (same persona, three content contexts).
Tight-deadline fallback: ship #2 live; #1 and #3 as poster placeholders labeled "coming".
