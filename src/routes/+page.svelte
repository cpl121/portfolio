<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio of cpl121" />
</svelte:head>

<section>
	<p class="title">Welcome to cpl121 portfolio</p>
</section>

<style>
	section {
		@apply flex flex-col justify-center items-center;
		flex: 0.2;
	}

	.title {
		@apply font-home text-8xl tracking-wider;
		@apply relative inline-block;
	}

	/* .title::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
	}

	.title:hover::before {
		@apply text-teal-400;
	}

	.title:hover {
		@apply text-teal-400;
		animation: bounce 0.5s linear infinite;
	}

	@keyframes bounce {
		0% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
		100% { transform: translateY(0); }
	} */
</style>
