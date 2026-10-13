---
title: Configuration lives in the image
kind: note
areas: [server]
projects: [agentic-cms]
tools: [docker, caddy]
stage: budding
summary: Redirects, headers and caching travel with the site. The server knows nothing about the site.
---

The site image contains a small web server with its configuration: redirects, security headers, cache rules, localized 404 pages. The host only runs an edge proxy for TLS and routing.

A change to a redirect goes through the same review, build and rollback as any other change.
