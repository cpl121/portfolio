<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$components';
	import { modeStore } from '$lib';
</script>

<div class="app" data-mode={$modeStore}>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	main {
		@apply flex flex-col p-4 w-full max-w-5xl;
		@apply box-border mx-auto flex-1;
		@apply font-main text-lg leading-6;
	}

	.app {
		@apply flex flex-col min-h-screen;
	}

	[data-mode='dark'] {
		@apply bg-zinc-800  text-zinc-100;
	}
	[data-mode='light'] {
		@apply bg-slate-200  text-zinc-800;
	}
</style>
