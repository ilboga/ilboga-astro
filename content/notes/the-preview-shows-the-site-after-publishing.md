---
title: The preview shows the site after publishing
kind: note
areas: [generative-patterns, server]
projects: [agentic-cms]
tools: [github-actions]
stage: budding
summary: The preview doesn't show the content branch alone, but the production code plus the proposed changes.
---

The content branch can lag behind the code. Building it on its own would show a site that will never exist. Merging the production branch into the content checkout before building makes the preview match what publishing will produce.

With a single preview slot shared by several branches, the last deploy wins, so who currently holds the slot has to be visible.
