<script lang="ts">
	import { Link, Github } from '$lib/images';
	import { modeStore } from '$lib';
	import { Pill } from '$components';

	export let name: string;
	export let url = '';
	export let githubUrl = '';
	export let description: string;
	export let technologies: string[] = [];

	// alinear url icono
/// hacerlo mas grueso
</script>

<div class="card p-4 flex flex-col justify-between">
	<div class="flex flex-col space-y-2 justify-center">
		<div class="flex flex-row justify-between">
			<h1 class="text-customTurquoise-400 font-bold">{name}</h1>
			<div class="flex flex-row space-x-2 justify-center h-full">
				{#if url !== ''}
					<a href={url} target="_blank" rel="noopener noreferrer"><img data-mode={$modeStore} src={Link} alt='Link' class="h-8 w-auto invert-50 hover:invert-0" /></a>
				{/if}
				{#if githubUrl !== ''}
					<a href={githubUrl} target="_blank" rel="noopener noreferrer"
						><img data-mode={$modeStore} src={Github} alt='Github' class="h-8 w-auto invert-50 hover:invert-0" /></a
					>
				{/if}
			</div>
		</div>
		<span class={`${$modeStore === 'dark' ? 'text-gray-50 font-thin' : 'text-zinc-900 font-semibold'}`}>{description}</span>
	</div>
	<div class="flex flex-wrap space-x-2 mt-4 items-center justify-end">
		{#each technologies as technology}
			<Pill data={technology} />
		{/each}
	</div>
</div>
