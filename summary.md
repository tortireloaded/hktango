# HK Tango Org Website — Summary

**One-liner:** Static landing page for the newly registered Hong Kong Argentine Tango Cultural Association, hosted on Cloudflare Pages.

**Status:** v1 built, reviewed, pending DS launch approval
**Owner:** DS
**Started:** 2026-06-26
**Last updated:** 2026-09-29 (review + fix pass by Zuko)

## The org
- **Legal name:** Hong Kong Argentine Tango Cultural Association
- **Marketing name:** HK Tango
- **Type:** Newly registered Hong Kong non-profit
- **Positioning:** Curated cultural body alongside (not replacing) the existing HK milonga community
- **Logo:** Typographic, monochrome Didone-style serif ("HK Tango" wordmark + "ARGENTINE TANGO / CULTURAL ASSOCIATION" subtitle)

## The site
- **Scope:** Single landing page, English only
- **Stack:** Hand-coded HTML5 + CSS3 + minimal vanilla JS, no framework, no build step
- **Hosting:** Cloudflare Pages (free tier, `*.pages.dev` subdomain until DS registers a custom domain)
- **Fonts:** Playfair Display (display) + Inter (body) from Google Fonts
- **Palette:** B&W primary, single accent of deep oxblood/burgundy (#5C1A1B)
- **Sections:** Hero, Mission, What We Do (4 cards), Gallery (placeholders), Contact, Footer
- **Contact v1:** info@hktango.org + instagram.com/hktango.hk (DS owns the domain)

## Key files
- `PRD.md` — full spec, source of truth
- `assets/logo-original.jpg` — reference logo
- `assets/hktango-logo.svg` — live wordmark used in the header
- `assets/favicon.svg` — tab icon
- `index.html`, `style.css`, `script.js` — built 2026-06-26, reviewed/fixed 2026-09-29
- `README.md` — Cloudflare Pages deploy instructions

## Review log — 2026-09-29
Fixed in one pass: added the missing `<h1>` (hero was a `<p>`, page had no document heading); added `scroll-margin-top` so the fixed header no longer covers section headings on nav click; added `favicon.svg` + link; added Open Graph / Twitter meta; scaled hero type to the PRD's 40-48px mobile / 64-96px desktop spec. This file previously said "build queued" and `items.json` said "v1-spec-ready" — both were stale and now corrected.

Left alone by DS's instruction: the header logo (currently the vectorized handwritten "hk" script SVG) and the contact email `info@hktango.org` (DS owns the domain).

## Open items (not blockers for v1)
- Custom domain
- Real photos for gallery
- Proper 1200x630 Open Graph share image (currently a 640x640 square logo)
- Mission copy (drafts in PRD, DS can rewrite)
- Email capture, event listings, donations, multi-language — all later
