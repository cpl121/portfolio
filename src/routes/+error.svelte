<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — cpl121</title>
</svelte:head>

<section class="flex flex-col items-center space-y-6 mt-20">
	<h1 class="text-7xl">{$page.status}</h1>
	<p class="text-2xl">{$page.error?.message ?? 'Something went wrong'}</p>
	<a href="/" class="font-bold text-xl text-link transition-colors duration-200">← Back home</a>
</section>
