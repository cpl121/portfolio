<script lang="ts">  
	import { modeStore } from '$lib';
  export let data: string
</script>
  
<span class={`mt-2 border-2 border-teal-400 font-home ${$modeStore === 'dark' ? 'bg-zinc-700' : 'bg-zinc-200' } rounded-2xl px-3 py-1 antialiased font-light`}>{data}</span>
