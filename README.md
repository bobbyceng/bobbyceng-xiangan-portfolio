# Xiangan Portfolio (CN/EN)

Apple-like single-page portfolio for Xiangan Zeng (AI Product Manager). Built with Vite + React and a bilingual toggle.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Edit Content

All visible copy lives in `src/content.js` (CN/EN). Update the text there only.

Key fields:
- `hero`, `highlights`, `projects`, `experience`, `skills`, `education`, `contact`
- Nav labels and CTA labels are also in `src/content.js`

## Replace Assets

All public assets are served from `public/`:
- Headshot: `public/assets/headshot.jpg`
- Coach Titan screenshots: `public/assets/coach-titan/*`
- Resume PDF: `public/downloads/resume.pdf`
- PRDs: `public/downloads/didi-copilot-prd.docx`, `public/downloads/crm-labeling-prd.docx`
- Demos: `public/demos/didi/index.html`, `public/demos/crm/index.html`

To update an asset, replace the file with the same name.

## Deploy (Vercel)

1. Create a GitHub repo named `xiangan-portfolio`.
2. Push this project to `main`.
3. In Vercel: **New Project** → import repo → Framework preset: **Vite** → Deploy.

## Verify After Deploy

- Site loads at the Vercel URL
- Links return HTTP 200:
  - `/downloads/resume.pdf`
  - `/downloads/didi-copilot-prd.docx`
  - `/downloads/crm-labeling-prd.docx`
  - `/demos/didi/index.html`
  - `/demos/crm/index.html`

## Privacy Note

Phone number is intentionally **not** displayed on the site UI. The downloadable resume may include a phone number.
