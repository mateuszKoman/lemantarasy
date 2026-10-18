# Leman Tarasy – lemantarasy.pl

Website of **Leman Tarasy**, a local company from Biłgoraj, Poland, that builds terraces, terrace
roofs and wooden terrace louvres, and makes custom outdoor sofas and lounge furniture.

Live at **[lemantarasy.pl](https://lemantarasy.pl)**.

The site is a single page for potential customers in Biłgoraj and the surrounding area. It
introduces the company, shows a gallery of completed projects and gives contact details. All text
on the site is in Polish.

## Features

- **Project gallery** – a grid of completed projects. Each opens a full-screen photo viewer with
  previous/next buttons, keyboard arrows and Esc.
- **Mobile-friendly** – tested on screens from 280px (Galaxy Fold) to desktop, in portrait and
  landscape.
- **Works without JavaScript** – the page is prerendered at build time, so text, photos and contact
  details show even if scripts fail. Gallery cards then link straight to the photos.
- **Local SEO** – page title and description, `LocalBusiness` structured data (schema.org),
  descriptive image alt texts, Open Graph tags for link previews, `sitemap.xml` and `robots.txt`.
- **Fast** – resized JPEG photos, lazy-loaded thumbnails and a small JavaScript bundle.

## Tech stack

- [Angular 22](https://angular.dev): standalone components, signals, zoneless change detection
- Static prerendering with `@angular/ssr` (no server needed)
- SCSS
- Hosted on GitHub Pages, deployed with GitHub Actions

## Getting started

Requires Node.js 22.22+, 24.15+ or 26+ (an LTS version is recommended).

```bash
npm install
npm start       # dev server at http://localhost:4200
npm run build   # production build in dist/lemantarasy/browser
```

## Project structure

```
src/
├── index.html            # page title, meta tags, structured data
├── styles.scss           # global styles and design tokens
└── app/
    ├── content.ts        # all visitor-facing text (Polish)
    ├── projects.ts       # gallery projects and their photos
    ├── hero/             # logo, headline, main photo
    ├── about/            # company introduction
    ├── gallery/          # project grid
    ├── lightbox/         # full-screen photo viewer
    ├── contact/          # phone, e-mail, service area
    └── footer/
public/
├── images/thumbs/        # gallery thumbnails (one per project)
├── images/fulls/         # full-size photos
├── CNAME                 # custom domain for GitHub Pages
├── robots.txt
└── sitemap.xml
```

## Adding a project to the gallery

1. Put the photos in `public/images/fulls/` (e.g. `11.jpg`, `11a.jpg`, `11b.jpg`) and a thumbnail
   in `public/images/thumbs/11.jpg`. Use JPEGs, at most about 2400px wide for photos and 1200px for
   thumbnails.
2. Add the project to `src/app/projects.ts`. The first photo in the list opens first:
   ```ts
   project('11', ['11', '11a', '11b']),
   ```
3. Add a short Polish description of the project in `src/app/content.ts` under
   `gallery.projects`. It's used as the image alt text for screen readers and search engines.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`). In the repository settings, **Pages → Source** must be set to
**GitHub Actions**.

After changing the page content, update `<lastmod>` in `public/sitemap.xml`.
