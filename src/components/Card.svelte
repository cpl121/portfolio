<script lang="ts">
	import type { GithubRepository } from '$lib';

	export let repo: GithubRepository;
</script>

<div class="card card-interactive p-4">
	<h3 class="font-title text-xl">
		{#if repo.url}
			<a
				href={repo.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-link transition-colors duration-200">{repo.name}</a
			>
		{:else}
			{repo.name}
		{/if}
		{#if repo.githubUrl}
			- <a
				href={repo.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-link transition-colors duration-200">View on Github</a
			>
		{/if}
	</h3>
	<br />
	<p>{repo.description}</p>
</div>
