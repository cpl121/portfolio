<script lang="ts">
	import { COLLABORATIONS_PROJECTS, FEATURED_PROJECTS, GITHUB_CPL121_URL } from '$lib';
	import { Card, FeaturedCard, Seo } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;

	let showRepositories = false;
</script>

<Seo
	title="Projects — cpl121"
	description="Featured work and open-source projects by César Peón (cpl121): VR worlds, interactive 3D experiences, OTT streaming platforms and AI products."
/>

<div class="flex flex-col space-y-4">
	<h1 class="text-5xl underline">Projects</h1>

	<h2 class="text-2xl font-bold py-4">Featured</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each FEATURED_PROJECTS as project (project.slug)}
			<FeaturedCard {project} showBadge={false} />
		{/each}
	</div>

	<h2 class="text-2xl font-bold py-4">My contributions</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each COLLABORATIONS_PROJECTS as repo (repo.name)}
			<Card {repo} />
		{/each}
	</div>

	<h2 class="text-2xl font-bold py-4">Open-source projects</h2>
	{#if data.repositories.length > 0}
		<div>
			<button
				type="button"
				class="repo-toggle"
				on:click={() => (showRepositories = !showRepositories)}
				aria-expanded={showRepositories}
			>
				{showRepositories
					? 'Hide repositories'
					: `Show ${data.repositories.length} repositories from GitHub`}
				<svg
					aria-hidden="true"
					class:open={showRepositories}
					class="chevron"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="24"
					height="24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" /></svg
				>
			</button>
		</div>
		{#if showRepositories}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each data.repositories as repo (repo.id)}
					<Card {repo} />
				{/each}
			</div>
		{/if}
	{:else}
		<p>
			Could not load the repositories from GitHub right now — you can browse them directly on
			<a
				href={GITHUB_CPL121_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-link transition-colors duration-200">GitHub</a
			>.
		</p>
	{/if}
</div>

<style>
	.repo-toggle {
		@apply inline-flex items-center gap-2 rounded-lg border-2 border-accent px-4 py-2 font-bold;
		@apply transition-colors duration-200;
	}

	.repo-toggle:hover {
		@apply bg-accent/20;
	}

	.chevron {
		@apply transition-transform duration-200;
	}

	.open {
		@apply rotate-180;
	}
</style>
