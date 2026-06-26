# Hong Kong Argentine Tango Cultural Association — Website PRD

**Project code:** `hk-tango-org-website`
**Type:** Static landing page (single page)
**Status:** v1 spec ready for build
**Owner:** DS (chairing the org)
**Created:** 2026-06-26

---

## 1. Background & Purpose

DS and collaborators have just registered a new non-profit organization in Hong Kong:

- **Legal name:** Hong Kong Argentine Tango Cultural Association
- **Marketing name:** "HK Tango" (per existing logo)
- **Positioning:** Curated cultural body that exists *alongside* the existing milonga community — not the community itself. Think: cultural institution / arts org, not dance school.
- **Status:** Newly registered, no public web presence yet.

**The website exists to:**
1. Establish the org as a real, legitimate cultural body (searchable, professional, findable).
2. Communicate *what* the org does, *why* it exists, and *how* to engage.
3. Provide a single, beautiful point of contact for the HK tango community, visiting dancers, and prospective members.

**v1 is intentionally a landing page.** Multi-page expansion (events, classes, gallery, donate) is for later. Get the foundation right first.

---

## 2. Scope (v1)

### In scope
- Single static HTML page (`index.html`) + a single CSS file (`style.css`) + a small JS file for any interactivity (`script.js`, optional)
- Logo placement and visual identity integration
- Six content sections (described in §5)
- Mobile-responsive layout
- Cloudflare Pages deployment configuration
- Placeholder gallery with TODO comments for DS to drop in real photos later
- Contact section with email + Instagram link
- Footer with org name, registration placeholder, copyright

### Out of scope (for v1)
- Multi-page architecture
- CMS or content management
- Event listings / RSVP system
- Email capture / mailing list integration
- Blog / news
- Donations / payment
- Multi-language (English only for v1)
- Custom domain setup (DS will register domain later — Cloudflare Pages supports `*.pages.dev` subdomain in the meantime)

---

## 3. Visual Identity

### Logo
- **File:** `assets/logo-original.jpg` (already saved)
- **Style:** Typographic, monochrome, high-contrast Didone-style serif
  - "The" (small, light serif, top)
  - "HK Tango" (bold, high-contrast serif — main mark)
  - "ARGENTINE TANGO / CULTURAL ASSOCIATION" (small caps subtitle, two lines)
- **Treatment on site:** Use as a primary brand mark in the header. For the site, an SVG recreation of the typographic logo would be ideal (cleaner at all sizes, sharper on retina) — if feasible within the build time, recreate the wordmark in HTML/CSS using a similar serif (e.g., Playfair Display, Cormorant Garamond, or Bodoni Moda from Google Fonts). Otherwise, use the JPG with `max-width: 100%` and `height: auto`.
- **Note for sub-agent:** If recreating as text, do NOT perfectly copy the existing logo's exact letterforms (legal/licensing). Aim for visual harmony — same weight, similar proportions — using a free Didone-style font from Google Fonts. The original JPG is for reference only.

### Color palette
- **Primary:** Pure black `#000000` on pure white `#FFFFFF` (matches logo)
- **Accent:** Deep oxblood / burgundy `#5C1A1B` — used VERY sparingly (links, hover states, one thin section divider). Single drop, not a wall.
- **Neutrals:** Off-white `#FAFAF7` for subtle section backgrounds (alternate sections to add rhythm without color)
- **Type colors:** Body `#1A1A1A` (slight off-black for less harsh reading), secondary text `#666666`

### Typography
- **Display / headings:** Didone-style serif from Google Fonts — recommend **Playfair Display** (close to Didone, free, well-supported). Alternatives: Cormorant Garamond (more delicate), Bodoni Moda (more fashion).
- **Body:** Clean humanist serif or geometric sans for readability — recommend **Inter** (sans, pairs well with Didone display) or **Lora** (serif body for editorial feel). Default to **Inter** for body, **Playfair Display** for display.
- **Hierarchy:**
  - H1 (hero): 64-96px desktop, 40-48px mobile
  - H2 (section titles): 36-48px desktop, 28-32px mobile
  - H3: 24-28px desktop, 20-22px mobile
  - Body: 17-19px desktop, 16-17px mobile
  - Small/caption: 14-15px

### Layout principles
- **Editorial, not corporate.** Generous white space, strong typography hierarchy, large hero type.
- **Magazine-style vertical rhythm.** Sections alternate white/off-white backgrounds.
- **Maximum content width:** ~1200px (don't fill ultrawide screens).
- **Mobile-first:** Design for 375px viewport first, scale up.
- **No animations beyond tasteful hover transitions** (no parallax, no auto-playing video, no scroll-jacking).

---

## 4. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | Hand-coded HTML5 | Ownership, no dependencies, simple |
| Styling | Hand-coded CSS3 (no framework) | Ownership, small, fast, no build step |
| JS | Vanilla JS (only if needed for menu toggle, etc.) | Same as above |
| Fonts | Google Fonts (Playfair Display + Inter) | Free, fast, no build step |
| Hosting | Cloudflare Pages | Free, fast at edge, custom domain support later, Git-based deploys |
| Version control | Git, hosted on GitHub | DS already familiar with the workflow (we use this for Daily Chip) |
| Domain | `*.pages.dev` subdomain for v1, custom domain when DS registers one | No blocker for v1 launch |

**No build tools. No npm. No bundler. Edit a file, push, Cloudflare auto-deploys.**

---

## 5. Page Structure (single page, six sections)

### Section 1: Hero (above the fold)
- Logo (centered or left-aligned, large)
- Org name as H1: **"Hong Kong Argentine Tango Cultural Association"** OR the shorter "**HK Tango**" with subtitle
- One-line tagline (proposed, DS to confirm): *"A cultural home for Argentine Tango in Hong Kong."*
- Optional: subtle CTA — "Get in touch" → scroll to contact
- Background: pure white, no image, no gradient

### Section 2: Mission / About
- H2: "Our Mission" or "Who We Are"
- 2-3 short paragraphs (proposed copy, DS to confirm/rewrite):
  - Para 1 (origins): *The Hong Kong Argentine Tango Cultural Association is a newly registered non-profit dedicated to celebrating, preserving, and advancing the art of Argentine Tango in Hong Kong.*
  - Para 2 (what we do): *We work to bring the city closer to the tradition — through curated milongas, classes, workshops with international masters, and cultural events that frame tango as a living art form, not just a social dance.*
  - Para 3 (why we exist): *Hong Kong's tango community is small, dedicated, and cosmopolitan. We exist to give it a cultural home — a place where the tradition is honored seriously, where dancers of all levels can find a stage, and where the next generation of practitioners has somewhere to land.*
- Visual: maybe one large editorial-style image (placeholder for v1)

### Section 3: What We Do
- H2: "What We Do"
- 3-4 cards or feature blocks, each with a small icon (or just a thin oxblood rule) + 1-line title + 2-line description:
  1. **Milongas** — *Regular social dance gatherings, curated for quality of music, floor craft, and atmosphere.*
  2. **Classes & Workshops** — *Ongoing instruction and periodic intensives with local and international teachers.*
  3. **Cultural Events** — *Performances, talks, and exhibitions that connect tango to the wider cultural conversation.*
  4. **Community** — *A gathering point for the HK tango community — visitors, locals, beginners, and masters alike.*
- Layout: 2x2 grid on desktop, stacked on mobile

### Section 4: Gallery (placeholder)
- H2: "Gallery" or "Moments"
- 3-6 image placeholders in a clean grid
- Use CSS-only placeholders (subtle gray box with center label "Photo" or "TODO: add photo") for v1
- Add HTML comment near each placeholder: `<!-- TODO: replace with real photo. Recommended: 3:2 or 4:3 ratio, min 1200px wide -->`
- DS will drop real photos in later

### Section 5: Contact
- H2: "Get in Touch" or "Connect"
- Email: `torti.reloaded@gmail.com` (mailto: link)
- Instagram: `@hktango.hk` (link to https://instagram.com/hktango.hk)
- Optional: a one-line "Mailing list coming soon" placeholder if DS wants to add one later
- Layout: simple, centered, large type, breathing room

### Section 6: Footer
- Org name: "Hong Kong Argentine Tango Cultural Association"
- Registration placeholder: `Registered non-profit in Hong Kong · [Reg. #: TBD by DS]`
- Copyright: `© 2026 Hong Kong Argentine Tango Cultural Association. All rights reserved.`
- Optional small line: "Built with care in Hong Kong" or similar — DS's call

---

## 6. File Structure

```
hk-tango-org-website/
├── PRD.md                    (this file)
├── summary.md                (project summary for the knowledge graph)
├── items.json                (project tracking for the knowledge graph)
├── README.md                 (build/deploy instructions for DS)
├── index.html                (the page)
├── style.css                 (all styling)
├── script.js                 (optional, for menu toggle etc.)
├── assets/
│   ├── logo-original.jpg     (reference only, do not embed directly)
│   └── favicon.ico           (TBD — could derive from logo, or skip for v1)
└── .gitignore                (basic — no node_modules etc., even though we have none)
```

---

## 7. Cloudflare Pages Deployment

**Sub-agent must NOT deploy the site.** Deploying requires DS's explicit approval and his Cloudflare account credentials. Build the site, commit to a new Git repo, and provide deploy instructions.

**Deploy instructions to include in README.md:**

1. **Create GitHub repo:** DS creates a new public/private repo (e.g., `hk-tango-website`).
2. **Push code:** `git init && git add . && git commit -m "v1 landing page" && git remote add origin <url> && git push -u origin main`
3. **Connect Cloudflare Pages:**
   - Log in to Cloudflare dashboard
   - Go to "Workers & Pages" → "Create application" → "Pages" → "Connect to Git"
   - Select the GitHub repo
   - Build settings:
     - **Framework preset:** None
     - **Build command:** (leave empty)
     - **Build output directory:** `/` (root)
   - Click "Save and Deploy"
4. **First deploy** will be live at `<project-name>.pages.dev` within ~1 minute.
5. **Custom domain** (when DS registers one): Cloudflare Pages → Custom domains → follow the wizard.

---

## 8. Acceptance Criteria (v1)

The build is "done" when ALL of the following are true:

- [ ] `index.html` is valid HTML5
- [ ] `style.css` is valid CSS3, no frameworks
- [ ] Page is fully responsive (looks good at 375px, 768px, 1280px widths)
- [ ] All 6 sections render correctly with proposed copy
- [ ] Logo / wordmark is visible in the header
- [ ] Email link (`mailto:torti.reloaded@gmail.com`) works
- [ ] Instagram link (https://instagram.com/hktango.hk) works and opens in new tab
- [ ] Gallery section has 6 placeholders with clear TODO comments
- [ ] Footer shows org name, registration placeholder, copyright
- [ ] Page loads in <1 second on a normal connection
- [ ] No console errors
- [ ] No external dependencies beyond Google Fonts
- [ ] All files committed to a new git repo at the path DS specifies (or `~/clawd/life/projects/hk-tango-org-website/` with a clear "this is ready to push to a new GitHub repo" note)
- [ ] README.md has clear step-by-step Cloudflare Pages deploy instructions

---

## 9. Open Items (DS to decide later, NOT blockers for v1)

- [ ] Custom domain (e.g., `hkatca.org.hk`)
- [ ] Real photos for the gallery
- [ ] Mission copy — proposed drafts above, DS can rewrite as he sees fit
- [ ] Tagline — proposed "A cultural home for Argentine Tango in Hong Kong", DS can change
- [ ] Email capture / mailing list (Cloudflare Worker + Turnstile)
- [ ] Event listings (when there are events to list)
- [ ] Multi-language (Traditional Chinese, Spanish for visiting teachers)
- [ ] Donations / Stripe integration
- [ ] Favicon (could derive from the "H" or "T" of the wordmark)

---

## 10. Build Workflow

1. **Torti (me):** Write this PRD ✅
2. **Torti (me):** Spawn sub-agent (minimax/MiniMax-M2.5) with the PRD as the spec
3. **Sub-agent:** Build `index.html`, `style.css`, `script.js`, `README.md`, `.gitignore` per the spec
4. **Torti (me):** Review output, iterate if needed
5. **DS:** Approves, then I create the GitHub repo, push, and we do the Cloudflare Pages setup together (or DS does it solo with the README instructions)

---

*This PRD is the source of truth. If something is unclear, ask before building, not after.*
