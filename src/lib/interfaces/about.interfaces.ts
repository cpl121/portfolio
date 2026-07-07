/** A work-experience or education entry in the About timeline. */
export interface TimelineEntry {
	title: string;
	summary: string;
	technologies: string[];
}

/** A group of technologies shown in the About page, by discipline. */
export interface TechnologyGroup {
	category: string;
	items: string[];
}
