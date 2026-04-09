---
title: Copilot / Agent Instructions
---

# The Objectivists: A Digital Humanities Archive

This is a digital humanities project and archival site dedicated to the Objectivist Poets—a mid-20th century group of English-language poets. The site serves scholars, students, and general readers interested in experimental American poetry, providing comprehensive resources including poet biographies, publication histories, critical scholarship, and digitized archival materials from primary collections.

## Project Overview

**Elevator pitch:** The Objectivists project documents the lives, work, scholarship, and archival materials of a historically significant group of poets.

**Four core sections:**

1. **The Lives** — Group formation history and individual biographies of core poets
2. **The Work** — Introduction to the group's poetry with pages documenting each poet's publications
3. **The Scholarship** — Critical responses to the group and pages on each poet's scholarly reception
4. **The Materials** — Multimedia, digitized archival items, and guidance on accessing research collections for each poet

**Core poets covered:** Louis Zukofsky, William Carlos Williams, George Oppen, Lorine Niedecker, Charles Reznikoff, Carl Rakosi, Basil Bunting

**Purpose of this file:** Provides concise, machine-friendly guidance for GitHub Copilot and automated agents. It covers project scope, tech stack, conventions, structure, and available tools.

## Tech Stack

### Frontend & Static Generation
- **11ty (Eleventy) v3.0.0-alpha.5** — Static site generator for building the site from templates and content files
- **Nunjucks** — Templating language used in layouts (`src/_layouts/`) and components (`src/_includes/components/`)
- **Markdown** — Content format for all pages, bios, scholarship, and materials
- **CSS** — Styling in `src/assets/css/` and root-level `style.css`

### Data & Content
- **JSON** — Structured metadata in `src/people/people.json`, `src/materials/materials.json`, `src/scholarship/scholarship.json`, `src/writing/writing.json`
- **YAML frontmatter** — Page metadata in Markdown files

### Development & Build
- **npm scripts** (defined in `package.json`):
  - `npm run dev` — Local dev server with watch and live reload
  - `npm run build` — Production build (used by Netlify)
- **Netlify** — Hosting and deployment (config in `netlify.toml`)

### Utility Scripts
- **convert_captions.py** — Python script for processing/converting caption formats
- **convert-shortcodes.js** — Node.js script for transforming shortcode syntax
- **markdown-it v14.1.0** — Markdown parser for rendering content

## Project Structure

```
src/
├── _includes/          — Reusable components and layouts
│   ├── components/     — Nunjucks partials (grid.njk, etc.)
│   └── layouts/        — Page layouts (base.njk, home.njk, person.njk, materials.njk, page.njk)
├── assets/             — Static assets
│   ├── css/            — Stylesheets (normalize.css, style.css)
│   ├── images/         — Images used throughout site
│   └── pdfs/           — PDF documents and research materials
├── pages/              — Core pages (introduction.md, the-lives.md, the-work.md, the-scholarship.md, the-materials.md, timelines.md, colophon.md)
├── people/             — Individual poet pages (one .md per poet) + people.json index
├── materials/          — Archival & research materials for each poet + materials.json index
├── scholarship/        — Critical scholarship & responses for each poet + scholarship.json index
├── writing/            — Publication pages for each poet's work + writing.json index
└── index.md            — Site homepage

Root:
├── package.json        — Dependencies & npm scripts
├── netlify.toml        — Netlify build & deployment config
├── copilot-instructions.md — This file
├── convert_captions.py — Caption conversion utility
├── convert-shortcodes.js — Shortcode transformation utility
└── style.css           — Global stylesheet
```

## Available Resources & Tools

### Local Development
- **Dev server:** `npm run dev` — Runs Eleventy in watch mode with live reload on `http://localhost:8080`
- **Build:** `npm run build` — Creates optimized production build in `_site/` (default 11ty output)
- **Clean rebuild:** Delete `_site/` folder and run `npm run build`

### Conversion & Utility Scripts
- **convert_captions.py** — Run: `python3 convert_captions.py` (use when updating caption formats)
- **convert-shortcodes.js** — Run: `node convert-shortcodes.js` (use when refactoring shortcode syntax)

### Testing & Validation
- Run `npm run build` — Validates build succeeds and all pages render
- Manual browser testing at `http://localhost:8080` during `npm run dev`
- Link validation: Test all internal and external links before submitting PRs

### Netlify & Deployment
- **Netlify build command:** `npm run build` (defined in `netlify.toml`)
- **Publish directory:** `_site/` (11ty default output)
- Preview deploys are generated for all PRs

## Coding & Content Guidelines

### Markdown & Frontmatter
- Use consistent YAML frontmatter keys across all content files (see `src/people/*.md` for examples)
- Required keys typically include: `title`, `layout`, `date`, `author` (where applicable)
- Keep frontmatter structured and valid YAML

### File Naming
- Poet pages: lowercase with hyphens (e.g., `louis-zukofsky.md`, `william-carlos-williams.md`)
- Section pages: lowercase with hyphens (e.g., `the-lives.md`, `the-scholarship.md`)
- JSON indexes: match collection name (e.g., `people.json`, `materials.json`)

### Data Consistency
- When adding a new poet or resource, create the content file AND update the corresponding JSON index
- Keep JSON structures consistent with existing entries
- Validate JSON syntax before committing

### Links & Navigation
- Use relative paths for internal links (e.g., `/people/louis-zukofsky/`)
- Ensure all links are tested before PR submission

### Accessibility & Media
- Include alt text for all images
- Provide descriptive captions for archival materials
- Ensure PDFs and media files are properly linked and tested

### Commits & PR Workflow
- Use atomic commits with clear, descriptive messages:
  - ✅ "Add poet: Lorine Niedecker with biography"
  - ✅ "Update materials: add Zukofsky archival items"
  - ✅ "Fix: correct typo in Oppen scholarship page"
  - ❌ "Various updates" or "Fixes"
- Always run `npm run build` locally and verify no errors before opening a PR
- Include testing notes in PR description if changes affect build or layout

## Safety / Workflow

- Do not push direct commits to `main`/`dev`; create a feature branch and open a PR for review.
- If a change affects the site build or Netlify config, include testing notes in the PR description and a short reproduction (commands run, observed errors).

## If You Need Help

Contact the repository owner for review and deployment details.

----
Generated for automated agents; keep this file up to date when workflows change.