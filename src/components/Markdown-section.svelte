<script lang="ts">
	import { Markdown } from '$components';
	export let title: string = undefined;
	export let markdown: string = undefined;
	export let id: string = undefined;
</script>

<div class="card overflow-x-hidden">
	<section {id} class="w-full flex flex-col items-center underline">
		{#if title}
			<h1 class="my-2">{title}</h1>
		{/if}
		{#if markdown}
			<div class="w-full p-4">
				<Markdown
					markdown={markdown.replace('<', '<p class="flex flex-row flex-wrap justify-center"')}
				/>
			</div>
		{/if}
	</section>
</div>
