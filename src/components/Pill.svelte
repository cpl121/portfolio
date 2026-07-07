<script lang="ts">
	export let label: string;
	export let size: 'md' | 'sm' = 'md';
</script>

{#if size === 'sm'}
	<span class="border border-accent rounded-2xl px-2 py-0.5 text-sm">{label}</span>
{:else}
	<span
		class="mt-2 border-2 border-accent font-home bg-zinc-200 dark:bg-zinc-700 rounded-2xl px-3 py-1 antialiased font-light"
		>{label}</span
	>
{/if}
