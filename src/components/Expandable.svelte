<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Pill } from '$components';

	export let title: string;
	export let summary: string;
	export let technologies: string[];
	/** Initial state only — the component owns its open state after mount. */
	export let initialOpen = false;

	let isOpen = initialOpen;

	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div class="card mb-2">
	<button type="button" class="title" on:click={toggleOpen} aria-expanded={isOpen}>
		<h3 class="p-2 text-left text-xl font-title">{title}</h3>
		<svg
			aria-hidden="true"
			class="chevron"
			class:open={isOpen}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width="28"
			height="28"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" /></svg
		>
	</button>
	{#if isOpen}
		<div class="summary p-8" transition:fly={{ y: -20, duration: 400 }}>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- static author-controlled HTML -->
			{@html summary}
			<div class="flex flex-wrap space-x-2 mt-4 items-center">
				{#each technologies as technology (technology)}
					<Pill label={technology} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.title {
		@apply flex items-center justify-between cursor-pointer p-2 w-full text-left gap-2;
	}

	.chevron {
		@apply shrink-0 transition-transform duration-200;
	}

	.open {
		@apply rotate-180;
	}

	/* Styling for the raw HTML lists coming from the summary data. */
	.summary :global(ul) {
		margin: 10px 0 10px 20px;
		list-style-type: disc;
	}

	.summary :global(p + p) {
		margin-top: 10px;
	}
</style>
