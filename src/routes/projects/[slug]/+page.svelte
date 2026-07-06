<script lang="ts">
	import { LinkButton, Pill, Seo } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ project, previous, next } = data);
</script>

<Seo
	title={`${project.title} — cpl121`}
	description={project.tagline}
	image={project.image}
	type="article"
/>

<article class="flex flex-col space-y-8">
	<nav aria-label="Breadcrumb">
		<a href="/projects/" class="font-bold text-link transition-colors duration-200"
			>← All projects</a
		>
	</nav>

	<header class="flex flex-col space-y-3">
		<div class="flex items-center gap-4 flex-wrap">
			<h1 class="text-5xl underline">{project.title}</h1>
			<span class="rounded-full bg-accent-strong text-zinc-50 text-xs font-bold px-3 py-1"
				>★ Featured</span
			>
		</div>
		<p class="opacity-70">
			{project.client ? `${project.client} · ` : ''}{project.role}
		</p>
	</header>

	<div class="card aspect-video w-full overflow-hidden">
		<img
			class="h-full w-full object-cover object-top"
			src={project.image}
			alt={project.imageAlt}
			width="1280"
			height="720"
		/>
	</div>

	<div class="flex flex-col space-y-4">
		{#each project.description as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>

	<section class="flex flex-col space-y-2">
		<h2 class="text-2xl">Stack</h2>
		<div class="flex flex-wrap space-x-2 items-center">
			{#each project.stack as technology (technology)}
				<Pill label={technology} />
			{/each}
		</div>
	</section>

	{#if project.links.length > 0}
		<section class="flex flex-col space-y-2">
			<h2 class="text-2xl">Links</h2>
			<ul class="flex flex-wrap gap-3 list-none">
				{#each project.links as link (link.url)}
					<li>
						<LinkButton href={link.url} external>{link.label}</LinkButton>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<nav class="pager" aria-label="More projects">
		{#if previous}
			<a href={`/projects/${previous.slug}/`} class="pager-link">
				<span class="pager-label">← Previous</span>
				<span class="font-title">{previous.title}</span>
			</a>
		{:else}
			<span></span>
		{/if}
		{#if next}
			<a href={`/projects/${next.slug}/`} class="pager-link text-right">
				<span class="pager-label">Next →</span>
				<span class="font-title">{next.title}</span>
			</a>
		{/if}
	</nav>
</article>

<style>
	.pager {
		@apply flex justify-between gap-4 border-t border-accent/40 pt-6 mt-4;
	}

	.pager-link {
		@apply flex flex-col gap-1 no-underline max-w-[45%];
		@apply transition-colors duration-200;
	}

	.pager-link:hover {
		@apply text-teal-400;
	}

	.pager-label {
		@apply text-sm font-bold text-link;
	}
</style>
