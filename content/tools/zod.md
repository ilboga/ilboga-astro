---
title: Zod
kind: library
url: https://zod.dev
areas: [generative-patterns]
---

## Usage notes

- Strict objects: an unknown field is an error, not something silently dropped. Typos in field names surface immediately.
- Error messages are written for the person who asked for the change, in their language, because the agent relays them as they are.
- Limits (lengths, counts) are read from a shared catalog instead of being hard-coded in the schema.
