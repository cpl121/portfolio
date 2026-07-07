import { GITHUB_REPOSITORIES_CPL121_URL } from '$lib/constants';
import type { GithubApiRepository, GithubRepository } from '$lib/interfaces';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const fallback = { repositories: [] as GithubRepository[] };

	try {
		const response = await fetch(`${GITHUB_REPOSITORIES_CPL121_URL}?per_page=100&sort=pushed`);
		if (!response.ok) return fallback;

		const data: unknown = await response.json();
		if (!Array.isArray(data)) return fallback;

		const repositories: GithubRepository[] = (data as GithubApiRepository[])
			.filter((repo) => !repo.fork && !repo.archived)
			.map((repo) => ({
				id: repo.id,
				name: repo.name,
				githubUrl: repo.html_url,
				description: repo.description ?? '',
				url: repo.homepage ?? undefined
			}));

		return { repositories };
	} catch {
		return fallback;
	}
};
