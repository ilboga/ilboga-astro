import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Content lives in content/ (outside src/). One Markdown file per entry, id = file name.
// Relations are written once, on the more specific side (a project lists its areas and
// tools, a note lists what it is about); src/lib/garden.ts computes the backlinks.
// Schemas are strict: an unknown field or a missing reference fails the build.
const markdown = (folder: string) => glob({ base: `./content/${folder}`, pattern: '*.md' });

const areas = defineCollection({
	loader: markdown('areas'),
	schema: z.strictObject({
		title: z.string(),
		description: z.string(),
		// What I want to understand in this area.
		question: z.string(),
	}),
});

const tools = defineCollection({
	loader: markdown('tools'),
	schema: z.strictObject({
		title: z.string(),
		kind: z.enum(['framework', 'library', 'agent', 'service', 'model', 'skill']),
		url: z.url().optional(),
		areas: z.array(reference('areas')).default([]),
	}),
});

const projects = defineCollection({
	loader: markdown('projects'),
	schema: z.strictObject({
		title: z.string(),
		// done and dropped projects are the archive.
		status: z.enum(['active', 'paused', 'done', 'dropped']),
		goal: z.string(),
		areas: z.array(reference('areas')).min(1),
		tools: z.array(reference('tools')).default([]),
		started: z.coerce.date().optional(),
		ended: z.coerce.date().optional(),
	}),
});

const notes = defineCollection({
	loader: markdown('notes'),
	schema: z.strictObject({
		title: z.string(),
		kind: z.enum(['note', 'link', 'excerpt']),
		source: z.url().optional(),
		areas: z.array(reference('areas')).default([]),
		projects: z.array(reference('projects')).default([]),
		tools: z.array(reference('tools')).default([]),
		// Garden maturity, and how far the note has been distilled.
		stage: z.enum(['seed', 'budding', 'evergreen']),
		summary: z.string().optional(),
	}),
});

export const collections = { areas, tools, projects, notes };
