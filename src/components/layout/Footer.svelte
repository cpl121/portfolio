<script lang="ts">
	import { COMPANY_GITHUB_URL, COMPANY_NAME, CONTACT_EMAIL, GITHUB_CPL121_URL } from '$lib';
	import { LinkButton } from '$components';
</script>

<footer class="bg-zinc-300 dark:bg-zinc-700">
	<LinkButton href={`mailto:${CONTACT_EMAIL}`}>Get in touch →</LinkButton>
	<span>
		Developed by
		<a class="link" href={GITHUB_CPL121_URL} target="_blank" rel="noopener noreferrer">cpl121</a>
		· Founder of
		<a class="link" href={COMPANY_GITHUB_URL} target="_blank" rel="noopener noreferrer"
			>{COMPANY_NAME}</a
		>
	</span>
</footer>

<style lang="scss">
	footer {
		@apply flex flex-col justify-center items-center gap-2 p-4 mt-8 text-center;
	}

	.link {
		@apply font-bold transition-colors duration-200;
	}

	.link:hover {
		@apply text-teal-400 underline;
	}
</style>
