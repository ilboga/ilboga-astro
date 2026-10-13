---
title: Generative patterns
description: Recurring shapes for systems where a model generates or changes something.
question: Where to draw the line between what the model decides and what code guarantees.
---

Language models are good at interpreting intent and bad at guaranteeing anything. The patterns I collect here are about splitting the work: the model handles ambiguity, deterministic code decides what is allowed and what is valid.

Most notes in this area come from putting an agent in front of people who are not developers, where a wrong guess has to be caught before anyone sees it.
