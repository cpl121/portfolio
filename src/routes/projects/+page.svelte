<script lang="ts">
	import type { GithubRepository } from '$lib';
	import { Card } from '$components';

	// eslint-disable-next-line
	export let data: { projects: GithubRepository[] } = { projects: [] };

	const COLLABORATIONS_PROJECTS: GithubRepository[] = [
		{
			name: 'IOTA Rebased',
			url: 'https://github.com/iotaledger/iota',
			description:
				'About Bringing the real world to Web3 with a scalable, decentralized and programmable DLT infrastructure.',			
			technologies: [
				'Wallet', 'Explorer', 'Dashboard', 'SDK', 'Move' 
			]
		},
		{
			name: 'IOTA Wallet - Firefly',
			url: 'https://github.com/iotaledger/firefly',
			description:
				'The official IOTA and Shimmer wallet.',			
			technologies: [
				'Svelte-kit', 'Tangle'
			]
		},
		{
			name: 'IOTA Website',
			url: 'https://www.iota.org/',
			description:
				'IOTA has re-engineered the principles of existing distributed ledger technology to provide a feeless, open-source, secure data and financial exchange protocol for everyone.',			
			technologies: [
				'Svelte-kit'
			]
		},
		{
			name: 'Synergyland Tavern',
			url: 'https://tavern.synergyland.live/',
			description:
				'Synergyland is a ARPG Play to Earn game project powered by Solana. The tavern is a web application for rewards through season pass with which you can obtain nfts to use in the main game.',
				technologies: [
				'Solana', 'Next', 'Express'
			]
		},
		{
			name: 'Sugar Rush',
			url: 'https://sugar-rush.boxfish.studio/',
			description:
				'Quickly create and manage Metaplex Candymachines and NFTs in Solana from your browser',
				technologies: [
				'Solana', 'NFT', 'Next'
			]
		},
		{
			name: 'Boxfish Website',
			url: 'https://boxfish.studio/',
			description: 'Top-quality solutions for emerging industries and technologies.',
			technologies: [
				'Svelte-kit'
			]
		},
		{
			name: 'Shimmer',
			url: 'https://shimmer.network/',
			description:
				'Shimmer  is a feeless, parallelized DAG ledger to secure and create fully customizable smart contract chains.',
				technologies: [
				'Svelte-kit'
			]
		},
		{
			name: 'Assembly',
			url: 'https://assembly.sc/',
			description:
				'Assembly is a permissionless protocol to build, connect and deploy smart contracts on a feeless multi-chain network.',
				technologies: [
				'Svelte-kit'
			]
		},
		{
			name: 'Firefly Website',
			url: 'https://firefly.iota.org/',
			description:
				'A lightweight wallet for sending and receiving your IOTA assets on the go. Highly secure and easy to use, with mobile-specific functionality.',
				technologies: [
				'Svelte-kit'
			]
		},
		{
			name: 'Iota Library',
			url: 'https://assets.iota.org/',
			description: 'All assets of IOTA of the asset library are free to use, rehash, redesign.',
			technologies: [
				'Next', 'Prisma'
			]
		},
		{
			name: 'Iota Roadmap',
			url: 'https://roadmap.iota.org/',
			description: 'Interactive Roadmap of IOTA Research and Development.',
		},
		{
			name: 'Klinikare',
			url: 'https://app.klinikare.com',
			description:
				'KliniKare is specialized in the development of software for the comprehensive management of universities, clinics and laboratories.',
				technologies: [
				'Angular', 'Node', 'PostgreSQL'
			]
		},
		{
			name: 'Gestiona',
			url: 'http://www.gestiondeclinica.es/',
			description:
				'Gestiona by Klinikare is specialized in the development of software for the integral management of all types of clinics.'
		}
	];
</script>

<div class="flex flex-col space-y-4">
	<h1 class="text-5xl underline">Projects</h1>
	<h2 class="font-bold py-4">My contributions</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each COLLABORATIONS_PROJECTS as repo}
			<Card {...repo} />
		{/each}
	</div>
	<h2 class="font-bold py-4">Own Projects</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data?.projects as repo}
			<Card {...repo} />
		{/each}
	</div>
</div>
