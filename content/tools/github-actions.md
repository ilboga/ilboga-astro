---
title: GitHub Actions
kind: service
url: https://github.com/features/actions
areas: [server]
---

## Usage notes

- One reusable workflow (verify, build the image, deploy) called by thin workflows, one per trigger.
- Separate environments for preview and production, each with its own secrets. The preview credentials cannot reach production.
- Third-party actions pinned by commit SHA, with Dependabot proposing the updates.
- A shared concurrency group when several branches compete for a single preview: the last deploy wins, and the deployment history says who holds it.
