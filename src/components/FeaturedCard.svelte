<script lang="ts">
	import type { FeaturedProject } from '$lib';
	import { Pill } from '$components';

	export let project: FeaturedProject;
	/** Hide the badge when the card already sits inside a "Featured" section. */
	export let showBadge = true;
</script>

<a
	href={`/projects/${project.slug}/`}
	class="card card-interactive group flex flex-col overflow-hidden no-underline"
>
	<div class="relative aspect-video overflow-hidden">
		<img
			src={project.image}
			alt={project.imageAlt}
			loading="lazy"
			class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
		/>
		{#if showBadge}
			<span
				class="absolute top-2 right-2 rounded-full bg-accent-strong text-zinc-50 text-xs font-bold px-3 py-1"
				>★ Featured</span
			>
		{/if}
	</div>
	<div class="flex flex-col space-y-2 p-4 flex-1">
		<h3 class="text-xl font-title">{project.title}</h3>
		<p class="text-sm opacity-70">
			{project.client ? `${project.client} · ` : ''}{project.role}
		</p>
		<p class="flex-1">{project.tagline}</p>
		<ul class="flex flex-wrap gap-2 list-none">
			{#each project.stack.slice(0, 4) as tech (tech)}
				<li><Pill label={tech} size="sm" /></li>
			{/each}
		</ul>
	</div>
</a>
