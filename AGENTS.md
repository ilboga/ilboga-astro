# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ilboga's personal digital garden: a second brain that is also published, loosely inspired by Tiago Forte's PARA (categories) and CODE (Capture, Organize, Distill, Express). Everything — content, routes, field names — is in English. The visual style is ported from the previous personal site (`~/Web/ilboga-front`, Next.js), whose single page is now `/about`.

Astro 7, static output, strict TypeScript, Tailwind 4 via `@tailwindcss/vite`. No test runner, no linter.

## Commands

Package manager is **pnpm**; Node >= 22.12.0.

- `pnpm install` — install dependencies
- `pnpm astro check` — type-check and validate content (run before committing)
- `pnpm build` — production build to `./dist/`; also fails on any invalid content
- `pnpm preview` — serve the built site locally

When starting the dev server, use background mode (plain `pnpm dev` blocks):

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`. Dev server runs at `localhost:4321`. A dev server started before `content/` changed structurally (new folders) can serve stale 404s: restart it.

TypeScript is pinned to 6.x because `@astrojs/check` does not support 7 yet.

## Content model

Content lives in `content/` (outside `src/`), one Markdown file per entry, id = file name. Collections are defined in `src/content.config.ts` with strict schemas: an unknown field or a reference to a missing entry fails the build.

| Collection | What it is | Key fields |
|---|---|---|
| `projects` | Work with a goal and an end | `status` (active/paused/done/dropped), `goal`, `areas[]` (min 1), `tools[]` |
| `areas` | Domains tended with no end date | `description`, `question` |
| `tools` | What things are built with; body = usage notes | `kind`, `url?`, `areas[]` |
| `notes` | The atomic unit: notes, links, excerpts | `kind`, `source?`, `areas[]`, `projects[]`, `tools[]`, `stage` (seed/budding/evergreen), `summary?` |

- Relations are written **once**, on the more specific side (a project lists its areas and tools; a note lists what it is about). Reverse links are computed, never stored.
- The archive is not a folder: it is the view of projects with status `done` or `dropped`. Project URLs never change when archived.
- `stage` is both garden maturity and how far a note has been distilled. A note with no relations is an inbox item.
- Note titles are claims ("Configuration lives in the image"), so the title is already the summary.

**Content must stay at method level.** The site is public: no client names or domains, server users/permissions, ports, paths, bot handles, tokens or software versions. Describe the idea, not the installation.

## Code architecture

- `src/lib/garden.ts` is the single entry point pages use to read content: sorted getters, `isArchived`, backlink queries (`projectsInArea`, `notesAboutTool`, …), `resolve()` for stored references (throws a readable error on a missing one), and `hrefOf`/`metaOf` for links and list labels. Add new queries here rather than calling `getCollection` from pages.
- `src/components/Row.astro` is the list row from the old CV (title, dashed leader, muted meta); `EntryList.astro` renders any garden entries with it, `RefLinks.astro` renders a line of linked references.
- `src/pages/<collection>/[id].astro` are the detail pages; `src/pages/about.astro` reads `src/data/cv.ts`.
- `src/components/Pixelate.astro` is the about-page photo effect, plain `<script>` (no framework).
- Style tokens are in `src/styles/global.css` (`@theme`): `background`, `foreground`, `muted` (= Tailwind v3 gray-600, kept as hex), `font-sans` (Helvetica), `font-heading` (Avenue X, a local font loaded through Astro's fonts API in `astro.config.mjs`). Markdown bodies use `prose lg:prose-lg`, with the plugin's colors remapped to the tokens.

## Astro 7 API notes

`chub get astro/astro` documents Astro 6 and its collection example is outdated. In this project: `defineCollection`/`reference`/`render` from `astro:content`, `glob` from `astro/loaders`, `z` from `astro/zod` (Zod 4). Importing `z` from `astro:content` is deprecated.

## Git

- Identity for this repo is the personal GitHub account: `user.name ilboga`, `user.email michaelbogani@gmail.com` (set locally; the global config is the work account).
- Remote: `git@github-ilboga:ilboga/ilboga-astro.git`, using the `github-ilboga` host alias from `~/.ssh/config`. `gh` is logged into the work account, so don't use it for this repo.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Notes

- `CLAUDE.md` is a symlink to `AGENTS.md`; edit `AGENTS.md` (writing through the symlink is refused).
