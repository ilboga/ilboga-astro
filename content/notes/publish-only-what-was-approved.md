---
title: Publish only what was approved
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
tools: [github-actions]
stage: budding
summary: Publishing is tied to the exact version the client saw. If anything changed in between, it doesn't go out.
---

An approval refers to a precise version, not to "whatever is in the preview now". Before publishing, three things must hold:

1. the version is the one the client approved;
2. the pipeline for that version is green;
3. the preview still shows that version.

If any of them fails, the agent stops and asks again.
