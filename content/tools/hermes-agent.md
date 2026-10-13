---
title: Hermes Agent
kind: agent
areas: [generative-patterns]
---

An open agent by Nous Research, with a gateway that connects it to chat channels.

## Usage notes

- Restrict toolsets per channel. On the client chat it gets only domain tools and a way to ask for clarification: no shell, no files, no git.
- The domain tools live in a plugin that wraps a separate command-line program, so the rules can be tested without the agent.
- A persona file sets the tone: direct answers, explanations for a non-technical reader.
- Memory is small by design. Keep only the flow, the rules and the current state of the site.
