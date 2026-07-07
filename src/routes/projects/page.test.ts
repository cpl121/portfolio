import { describe, expect, it, vi } from 'vitest';
import type { GithubRepository } from '$lib/interfaces';
import { load } from './+page';

const repo = (overrides: Record<string, unknown> = {}) => ({
	id: 1,
	name: 'portfolio',
	description: 'desc',
	html_url: 'https://github.com/cpl121/portfolio',
	homepage: 'https://cpl121.eth.limo',
	fork: false,
	archived: false,
	...overrides
});

const okResponse = (body: unknown) => ({ ok: true, json: async () => body });

const call = (fetchMock: unknown) =>
	load({ fetch: fetchMock } as never) as Promise<{ repositories: GithubRepository[] }>;

describe('projects/+page.ts load', () => {
	it('maps repos and filters out forks and archived', async () => {
		const fetchMock = vi
			.fn()
			.mockResolvedValue(
				okResponse([repo(), repo({ id: 2, fork: true }), repo({ id: 3, archived: true })])
			);

		const { repositories } = await call(fetchMock);

		expect(repositories).toEqual([
			{
				id: 1,
				name: 'portfolio',
				githubUrl: 'https://github.com/cpl121/portfolio',
				description: 'desc',
				url: 'https://cpl121.eth.limo'
			}
		]);
		expect(fetchMock).toHaveBeenCalledWith(
			expect.stringContaining('api.github.com/users/cpl121/repos')
		);
	});

	it('normalizes null description and homepage', async () => {
		const fetchMock = vi
			.fn()
			.mockResolvedValue(okResponse([repo({ description: null, homepage: null })]));

		const { repositories } = await call(fetchMock);

		expect(repositories[0].description).toBe('');
		expect(repositories[0].url).toBeUndefined();
	});

	it('falls back on non-ok response (403 rate limit)', async () => {
		const fetchMock = vi.fn().mockResolvedValue({ ok: false, status: 403, json: async () => ({}) });

		await expect(call(fetchMock)).resolves.toEqual({ repositories: [] });
	});

	it('falls back when the body is not an array (GitHub error object)', async () => {
		const fetchMock = vi.fn().mockResolvedValue(okResponse({ message: 'API rate limit exceeded' }));

		await expect(call(fetchMock)).resolves.toEqual({ repositories: [] });
	});

	it('falls back on network error', async () => {
		const fetchMock = vi.fn().mockRejectedValue(new TypeError('fetch failed'));

		await expect(call(fetchMock)).resolves.toEqual({ repositories: [] });
	});
});
