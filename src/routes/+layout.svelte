<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$components';
</script>

<div class="app bg-slate-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
	<a href="#main-content" class="skip-link">Skip to content</a>
	<Header />
	<main id="main-content" tabindex="-1">
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	main {
		@apply flex flex-col p-4 w-full max-w-5xl;
		@apply box-border mx-auto flex-1;
		@apply font-main text-lg leading-7;
	}

	/* The skip-link target is a container, not a control — no outline needed on it. */
	main:focus {
		outline: none;
	}

	/* Theme colors live inline on the element: dark: variants inside scoped
	   @apply generate [data-mode] ancestor selectors that Svelte prunes. */
	.app {
		@apply flex flex-col min-h-screen;
	}
</style>
