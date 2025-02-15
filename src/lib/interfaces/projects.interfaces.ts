export interface GithubRepository {
	id?: number;
	name: string;
	url: string;
	description: string;
	html_url?: string;
	githubUrl?: string;
	homepage?: string;
	technologies?: string[];
}
