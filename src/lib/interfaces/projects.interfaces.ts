export interface GithubRepository {
	id?: number;
	name: string;
	description: string;
	/** Live/deployed URL, when the project has one. */
	url?: string;
	/** Repository URL, when the source is public. */
	githubUrl?: string;
}

/** Shape of the repositories returned by the GitHub REST API. */
export interface GithubApiRepository {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	fork: boolean;
	archived: boolean;
}

export interface ProjectLink {
	label: string;
	url: string;
}

export interface FeaturedProject {
	slug: string;
	title: string;
	/** Company or client the project was built for/with. */
	client?: string;
	role: string;
	/** One-liner shown on cards. */
	tagline: string;
	/** Long-form paragraphs for the detail page. */
	description: string[];
	stack: string[];
	links: ProjectLink[];
	image: string;
	imageAlt: string;
	tags: string[];
}
