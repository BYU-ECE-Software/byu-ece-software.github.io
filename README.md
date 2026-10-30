# BYU ECE Software website

A public home for the people, projects, and ideas behind BYU ECE Software. Built with Next.js and exported as a static site for GitHub Pages.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Before publishing, run:

```bash
npm run lint
npm run build
```

The production site is generated in `out/`.

## Update the site

- **Team:** Edit `data/team.ts`. Replace the `First Last` sample with real members and remove its `isPlaceholder` flag. Each member needs a unique lowercase, hyphenated `slug`, a name, role, bio, and initials. Optional `image` paths should point to files in `public/`, and optional links appear on the profile page. The team directory and profile pages are generated from this list.
- **Projects:** Add selected public projects to `data/projects.ts`. Each entry needs a unique `slug`, title, short summary, and public URL; `category` is optional. The Projects page shows a coming-soon state while the list is empty.
- **About:** Edit the biography in `app/about/page.tsx` when the team has approved its final wording.
- **Blog:** Copy `content/posts/_template.md` to a new lowercase, hyphenated filename such as `my-first-article.md`. Fill in `title`, `date` (`YYYY-MM-DD`), `author`, and `summary`, then write the article using Markdown below the frontmatter. Files beginning with `_` are templates and are not published. The blog listing sorts posts by date, newest first; individual article pages are generated during the build. The Blog page shows a coming-soon state while no posts are published.

Commit and push edits to `main` to publish them once GitHub Pages is configured.

## GitHub Pages

The `Deploy site to GitHub Pages` workflow installs dependencies, runs lint, builds the static export, and uploads `out/` to GitHub Pages. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. This repository is the organization's root Pages repository, so it uses `/` rather than a project base path.
