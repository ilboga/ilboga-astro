---
title: Caddy
kind: service
url: https://caddyserver.com
areas: [server]
---

## Usage notes

Caddy has two roles, kept separate:

- **At the edge**, on the host: TLS, compression and routing to the right container. Nothing site-specific.
- **Inside the site image**: redirects, cache rules, security headers and localized 404 pages. They ship and roll back with the site.
