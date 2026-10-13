---
title: The catalog is the content contract
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
tools: [zod]
stage: budding
summary: One file says, for each piece of content, what it is for, its fields and its limits. The agent reads it, and so do the validation schemas.
---

With a single source for the limits, the agent and the build can't disagree about what is allowed. Developers own the catalog and the agent cannot edit it: it is the vocabulary the agent works with, not part of the content.
