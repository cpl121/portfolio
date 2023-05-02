<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { NavbarIcon } from '$components';
	import { GITHUB_CPL121_URL, toggleMode, modeStore } from '$lib';
	import { Github, Twitter, Instagram, Linkedin, Dark, Light } from '$lib/images';

	const ITEMS = [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Projects',
			url: '/projects'
		},
		{
			title: 'About me',
			url: '/about'
		}
	];

	const SOCIAL_MEDIA = [
		{
			title: 'GitHub',
			url: GITHUB_CPL121_URL,
			logo: Github
		},
		{
			title: 'Twitter',
			url: 'https://twitter.com/CPL121_',
			logo: Twitter
		},
		{
			title: 'Instagram',
			url: 'https://instagram.com/cesitarpl121',
			logo: Instagram
		},
		{
			title: 'Linkedin',
			url: 'https://linkedin.com/in/c%C3%A9sar-pe%C3%B3n-lamparero',
			logo: Linkedin
		}
	];

	let open = false;
	function handleMenu() {
		open = !open;
		if (open) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}

	function goToUrl(url: string) {
		open = false;
		document.body.classList.remove('no-scroll');
		goto(url);
	}
</script>

<header>
	<div class="md:hidden ml-4 mt-4 flex justify-center items-center">
		<NavbarIcon bind:open onClick={handleMenu} />
	</div>
	<div class="flex justify-around invisible md:visible">
		<nav hidden>
			<ul>
				{#each ITEMS as item}
					<li aria-current={$page.url.pathname === item.url ? 'page' : undefined}>
						<a href={item.url}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="corner">
			{#each SOCIAL_MEDIA as media}
				<a class="corner-links" href={media.url} target="_blank" rel="noopener noreferrer">
					<img data-mode={$modeStore} src={media.logo} alt={media.title} />
				</a>
			{/each}
			<button class="corner-links" on:click={toggleMode}>
				{#if $modeStore === 'dark'}
					<img data-mode={$modeStore} src={Dark} alt="Dark mode" />
				{:else if $modeStore === 'light'}
					<img data-mode={$modeStore} src={Light} alt="Light mode" />
				{/if}
			</button>
		</div>
	</div>
	{#if open}
		<div class="md:hidden w-screen h-screen absolute left-0 top-0 z-10">
			<div class="flex flex-col justify-start space-y-20 h-full pt-32 backdrop-blur-xl">
				<div class="flex flex-col justify-start items-center space-y-4">
					{#each ITEMS as { title, url }}
						{#if title && url}
							<button
								class={`${
									$page.url.pathname === url ? 'border-b-2 border-teal-400' : ''
								} font-bold text-3xl`}
								on:click={() => goToUrl(url)}>{title}</button
							>
						{/if}
					{/each}
				</div>
				<div class="flex flex-col justify-start items-center space-y-4">
					{#each SOCIAL_MEDIA as { title, url }}
						{#if title && url}
							<a class="text-xl" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
						{/if}
					{/each}
				</div>
				<button on:click={toggleMode}>{$modeStore === 'dark' ? 'Light' : 'Dark'} Mode</button>
			</div>
		</div>
	{/if}
</header>

<style lang="scss">
	.corner {
		@apply flex flex-row items-center w-[13%];
	}

	.corner-links {
		@apply flex items-center justify-center;
		@apply w-full h-full;
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
	}
</style>
