<script lang="ts">
	export let href: string;
	/** External links open in a new tab with rel protection. */
	export let external = false;
</script>

<a
	{href}
	class="inline-block border-2 border-accent rounded-lg px-4 py-2 font-bold no-underline transition-colors duration-200 hover:bg-accent/20"
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	<slot />
</a>
