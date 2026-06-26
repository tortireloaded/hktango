# HK Tango Org Website — Summary

**One-liner:** Static landing page for the newly registered Hong Kong Argentine Tango Cultural Association, hosted on Cloudflare Pages.

**Status:** v1 PRD written, build queued
**Owner:** DS
**Started:** 2026-06-26

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
- **Contact v1:** torti.reloaded@gmail.com + instagram.com/hktango.hk

## Key files
- `PRD.md` — full spec, source of truth
- `assets/logo-original.jpg` — reference logo
- `index.html`, `style.css`, `script.js` — to be built by sub-agent
- `README.md` — Cloudflare Pages deploy instructions (to be built)

## Open items (not blockers for v1)
- Custom domain
- Real photos for gallery
- Mission copy (drafts in PRD, DS can rewrite)
- Email capture, event listings, donations, multi-language — all later

## Next
- Spawn sub-agent to build v1 per PRD
- Review output
- DS approves → create GitHub repo → push → Cloudflare Pages setup
