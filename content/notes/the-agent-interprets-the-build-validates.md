---
title: The agent interprets, the build validates
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
tools: [astro, zod]
stage: evergreen
summary: All the ambiguity lives in the agent. The build is deterministic, and wrong content fails it with a readable message.
---

The agent's job is to understand "change the phone number on the contact page". The build's job is to refuse anything that doesn't fit, and to say why.

- Schemas are strict: an unknown field is an error, not something ignored.
- Error messages are written for the person who asked, because the agent passes them on.
- Checks that span several files, like a translation falling out of sync, live in one place.

Since the build never guesses, it is the one place where a guarantee can live.
