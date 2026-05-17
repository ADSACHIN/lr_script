# Security Scripting Curriculum

A React + Vite security scripting curriculum application that covers malware analysis, reverse engineering, detection engineering, cloud security, threat intelligence, and ethical labs.

This repository has been prepared for deployment to GitHub at `https://github.com/ADSACHIN/lr_script.git`.

## Project structure

- `src/` — React application source files
- `public/` — static assets served by Vite
- `package.json` — project dependencies and scripts
- `vite.config.js` — Vite configuration

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually `http://127.0.0.1:5173`.

## Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Git deployment

Push the `main` branch to GitHub:

```bash
git push -u origin main
```

## Vercel deployment

This project can be deployed to Vercel as a static Vite app.

- Build command: `npm run build`
- Output directory: `dist`

Connect the `lr_script` repository to Vercel and it will build automatically.

## Notes

- `dist/` and `node_modules/` are ignored via `.gitignore`.
- Duplicate or legacy source files have been removed from the tracked repository.
