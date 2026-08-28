# Aditya Kumar — Cybersecurity Portfolio

A cybersecurity-themed personal portfolio built with React and Vite, designed for fast static deployment on GitHub Pages.

## Stack

- React
- Vite
- CSS with responsive layouts and CSS animations
- JetBrains Mono + Inter
- GitHub Actions + GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

The repository is configured for **GitHub Pages** using GitHub Actions. Every push to `main` builds the Vite app and publishes `dist/`.

In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source if it is not already enabled.

The Vite base path is configured as `/adityaportfolio/` for the repository site.

## Content source

Professional information on the site is taken from the supplied CV. The CV does not contain a project section or project links, so no invented projects or links are shown.

## Resume PDF

Add the supplied CV PDF to `public/resume.pdf` to enable the Download CV button. The GitHub connector used for this build supports text-file writes but cannot directly upload binary PDF files, so the PDF needs to be added through GitHub's file upload UI or a local git push.
