<script lang="ts">
	import {
		CONTACT_EMAIL,
		GITHUB_CPL121_URL,
		HOME_FEATURED_PROJECTS,
		LINKEDIN_URL,
		printLogs
	} from '$lib';
	import { FeaturedCard, LinkButton, Scene3d, Seo } from '$components';
	import { onMount } from 'svelte';

	const NAME = 'César Peón';

	const PILLARS = [
		{
			title: 'XR & Real-time 3D',
			description:
				'Browser-based VR worlds and interactive 3D experiences with Three.js, React Three Fiber and Hyperfy — no installs required.',
			// lucide "box"
			icon: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.3 7l8.7 5 8.7-5 M12 22V12'
		},
		{
			title: 'Blockchain & Web3',
			description:
				'dApps, wallets and protocol work on Solana and IOTA — from smart contracts to polished, usable frontends.',
			// lucide "link"
			icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
		},
		{
			title: 'Product Engineering',
			description:
				'Full-stack products end to end: OTT streaming for web and smart TVs, and AI-powered SaaS with Next.js, Supabase and Stripe.',
			// lucide "layers"
			icon: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z M22 17.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65 M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65'
		}
	];

	onMount(() => {
		printLogs();
	});
</script>

<Seo
	title="César Peón (cpl121) — Full-Stack Developer · XR & Blockchain"
	description="Portfolio of César Peón (cpl121), full-stack developer specialized in XR/3D experiences, Blockchain/Web3 and product engineering. Founder of 1to1 Digital Solutions."
/>

<section class="hero">
	<div class="card borders w-full">
		<div
			class="inner flex flex-col items-center gap-5 sm:gap-7 p-6 sm:p-10 bg-slate-200 dark:bg-zinc-800"
		>
			<div class="scene-wrap">
				<Scene3d />
			</div>
			<p class="eyebrow">@cpl121</p>
			<h1 class="title" aria-label={NAME}>
				{#each NAME.split(' ') as word, wordIndex (wordIndex)}
					<span class="flex flex-row" aria-hidden="true">
						{#each word.split('') as char, charIndex (charIndex)}
							<span class="word" data-text={char}>{char}</span>
						{/each}
					</span>
					<span class="word" data-text="&nbsp;" aria-hidden="true">&nbsp;</span>
				{/each}
			</h1>
			<p data-text="FULL-STACK DEVELOPER · XR & BLOCKCHAIN" class="subtitle">
				<mark class="mark">FULL-STACK DEVELOPER · XR & BLOCKCHAIN</mark>
			</p>
			<p class="max-w-xl text-center">
				I build VR worlds, interactive 3D experiences and Web3 products that run in the browser.
			</p>
			<div class="flex flex-wrap justify-center gap-3">
				<a
					href="/projects/"
					class="inline-block rounded-lg bg-accent-strong px-4 py-2 font-bold text-zinc-50 no-underline transition-colors duration-200 hover:bg-accent"
					>View projects</a
				>
				<LinkButton href={`mailto:${CONTACT_EMAIL}`}>Get in touch</LinkButton>
			</div>
		</div>
	</div>
</section>

<section class="mt-16 flex flex-col space-y-6" aria-labelledby="what-i-do">
	<h2 id="what-i-do" class="text-2xl font-bold">What I do</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each PILLARS as pillar (pillar.title)}
			<div class="card flex flex-col gap-3 p-6">
				<svg
					class="text-accent"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="32"
					height="32"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d={pillar.icon} />
				</svg>
				<h3 class="text-xl font-title">{pillar.title}</h3>
				<p class="text-base">{pillar.description}</p>
			</div>
		{/each}
	</div>
</section>

<section class="mt-16 flex flex-col space-y-6" aria-labelledby="featured-projects">
	<div class="flex items-baseline justify-between">
		<h2 id="featured-projects" class="text-2xl font-bold">Featured projects</h2>
		<a href="/projects/" class="font-bold text-link transition-colors duration-200"
			>View all projects →</a
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each HOME_FEATURED_PROJECTS as project (project.slug)}
			<FeaturedCard {project} />
		{/each}
	</div>
</section>

<section
	class="mt-20 mb-8 flex flex-col items-center space-y-4 text-center"
	aria-labelledby="contact"
>
	<h2 id="contact" class="text-2xl font-bold">Let's build something together</h2>
	<p class="max-w-xl">
		Have an XR experience, a Web3 product or an ambitious web app in mind? I'm open to freelance
		projects and collaborations through 1to1 Digital Solutions.
	</p>
	<div class="flex flex-wrap justify-center gap-3">
		<LinkButton href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LinkButton>
		<LinkButton href={GITHUB_CPL121_URL} external>GitHub</LinkButton>
		<LinkButton href={LINKEDIN_URL} external>LinkedIn</LinkButton>
	</div>
</section>

<style>
	.hero {
		@apply flex flex-col justify-center items-center mt-4;
	}

	.borders {
		@apply m-2 p-2 rounded-lg bg-gradient-to-tl from-teal-300 via-emerald-700 to-teal-500;
	}

	.scene-wrap {
		@apply w-full;
		height: clamp(160px, 26vw, 280px);
	}

	.eyebrow {
		@apply font-title uppercase tracking-widest text-sm text-accent;
	}

	.subtitle {
		@apply text-base sm:text-xl md:text-2xl tracking-wider relative text-center;
	}
	.subtitle::before,
	.subtitle::after {
		content: attr(data-text);
		@apply absolute top-0 left-0 w-full h-full;
	}

	.subtitle::before {
		left: 2px;
		text-shadow: -1px 0 teal;
		animation: noise-anim-2 10s infinite linear alternate-reverse;
	}
	.subtitle::after {
		left: -2px;
		text-shadow: 3px 0 aquamarine;
		animation: noise-anim 2s infinite linear alternate-reverse;
	}

	mark.mark {
		@apply p-0 bg-no-repeat relative;
		color: inherit;
		background: none;
	}

	.title {
		@apply font-home text-5xl sm:text-6xl md:text-7xl tracking-wider;
		@apply flex flex-row flex-wrap justify-center text-center;
	}

	.word {
		position: relative;
	}

	.word::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
	}

	.word:hover::before {
		@apply text-teal-300;
	}

	.word:hover {
		animation: bounce 0.5s linear infinite;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes noise-anim {
		0% {
			clip-path: inset(29% 0 25% 0);
		}
		5% {
			clip-path: inset(9% 0 38% 0);
		}
		10% {
			clip-path: inset(96% 0 1% 0);
		}
		15% {
			clip-path: inset(75% 0 23% 0);
		}
		20% {
			clip-path: inset(46% 0 50% 0);
		}
		25% {
			clip-path: inset(3% 0 46% 0);
		}
		30% {
			clip-path: inset(82% 0 2% 0);
		}
		35% {
			clip-path: inset(88% 0 1% 0);
		}
		40% {
			clip-path: inset(91% 0 8% 0);
		}
		45% {
			clip-path: inset(96% 0 2% 0);
		}
		50% {
			clip-path: inset(59% 0 38% 0);
		}
		55% {
			clip-path: inset(41% 0 53% 0);
		}
		60% {
			clip-path: inset(21% 0 47% 0);
		}
		65% {
			clip-path: inset(89% 0 4% 0);
		}
		70% {
			clip-path: inset(1% 0 95% 0);
		}
		75% {
			clip-path: inset(86% 0 4% 0);
		}
		80% {
			clip-path: inset(95% 0 5% 0);
		}
		85% {
			clip-path: inset(54% 0 36% 0);
		}
		90% {
			clip-path: inset(70% 0 27% 0);
		}
		95% {
			clip-path: inset(6% 0 16% 0);
		}
		100% {
			clip-path: inset(95% 0 2% 0);
		}
	}
	@keyframes noise-anim-2 {
		0% {
			clip-path: inset(76% 0 21% 0);
		}
		5% {
			clip-path: inset(54% 0 7% 0);
		}
		10% {
			clip-path: inset(55% 0 29% 0);
		}
		15% {
			clip-path: inset(89% 0 3% 0);
		}
		20% {
			clip-path: inset(33% 0 40% 0);
		}
		25% {
			clip-path: inset(17% 0 56% 0);
		}
		30% {
			clip-path: inset(37% 0 51% 0);
		}
		35% {
			clip-path: inset(38% 0 19% 0);
		}
		40% {
			clip-path: inset(93% 0 4% 0);
		}
		45% {
			clip-path: inset(44% 0 14% 0);
		}
		50% {
			clip-path: inset(53% 0 26% 0);
		}
		55% {
			clip-path: inset(67% 0 11% 0);
		}
		60% {
			clip-path: inset(85% 0 13% 0);
		}
		65% {
			clip-path: inset(27% 0 37% 0);
		}
		70% {
			clip-path: inset(87% 0 4% 0);
		}
		75% {
			clip-path: inset(10% 0 8% 0);
		}
		80% {
			clip-path: inset(51% 0 27% 0);
		}
		85% {
			clip-path: inset(10% 0 60% 0);
		}
		90% {
			clip-path: inset(83% 0 3% 0);
		}
		95% {
			clip-path: inset(23% 0 55% 0);
		}
		100% {
			clip-path: inset(1% 0 81% 0);
		}
	}
</style>
