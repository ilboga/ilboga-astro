---
title: The deploy key can do one thing
kind: note
areas: [server]
projects: [agentic-cms]
tools: [github-actions, docker]
stage: budding
summary: The deploy key can do one thing only, activate an image that has already been built.
---

The pipeline builds and tests the image and pushes it to a registry. Then it connects to the server with a key restricted to a single command, and passes only the image digest.

Preview and production use different keys, so the preview key cannot publish to production.
