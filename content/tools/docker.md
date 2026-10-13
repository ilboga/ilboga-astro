---
title: Docker
kind: service
url: https://www.docker.com
areas: [server]
---

## Usage notes

- The image is the unit of deploy: built once, smoke-tested with production restrictions, then promoted by digest.
- The site container runs as a non-root user, on a read-only filesystem, with no extra capabilities.
- Activation waits for the health check, so a broken image never replaces a working one.
