<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Pill } from '$components';
	import { modeStore } from '$lib';

	export let title: string;
	export let company: string;
	export let dates: string;
	export let summary: string;
	export let technologies: string[];
	let isOpen = false;

	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div class="card">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="title" on:click={toggleOpen} on:keypress={toggleOpen}>
		<div class="flex flex-col px-4 py-2">
			<h1 class="font-bold text-customTurquoise-400">{title}</h1>
			<span class="font-semibold">{company}</span>
			<span class={`text-xs ${$modeStore === 'dark' ? 'text-gray-50 font-thin' : 'text-zinc-900 font-semibold'} pt-2`}>{dates}</span>
		</div>
		<svg
			class:open={isOpen}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width="16"
			height="16"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" /></svg
		>
	</div>
	{#if isOpen}
		<div class="px-8 py-4" transition:fly={{ y: -20, duration: 400 }}>
			<span class="text-xl">
				{@html summary}
			</span>
			<div class="flex flex-wrap gap-2 mt-4">
				{#each technologies as technology}
					<Pill data={technology} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.title {
		@apply flex items-center justify-between cursor-pointer p-2 flex-1;
	}

	.open {
		@apply rotate-180;
	}
</style>
