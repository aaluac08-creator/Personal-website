# Portfolio Website

An Astro-powered personal site for Alua. All copy lives in MDX files with frontmatter so updates can be made without touching component code.

## Tech Stack
- Astro 4 with the MDX integration
- Static content collections in `src/content`
- Lightweight Astro components for section layouts

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:4321 to view the site. Changes to MDX or Astro files refresh automatically.

## Project Structure
- `astro.config.mjs` – Astro configuration and MDX integration
- `public/images/` – static assets referenced by MDX frontmatter
- `src/content/hero|about|projects|contact|blog` – editable MDX documents with metadata
- `src/layouts/` – shared page chrome
- `src/components/` – presentational sections that consume MDX data
- `src/pages/` – page routes (`/`, `/blog`, and dynamic blog entries)

## Editing Content
- Hero text: `src/content/hero/main.mdx`
- About section body and highlights: `src/content/about/about.mdx`
- Projects carousel cards: `src/content/projects/*.mdx`
- Contact details and socials: `src/content/contact/main.mdx`
- Blog posts: `src/content/blog/*.mdx`
- Blog page intro: `src/content/pages/blog-page.mdx`

Update the frontmatter values (title, summary, dates, images, etc.) or the MDX body to change what appears on the site.

## Adding a Blog Post
1. Copy an existing file in `src/content/blog/` and rename it using a slug (`my-new-story.mdx`).
2. Fill out the frontmatter fields (`title`, `excerpt`, `author`, `date`, `readTime`, `image`).
3. Write the article in Markdown/MDX under the frontmatter block.
4. Run `npm run build` to verify formatting and ensure the slug generates a page.

## Build and Deploy
Create a production build with:
```bash
npm run build
```
The generated static site is output to the `dist/` directory and can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).
