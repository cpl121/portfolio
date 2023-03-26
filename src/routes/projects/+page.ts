import { GITHUB_REPOSITORIES_CPL121_URL, type GithubRepository } from '$lib';

export async function load() {
	GITHUB_REPOSITORIES_CPL121_URL;
	const response = await fetch(GITHUB_REPOSITORIES_CPL121_URL);
	const data = await response.json();

	const projects: GithubRepository[] = data.map((project: GithubRepository) => {
		return {
			id: project.id,
			name: project.name,
			githubUrl: project.html_url,
			description: project.description,
			url: project.homepage ?? ''
		};
	});
	return { projects };
}
