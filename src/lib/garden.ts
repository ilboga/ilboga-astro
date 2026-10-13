// Single entry point for the pages: sorted getters, backlinks and links.
// Relations are stored on one side only (see src/content.config.ts); everything
// in the other direction is computed here at build time.
import { getCollection, getEntries, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Area = CollectionEntry<'areas'>;
export type Tool = CollectionEntry<'tools'>;
export type Note = CollectionEntry<'notes'>;
export type GardenEntry = Project | Area | Tool | Note;

type Ref = { id: string };

const STATUS_ORDER: Record<Project['data']['status'], number> = { active: 0, paused: 1, done: 2, dropped: 3 };
const STAGE_ORDER: Record<Note['data']['stage'], number> = { evergreen: 0, budding: 1, seed: 2 };

const byTitle = (a: GardenEntry, b: GardenEntry) => a.data.title.localeCompare(b.data.title);
const refersTo = (refs: Ref[], id: string) => refs.some((ref) => ref.id === id);

export const isArchived = (project: Project) => project.data.status === 'done' || project.data.status === 'dropped';

export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => STATUS_ORDER[a.data.status] - STATUS_ORDER[b.data.status] || byTitle(a, b));
}

export async function getAreas() {
	return (await getCollection('areas')).sort(byTitle);
}

export async function getTools() {
	return (await getCollection('tools')).sort(byTitle);
}

export async function getNotes() {
	const notes = await getCollection('notes');
	return notes.sort((a, b) => STAGE_ORDER[a.data.stage] - STAGE_ORDER[b.data.stage] || byTitle(a, b));
}

export async function projectsInArea(areaId: string) {
	return (await getProjects()).filter((project) => refersTo(project.data.areas, areaId));
}

export async function notesInArea(areaId: string) {
	return (await getNotes()).filter((note) => refersTo(note.data.areas, areaId));
}

export async function projectsUsingTool(toolId: string) {
	return (await getProjects()).filter((project) => refersTo(project.data.tools, toolId));
}

export async function notesAboutTool(toolId: string) {
	return (await getNotes()).filter((note) => refersTo(note.data.tools, toolId));
}

export async function notesForProject(projectId: string) {
	return (await getNotes()).filter((note) => refersTo(note.data.projects, projectId));
}

/** Resolves stored references to entries, sorted by title. A missing entry fails the build. */
export async function resolve<C extends 'areas' | 'tools' | 'projects'>(refs: { collection: C; id: string }[]) {
	const entries = (await getEntries(refs)) as (CollectionEntry<C> | undefined)[];
	const missing = refs.filter((_, i) => !entries[i]);
	if (missing.length > 0) {
		throw new Error(`Missing reference: ${missing.map((ref) => `${ref.collection}/${ref.id}`).join(', ')}`);
	}
	return (entries as CollectionEntry<C>[]).sort(byTitle);
}

export const hrefOf = (entry: GardenEntry) => `/${entry.collection}/${entry.id}`;

/** The short muted label shown on the right of a list row. */
export function metaOf(entry: GardenEntry) {
	switch (entry.collection) {
		case 'projects':
			return entry.data.status;
		case 'tools':
			return entry.data.kind;
		case 'notes':
			return entry.data.kind === 'note' ? entry.data.stage : `${entry.data.kind} · ${entry.data.stage}`;
		case 'areas':
			return undefined;
	}
}
