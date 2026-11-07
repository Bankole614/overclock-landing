# OVERCLOCK — Standalone Landing Page & Technical Case Study

This directory is **100% self-contained**. You can move or copy this entire `landing-page/` folder out of the game project into its own separate repository, folder, or static hosting service (e.g. Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## Directory Contents

| File | Purpose |
| :--- | :--- |
| **`index.html`** | Standalone landing page with live interactive canvas physics sandbox, performance metrics, and feature cards. |
| **`OVERCLOCK-Case-Study.pdf`** | Production-ready 4-page PDF document generated via ReportLab for portfolio attachments or job applications. |
| **`generate_pdf.py`** | Standalone Python script to regenerate the PDF at any time (`python generate_pdf.py`). |
| **`OVERCLOCK-Case-Study.md`** | Markdown edition of the case study for GitHub READMEs, Notion, or blog posts. |
| **`favicon.svg`** | Cyberpunk puck vector icon. |

---

## How to Deploy / Host Independently

### Build the production stylesheet
1. Run `npm install` once in this folder.
2. Run `npm run build:css` whenever you change Tailwind classes or the design system.
3. The generated production file is `styles.css` in the project root.

### Option A: Static Hosting (Vercel, Netlify, Cloudflare Pages)
1. Push this folder to a new GitHub repository (e.g. `overclock-landing` or `overclock-portfolio`).
2. Connect the repo to Vercel, Netlify, or Cloudflare Pages.
3. Set the build command to empty/none and publish directory to root (`.`).
4. It will serve immediately with zero dependencies!

### Option B: GitHub Pages
1. In your repository settings on GitHub, enable GitHub Pages pointing to the `main` branch root.
2. Your landing page is live at `https://<username>.github.io/<repo>/`.

---

## Pointing to Your Live Game
In `index.html`, update the `href` for the live game link:
```html
<!-- Example: -->
<a href="https://your-deployed-overclock-game.com" class="btn btn-primary">Play Game</a>
```

