<script lang="ts">
	export let open = false;

	// eslint-disable-next-line
	export let onClick = (): void => {};
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
	class="text-grey-200 hover:text-grey-500 mr-4 transition-transform duration-300 ease-in-out focus:outline-none z-20 mt-4"
	class:open
	on:click={onClick}
	on:keydown={onClick}
>
	<svg width="34" height="24">
		<line
			class="top stroke-current stroke-2 transition-transform duration-300 ease-in-out"
			x1="0"
			y1="2"
			x2="34"
			y2="2"
		/>
		<line
			class="middle stroke-current stroke-2 transition-transform duration-300 ease-in-out"
			x1="12"
			y1="12"
			x2="30"
			y2="12"
		/>
		<line
			class="bottom stroke-current stroke-2 transition-transform duration-300 ease-in-out opacity-0"
			x1="0"
			y1="22"
			x2="34"
			y2="22"
		/>
	</svg>
</button>

<style>
	.open {
		@apply scale-75;
	}
	.open .top {
		@apply translate-x-1.5;
		@apply translate-y-0;
		@apply rotate-45;
	}
	.open .middle {
		@apply opacity-0;
	}
	.open .bottom {
		@apply -translate-x-3;
		@apply translate-y-2;
		@apply -rotate-45;
		@apply opacity-100;
	}
</style>
