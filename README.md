# ilboga · digital garden

My personal digital garden: a second brain that is also published. It collects what I build, the domains I keep studying, the tools I use and the notes I take along the way.

The structure borrows from two ideas by Tiago Forte, adapted rather than followed to the letter:

- **PARA** (Projects, Areas, Resources, Archive) gives the categories. Areas and resources are merged into *areas*, tools get their own type, and the archive is a state, not a place.
- **CODE** (Capture, Organize, Distill, Express) gives the life cycle of each note: it starts as a seed, gets linked to areas, projects and tools, is distilled into a one-line summary, and eventually feeds something written for others.

## Content model

Everything lives in [`content/`](content/), one Markdown file per entry.

| Type | What it is | Example |
|---|---|---|
| **Projects** | Work with a goal and an end | [Agentic CMS](content/projects/agentic-cms.md) |
| **Areas** | Domains I tend with no end date | [Generative patterns](content/areas/generative-patterns.md), [Server](content/areas/server.md) |
| **Tools** | What I build with; the body holds usage notes | [Astro](content/tools/astro.md), [Hermes Agent](content/tools/hermes-agent.md) |
| **Notes** | The atomic unit: a note, a link or an excerpt | [The agent interprets, the build validates](content/notes/the-agent-interprets-the-build-validates.md) |

A few rules hold the garden together:

- **Relations are written once**, on the more specific side. A project lists its areas and tools, a note lists what it is about. Every page in the other direction ("used in", "notes in this area") is computed at build time.
- **The archive is a view**: projects marked `done` or `dropped` move to `/archive`, but keep their URL.
- **Notes grow**: `stage` goes from `seed` to `budding` to `evergreen`. Titles are claims, so the title is already the point.
- **Content stays at method level.** The site is public, so it describes ideas, not installations: no client names, credentials, hosts or other operational details.

The schemas are strict. An unknown field or a link to an entry that doesn't exist fails the build with a readable message, so a broken garden never gets published.

## Adding content

Create a Markdown file in the right folder. The file name becomes the URL.

```md
---
title: Configuration lives in the image
kind: note                # note | link | excerpt
areas: [server]
projects: [agentic-cms]
tools: [docker, caddy]
stage: budding            # seed | budding | evergreen
summary: Redirects, headers and caching travel with the site.
---

The body, in Markdown.
```

The fields for every type are in [`src/content.config.ts`](src/content.config.ts).

## Development

Requires Node 22.12 or newer and pnpm.

| Command | Action |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm astro check` | Type-check and validate all content |
| `pnpm build` | Build the static site to `./dist/` |
| `pnpm preview` | Serve the build locally |

## Under the hood

- [Astro](https://astro.build) 7 with static output and content collections. The pages read content only through [`src/lib/garden.ts`](src/lib/garden.ts), which also computes the backlinks.
- Tailwind CSS 4. The look comes from my previous personal site: a warm off-white background, Helvetica for text, and the monospaced Avenue X for headings.
- The [about page](src/pages/about.astro) is that previous site, carried over as it was, pixelated portrait included.
