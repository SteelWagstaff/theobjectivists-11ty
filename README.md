# The Objectivists 11ty Site

A static site migration of theobjectivists.org from WordPress to 11ty, deployed on Cloudflare.

## Project Structure

```
theobjectivists-11ty/
├── .eleventy.js              # 11ty configuration
├── netlify.toml              # Netlify deployment config
├── package.json              
├── src/                      # Source files
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk      # Base HTML template
│   │       ├── page.njk      # Standard page layout
│   │       ├── person.njk    # Poet biography layout
│   │       └── materials.njk # Materials/archives layout
│   ├── _data/                # Global data files
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css     # Main stylesheet
│   │   ├── images/
│   │   ├── pdfs/
│   │   ├── audio/
│   │   └── video/
│   ├── pages/                # Main site pages
│   ├── people/               # Poet biographies
│   ├── materials/            # Archival materials pages
│   ├── scholarship/          # Scholarship pages
│   ├── writing/              # Writing pages
│   └── index.md              # Homepage
├── output/                   # WordPress export (source)
│   └── pages/                # 37 markdown files to migrate
└── _site/                    # Generated site (gitignored)
```

## Commands

```bash
npm run dev    # Start development server with live reload
npm run build  # Build site to _site/ directory
```

## Next Steps: Final Polish

### Remaining Tasks

1. **Handle WordPress-specific content:**
   - [ ] Convert `[ref]...[/ref]` footnotes to proper HTML or use a plugin
   - [ ] Fix WordPress gallery shortcodes → HTML/Nunjucks
   - [ ] Update internal links to new URL structure (find/replace in bulk)
   - [ ] Handle Zotero citations if needed

2. **Test all pages:**
   - [ ] Check each page renders correctly at `http://localhost:8080`
   - [ ] Verify all internal links work
   - [ ] Check image paths in content
   - [ ] Test on mobile/responsive breakpoints

3. **Deploy to Netlify:**
   - [ ] Push to GitHub repository  
   - [ ] Connect to Netlify (build: `npm run build`, publish: `_site`)
   - [ ] Configure custom domain: theobjectivists.org
   - [ ] Test redirects from old WordPress URLs

4. **Optional enhancements:**
   - [ ] Add RSS feed for updates
   - [ ] Add search functionality (lunr.js or similar)
   - [ ] Add a sitemap.xml
   - [ ] Set up analytics if needed

## Front Matter Template

For **person** pages:
```yaml
---
layout: layouts/person.njk
title: "Poet Name"
tags: ["people"]
date: YYYY-MM-DD
birth_year: YYYY
death_year: YYYY
permalink: /people/slug/
materials_link: /materials/poet-materials/
scholarship_link: /scholarship/poet-scholarship/
writing_link: /writing/poets-writing/
---
```

For **materials** pages:
```yaml
---
layout: layouts/materials.njk
title: "Poet Materials"
tags: ["materials"]
date: YYYY-MM-DD
person_name: "Poet Name"
person_link: /people/poet-slug/
permalink: /materials/poet-materials/
---
```

For **standard pages**:
```yaml
---
layout: layouts/page.njk
title: "Page Title"
permalink: /pages/slug/
---
```

## Content Migration Workflow

1. **Copy file** from `output/pages/` to appropriate `src/` directory
2. **Update front matter** using templates above
3. **Fix internal links** to use new URL structure
4. **Handle WordPress shortcodes** (galleries, references, etc.)
5. **Test** with `npm run dev`
6. **Commit** changes to Git

## WordPress-Specific Issues to Address

- **Footnotes**: `[ref]...[/ref]` → Need conversion strategy
- **Galleries**: WordPress shortcodes → HTML/Markdown
- **Internal links**: Update to new URL structure
- **Zotero citations**: May need manual formatting

## Resources

- [11ty Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/)
- [Netlify Docs](https://docs.netlify.com/)
- Original WordPress export: `thequotobjectivistsquot.WordPress.2026-02-15.xml`

## Notes

- All media files already imported to `src/assets/` by file type
- Original WordPress export markdown preserved in `output/pages/`
- Built site generates correctly: 3 pages + 222 assets
- CSS provides clean, academic styling with responsive layout
