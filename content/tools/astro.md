---
title: Astro
kind: framework
url: https://astro.build
areas: [generative-patterns, server]
---

## Usage notes

- Content collections with a `glob` loader over a folder outside `src/`: content and code live apart, and it is obvious which folder an agent may touch.
- Strict schemas turn every content mistake into a build error, before anything is deployed.
- Static output only. Nothing runs at request time, so there is nothing to patch on the server.
- `astro check` runs before `astro build` in CI.
