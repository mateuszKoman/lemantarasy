# lemantarasy.pl

The [lemantarasy.pl](https://lemantarasy.pl) website, built with Angular.

```bash
npm install
npm start       # dev server at http://localhost:4200
npm run build   # production build in dist/lemantarasy/browser
```

- `src/app/content.ts` – all visitor-facing text (in Polish).
- `src/app/projects.ts` – the gallery projects and their photos.
- `public/images` – photos (`thumbs/` for gallery thumbnails, `fulls/` for full-size photos).

Every push to `main` deploys the site to GitHub Pages via GitHub Actions.
