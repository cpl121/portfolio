<script>
	import { GITHUB_CPL121_URL } from '$lib';
	import { modeStore } from '$lib';
</script>

<footer data-mode={$modeStore}>
	<span
		>Developed by <a class="link" href={GITHUB_CPL121_URL} target="_blank" rel="noopener noreferrer"
			>cpl121</a
		></span
	>
</footer>

<style lang="scss">
	footer {
		@apply flex flex-col justify-center items-center p-3 mt-8;
	}

	[data-mode='dark'] {
		@apply bg-zinc-700;
	}
	[data-mode='light'] {
		@apply bg-zinc-300;
	}

	.link {
		@apply font-bold;
	}

	.link:hover {
		@apply text-teal-400 underline;
	}
</style>
