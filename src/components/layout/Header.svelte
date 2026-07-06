<script lang="ts">
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { NavbarIcon } from '$components';
	import { GITHUB_CPL121_URL, LINKEDIN_URL, TWITTER_URL, toggleMode, modeStore } from '$lib';
	import { Github, Twitter, Linkedin, Dark, Light } from '$lib/images';

	const ITEMS = [
		{ title: 'Home', url: '/' },
		{ title: 'Projects', url: '/projects/' },
		{ title: 'About me', url: '/about/' }
	];

	const SOCIAL_MEDIA = [
		{ title: 'GitHub', url: GITHUB_CPL121_URL, logo: Github },
		{ title: 'Twitter', url: TWITTER_URL, logo: Twitter },
		{ title: 'Linkedin', url: LINKEDIN_URL, logo: Linkedin }
	];

	let open = false;

	$: if (browser) document.body.classList.toggle('no-scroll', open);

	onDestroy(() => {
		if (browser) document.body.classList.remove('no-scroll');
	});

	function handleMenu() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) closeMenu();
	}
</script>

<svelte:window on:keydown={onKeydown} />

<header>
	<div class="md:hidden mx-4 mt-4 flex items-center justify-between">
		<a href="/" class="wordmark relative z-20" on:click={closeMenu}>cpl121</a>
		<NavbarIcon bind:open onClick={handleMenu} />
	</div>

	<div class="hidden md:flex items-center justify-between px-6">
		<a href="/" class="wordmark">cpl121</a>
		<nav aria-label="Main">
			<ul>
				{#each ITEMS as item (item.url)}
					<li aria-current={$page.url.pathname === item.url ? 'page' : undefined}>
						<a href={item.url}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="corner">
			{#each SOCIAL_MEDIA as media (media.url)}
				<a class="corner-links" href={media.url} target="_blank" rel="noopener noreferrer">
					<img class="social-icon" src={media.logo} alt={media.title} />
				</a>
			{/each}
			<button
				class="corner-links"
				on:click={toggleMode}
				aria-label={`Switch to ${$modeStore === 'dark' ? 'light' : 'dark'} mode`}
			>
				<img
					class="social-icon"
					src={$modeStore === 'dark' ? Dark : Light}
					alt=""
					aria-hidden="true"
				/>
			</button>
		</div>
	</div>

	{#if open}
		<div class="md:hidden w-screen h-screen absolute left-0 top-0 z-10">
			<div class="flex flex-col justify-start space-y-20 h-full pt-32 backdrop-blur-xl">
				<nav aria-label="Mobile" class="flex flex-col justify-start items-center space-y-4">
					{#each ITEMS as item (item.url)}
						<a
							href={item.url}
							class={`${
								$page.url.pathname === item.url ? 'border-b-2 border-teal-400' : ''
							} font-bold text-3xl no-underline`}
							aria-current={$page.url.pathname === item.url ? 'page' : undefined}
							on:click={closeMenu}>{item.title}</a
						>
					{/each}
				</nav>
				<div class="flex flex-col justify-start items-center space-y-4">
					{#each SOCIAL_MEDIA as media (media.url)}
						<a class="text-xl" href={media.url} target="_blank" rel="noopener noreferrer"
							>{media.title}</a
						>
					{/each}
				</div>
				<button on:click={toggleMode}>{$modeStore === 'dark' ? 'Light' : 'Dark'} Mode</button>
			</div>
		</div>
	{/if}
</header>

<style lang="scss">
	.wordmark {
		@apply font-home text-2xl no-underline;
		@apply transition-colors duration-200;
	}

	.wordmark:hover {
		@apply text-teal-400;
	}

	.corner {
		@apply flex flex-row items-center gap-1;
	}

	.corner-links {
		@apply flex items-center justify-center p-1;
	}

	.social-icon {
		@apply w-8 h-8 object-contain invert-50;
		@apply transition duration-200;
	}

	:global(html[data-mode='dark']) .social-icon:hover {
		@apply invert;
	}

	:global(html[data-mode='light']) .social-icon:hover {
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
		@apply relative h-full list-none;
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
		@apply font-bold text-xs uppercase;
		@apply tracking-widest no-underline;
		@apply transition-colors duration-200;
	}

	nav a:hover {
		@apply text-teal-400;
	}
</style>
