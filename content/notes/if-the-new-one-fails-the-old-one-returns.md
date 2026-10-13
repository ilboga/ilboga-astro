---
title: If the new one fails, the old one returns
kind: note
areas: [server]
projects: [agentic-cms]
tools: [docker]
stage: seed
summary: If the health check fails, the previous version comes back on its own.
---

Activation waits for the container health check. On failure the deploy script restores the previous image. And if any earlier step fails, nothing is published at all.
