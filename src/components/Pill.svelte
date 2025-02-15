<script lang="ts">
	import { modeStore } from '$lib';
	export let data: string;
</script>

<span
	class={`mt-2 border-2 border-customTurquoise-300 ${
		$modeStore === 'dark' ? 'bg-zinc-700 font-light' : 'bg-zinc-300 font-black'
	} rounded-xl px-3 py-2 antialiased`}>{data}</span
>
