---
title: Agentic CMS
status: active
goal: A client edits their own site by writing in plain language, with no admin panel.
areas: [generative-patterns, server]
tools: [astro, zod, github-actions, docker, caddy, hermes-agent, gemini, telegram]
---

## Problem

A small business needs to change a few things on its site now and then: a listing, a phone number, a tax ID. An admin panel is too much to learn for something done twice a month, and emailing a developer is too slow.

## Idea

Drop the panel. The client writes the change in a chat, in their own words. An agent turns the request into edits to Markdown and YAML files, and a static build turns the files into HTML. The agent interprets, the build doesn't interpret anything. More in [What is an agentic CMS](/notes/what-is-an-agentic-cms).

## How a change flows

1. The client asks for a change in the chat.
2. The agent calls a narrow tool that edits content files only, and commits them to a dedicated content branch.
3. The pipeline builds the production code plus the proposed content, and deploys it to a preview.
4. The client looks at the preview and says yes.
5. The agent publishes exactly the version that was approved. A couple of minutes later it is live.

## What I learned

- Validation is the boundary: every content mistake fails the build, with a message a non-developer can read.
- Rules belong in the tools the agent can call, not in its prompt.
- Approval is about a precise version, not about "whatever is in the preview now".
- The server should know as little as possible about the site.

The notes below go into each of these.

## Status

Running in production for a first client.
