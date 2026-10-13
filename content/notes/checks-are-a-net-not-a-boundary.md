---
title: Checks are a net, not a boundary
kind: note
areas: [server]
projects: [agentic-cms]
tools: [github-actions]
stage: budding
summary: When the platform can't enforce permissions, checks in CI catch mistakes but guarantee nothing.
---

A CI check that fails when an agent commit touches files outside the content folder is useful: it catches mistakes. But if the branch can't be protected, whoever can push can push around it.

The real boundaries are the credentials the agent holds and the tools it can call. Each control deserves an honest name.
