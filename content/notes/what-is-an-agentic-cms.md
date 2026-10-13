---
title: What is an agentic CMS
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
stage: evergreen
summary: A site with no admin panel. The client asks in plain language, an agent edits files, the build publishes.
---

A traditional CMS gives the client a form for every kind of change. An agentic CMS replaces the forms with a conversation: the client says what they want, an agent translates it into changes to plain content files, and a static build turns those files into the site.

The repository has three layers, each with an owner:

- **Content**: Markdown and YAML files. The agent changes them.
- **Vocabulary**: a catalog of what each content file is for, its fields and its limits. Developers change it. See [The catalog is the content contract](/notes/the-catalog-is-the-content-contract).
- **Templates and pipeline**: the code that renders and ships the site. Developers change it.

The central rule is [the agent interprets, the build validates](/notes/the-agent-interprets-the-build-validates).
