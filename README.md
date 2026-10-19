# hminle.com

Personal academic website, built with [Astro](https://astro.build) + Tailwind CSS and served by GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

## Editing content

- `src/data/site.ts`: name, links, CV, experience, education, patents, service
- `src/data/publications.ts`: papers (`selected: true` shows a paper on the home page)
- `src/pages/index.astro`: bio text
- `src/styles/global.css`: color palette (light + dark)

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.
