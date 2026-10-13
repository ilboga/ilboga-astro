---
title: Every agent action leaves a trace
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
stage: seed
summary: Every action records who asked for it, what changed and how it went.
---

Each tool call appends a line to a log: who asked, the input, the outcome, the resulting commit. Commits also carry a trailer naming who requested them. When something looks wrong, "who asked for this?" has an answer.
