---
title: Rules live in code, not in the prompt
kind: note
areas: [generative-patterns]
projects: [agentic-cms]
tools: [hermes-agent]
stage: budding
summary: The agent only gets domain tools, and the limits are written inside them. A prompt can be talked around, code can't.
---

On the client channel the agent has no shell, no file access and no git. It has a short list of tools such as "update a listing" or "publish", and each tool enforces its own limits: which folder it may write to, how many items, which fields.

The prompt sets tone and flow. It never carries a rule that matters.
