<script lang="ts">
	import { page } from '$app/stores';
	import { GITHUB_CPL121_URL, toggleMode, modeStore } from '$lib';
	import { github, twitter, instagram, linkedin, dark, light } from '$lib/images';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">My projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About me</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href={GITHUB_CPL121_URL} target="_blank" rel="noopener noreferrer">
			<img data-mode={$modeStore} src={github} alt="GitHub" />
		</a>
		<a href='https://twitter.com/CPL_Developer' target="_blank" rel="noopener noreferrer">
			<img data-mode={$modeStore} src={twitter} alt="Twitter" />
		</a>
		<a href='https://instagram.com/cesitarpl121' target="_blank" rel="noopener noreferrer">
			<img data-mode={$modeStore} src={instagram} alt="Instagram" />
		</a>
		<a href='https://linkedin.com/in/c%C3%A9sar-pe%C3%B3n-lamparero' target="_blank" rel="noopener noreferrer">
			<img data-mode={$modeStore} src={linkedin} alt="Linkedin" />
		</a>
		<button on:click={toggleMode}>
			{#if $modeStore === 'dark'}
				<img data-mode={$modeStore} src={dark} alt="Dark mode" />
			{:else if $modeStore === 'light'}
				<img data-mode={$modeStore} src={light} alt="Light mode" />
			{/if}
		</button>
	</div>
</header>

<style lang='scss'>
	header {
		@apply flex justify-around;
	}

	.corner {
		@apply flex flex-row items-center w-[15%];
	}

	.corner a, button {
		@apply flex items-center justify-center;
		@apply w-full h-full
	}

	.corner img {
		@apply w-8 h-8;
		@apply object-contain;
		@apply invert-50;
	}

	[data-mode='dark']:hover {
		@apply invert;
	}
	[data-mode='light']:hover {
		@apply invert-0;
	}

	nav {
		@apply flex justify-center;
	}

	ul {
		@apply relative h-12;
		@apply flex flex-row justify-center items-center;
		@apply list-none;
	}

	li {
		@apply relative h-full;
	}

	li[aria-current='page']::before {
		@apply absolute top-0 w-0 h-0;

		--size: 6px;
		content: '';
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #2dd4bf;
	}

	li[aria-current='page'] {
		@apply border-b-2 border-teal-400;
	}

	nav a {
		@apply flex items-center h-full px-2;
		@apply font-bold text-xs uppercase ;
		@apply tracking-widest no-underline;
	}
</style>
