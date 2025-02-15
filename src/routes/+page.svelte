<script lang="ts">
	import { modeStore, printLogs } from '$lib';
	import { onMount } from 'svelte';
	import { Title, Logo } from '$lib/images';

	onMount(() => {
		printLogs();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="CPL121 Portfolio" />
</svelte:head>

<section class="lg:mt-32 flex items-center space-y-12">
	<div class="card borders max-w">
		<div
			class={`flex flex-col items-center space-y-8 p-8 md:p-16 ${
				$modeStore === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
			}`}
		>
		<img data-mode={$modeStore} src={Logo} alt='Logo' class="h-28 w-28" />
			<img data-mode={$modeStore} src={Title} alt='Title' class="h-24 w-auto" />
			<h1 data-text="WEB3XR | FULL-STACK DEVELOPER" class="subtitle">
				<mark class="mark">WEB3XR | FULL-STACK DEVELOPER</mark>
			</h1>
		</div>
	</div>
</section>

<style class="scss">
	section {
		@apply flex flex-col justify-center items-center;
		flex: 0.2;
	}

	.borders {
		@apply m-2 p-2 rounded-lg bg-gradient-to-tl from-customTurquoise-100 via-customTurquoise-400 to-customTurquoise-200;
		/* animation: rotate 10s linear infinite; */
	}

	.subtitle {
		@apply text-2xl tracking-wider relative text-center;
		margin: 2rem 0rem 1.5rem;
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
		background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
		background-size: 0% 0.3em;
		background-position: 0 80%;
		background-size: 100% 0.3em;
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

	@keyframes rotate {
		100% {
			transform: rotate(1turn);
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
