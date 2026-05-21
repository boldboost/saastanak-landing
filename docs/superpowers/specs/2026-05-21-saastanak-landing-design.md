# SaaStanak Landing Page — Design Spec

Date: 2026-05-21
Owner: Darko (AI Factory)
Status: Awaiting user review

## Purpose

A single-page "we met at SaaStanak" landing page that converts conference contacts (SaaS founders first, marketing agencies second) into a 30-minute call. The page repositions AI Factory away from commodity "AI content" toward a branded AI influencer offer, backed by the HeyReach case study.

Audience: SaaS founders (primary), marketing agencies (secondary). English only. Mobile-first (most scans happen on a phone right after meeting Darko).

Deadline: SaaStanak is within ~1 week. Ship fast, reuse existing video assets.

## The offer (from the Hormozi pass)

Hero, then two alternatives, ordered for pull and defensibility:

1. **HERO — "Your Brand's Face, On Autopilot"**
   A custom AI influencer/persona locked to the client's brand: a consistent face and voice that produces video and static content indefinitely. AI Factory runs it end to end. Proof: HeyReach.
2. **"Done-for-you content engine"**
   Ongoing branded AI content for SaaS/agencies, sold as an outcome (consistent presence, more reach), not "posts." For clients who do not want a face/persona.
3. **"Build it, you own it"**
   For non-retainer buyers: AI Factory builds the custom content automation/system and hands it over for the client's team to run. One-time build, no ongoing dependency.

Risk reversal (guarantee): first batch of content delivered within an agreed window or month one is free.
Honest scarcity: limited brand slots; only 2 SaaStanak slots this month.
Pricing: not shown on page, by design. CTA is a 30-minute call.

## Page structure (top to bottom, mobile-first)

1. **Hero** — "We met at SaaStanak" greeting + one-line positioning + Darko's name / AI Factory. Primary CTA button (Book a 30-min call).
2. **Sticky connect bar** — LinkedIn, WhatsApp, Bookmark this page. Stays reachable on scroll.
3. **Offer cards** — 3 cards, hero first. Each: outcome headline + one line on what it removes for the buyer (time, talent, hiring, fake-looking AI, inconsistent voice).
4. **Proof** — video examples (see video spec) + a button to a live Facebook page AI Factory runs.
5. **Risk reversal + scarcity** — guarantee line + "2 SaaStanak slots this month."
6. **Final CTA** — repeat Book a 30-min call (WhatsApp or calendar link).
7. **Footer** — AI Factory, minimal.

### Connect / bookmark behavior
- LinkedIn + WhatsApp: simple links (`https://wa.me/<number>` for WhatsApp).
- Bookmark: on mobile, trigger the browser add-to-home-screen / save flow where supported; everywhere else show a small "press Ctrl/Cmd+D to save" hint as fallback. No login, no storage.

## Visual direction — dark terminal-future, creative work as the color

Chosen direction: **dark terminal-future shell, with the creative media providing all the color.** This resolves the tension between a techy frame (right for SaaS/automation buyers) and the vibrant creative side (AI influencers, brand content). Dark UIs are how galleries and video sites make media pop, so the page chrome stays techy while every video/image tile lights up.

- **Palette:** near-black background (#0B0B0C-ish), off-white text, **warm amber phosphor** accent (not cold green) for CTAs, eyebrows, and chrome. Amber reads retro-CRT but warm, bridging tech and creative.
- **Type:** monospace for labels/eyebrows/buttons and a clean grotesk for headings/body. Confident, large headline sizing.
- **Texture:** faint scanline/CRT overlay and subtle glow on the accent, used lightly so it never competes with the media. Hairline borders on cards.
- **Media is the brightest element:** AI-influencer video and brand images sit in full-bleed colorful tiles. The eye lands on the creative work, not the chrome. This is the deliberate counterweight to the dark, techy shell.
- **Motion:** minimal. Slight hover lift, optional subtle terminal/cursor blink on one eyebrow. Respect reduced-motion.
- **Feel:** serious engineering on the outside, vivid creative on the inside. Matches the "grown-up engineering, not agent hype" positioning while still proving the creative chops.

## Copy rules
- NO em dashes or en dashes anywhere in page copy (use commas, periods, or "to" for ranges).
- Plain, confident, outcome-led. No "AI agent" hype language. Sell the result, not the tech.

## Build approach
- Static single-page site (HTML/CSS, light JS for the bookmark prompt + smooth scroll). No backend, no Supabase. Fastest path for a 1-week ship.
- Deploy target: GitHub Pages or similar static host (confirm with Darko). Custom subdomain optional.
- Assets needed from Darko (can build with placeholders, drop in later):
  - (a) Facebook page URL to feature
  - (b) LinkedIn URL
  - (c) WhatsApp number
  - (d) Calendar link for the 30-min call (or use WhatsApp as the booking channel)

## Video examples (reuse-first, see separate notes)
Three 9:16 clips in the canonical HeyReach full-screen format (~45s), prioritized:
1. "Meet your AI face" demo (one AI presenter introduces themselves as a brand's AI spokesperson).
2. Repurposed existing HeyReach clip as a real SaaS example (ships first, already exists).
3. "One face, infinite content" range reel (same persona across 3 content contexts).
If time is tight: ship #2 live, #1 and #3 as placeholders.

## Out of scope (YAGNI)
- No pricing tables, no checkout, no email capture/CRM, no multi-page site, no CMS, no analytics dashboard. A call is the only conversion.
