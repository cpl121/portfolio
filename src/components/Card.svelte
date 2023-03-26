<script lang="ts">
	export let name: string;
	export let url = '';
	export let githubUrl = '';
	export let description: string;
</script>

<div class="card p-4">
	<h2>
		{#if url !== ''}
			<a href={url} target="_blank" rel="noopener noreferrer" class="text-teal-500">{name}</a>
		{:else}
			{name}
		{/if}
		{#if githubUrl !== ''}
			- <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="text-teal-500"
				>View on Github</a
			>
		{/if}
	</h2>
	<br />
	<p>{description}</p>
</div>
