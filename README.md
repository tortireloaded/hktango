# Hong Kong Argentine Tango Cultural Association — Website

Static landing page for the Hong Kong Argentine Tango Cultural Association (HK Tango).

## Quick Start (Local Preview)

To preview the site locally:

1. **Using Python (simplest):**
   ```bash
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser.

2. **Using VS Code Live Server:**
   Install the Live Server extension, right-click `index.html`, and select "Open with Live Server".

## Deploy to Cloudflare Pages

Follow these steps to deploy your site:

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `hk-tango-website` (or your preferred name)
3. Select **Public** or **Private**
4. Click **Create repository**

### Step 2: Push Your Code

Open a terminal in the project folder and run:

```bash
cd /home/torti/clawd/life/projects/hk-tango-org-website/

git init
git add .
git commit -m "v1 landing page"

# Replace <your-username> and <your-repo-name> with your actual GitHub details
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Cloudflare Pages

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Configure the build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**

### Step 4: Your Site is Live! 🎉

Your site will be live at:
```
https://<your-project-name>.pages.dev
```

The first deploy typically takes 30-60 seconds.

### Step 5: (Optional) Custom Domain

When you're ready to use a custom domain (e.g., `hktango.org.hk`):

1. Go to Cloudflare Dashboard → **Workers & Pages** → your site
2. Click **Custom domains**
3. Follow the wizard to add your domain

Cloudflare will automatically handle SSL.

## Project Structure

```
hk-tango-org-website/
├── index.html       # Main page
├── style.css        # All styles
├── script.js        # Mobile navigation
├── assets/
│   └── logo-original.jpg  # Logo reference (do not embed)
├── README.md        # This file
├── .gitignore
└── PRD.md          # Project specification
```

## Adding Real Photos

The gallery section has 6 placeholder images. To replace them:

1. Add your photos to the `assets/` folder
2. Update `index.html` — replace each placeholder `<div>` with an `<img>` tag:
   ```html
   <figure class="gallery-item">
       <img src="assets/your-photo.jpg" alt="Description of photo">
   </figure>
   ```

**Recommended photo specs:**
- Aspect ratio: 3:2 or 4:3
- Minimum width: 1200px
- Format: JPG or WebP

## Tech Stack

- **HTML5** — Semantic markup, no frameworks
- **CSS3** — Mobile-first, hand-written, no dependencies
- **JavaScript** — Vanilla JS for mobile navigation only
- **Fonts:** Playfair Display (display) + Inter (body) via Google Fonts
- **Hosting:** Cloudflare Pages (free)

## Credits

- Built for the Hong Kong Argentine Tango Cultural Association
- Design: Editorial, minimalist, magazine-style