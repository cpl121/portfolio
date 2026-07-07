<script lang="ts">
	import { Expandable, LinkButton, Pill, Seo } from '$components';
	import {
		ABOUT_SUMMARY,
		EDUCATION,
		EXPERIENCES,
		GITHUB_CPL121_URL,
		LINKEDIN_URL,
		TECHNOLOGY_GROUPS,
		TWITTER_URL
	} from '$lib';

	const SOCIAL_LINKS = [
		{ label: 'GitHub', url: GITHUB_CPL121_URL },
		{ label: 'LinkedIn', url: LINKEDIN_URL },
		{ label: 'Twitter', url: TWITTER_URL }
	];
</script>

<Seo
	title="About Me — cpl121"
	description="César Peón (cpl121): full-stack developer with experience in XR/3D, Blockchain/Web3, OTT streaming and AI products. Work experience, education and technologies."
/>

<section class="flex flex-col space-y-12 mt-2">
	<h1 class="text-5xl underline">About Me</h1>
	<div class="card p-8">
		<span class="font-semibold tracking-wide"> {ABOUT_SUMMARY}</span>
	</div>

	<div class="flex flex-col space-y-4 my-8">
		<h2 class="text-2xl">Work Experience</h2>
		{#each EXPERIENCES as experience, index (experience.title)}
			<Expandable
				title={experience.title}
				summary={experience.summary}
				technologies={experience.technologies}
				initialOpen={index === 0}
			/>
		{/each}
	</div>

	<div class="card flex flex-col space-y-4 p-6">
		<h2 class="text-2xl underline self-center my-2">Technologies</h2>
		{#each TECHNOLOGY_GROUPS as group (group.category)}
			<div class="flex flex-col space-y-1">
				<h3 class="font-title text-lg text-accent">{group.category}</h3>
				<div class="flex flex-wrap space-x-2 items-center">
					{#each group.items as technology (technology)}
						<Pill label={technology} />
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="flex flex-col space-y-4 my-8">
		<h2 class="text-2xl">Education</h2>
		{#each EDUCATION as entry (entry.title)}
			<Expandable title={entry.title} summary={entry.summary} technologies={entry.technologies} />
		{/each}
	</div>

	<div class="card flex flex-col items-center space-y-4 p-4">
		<h2 class="text-2xl underline my-2">Social media</h2>
		<ul class="flex flex-wrap gap-3 list-none">
			{#each SOCIAL_LINKS as social (social.url)}
				<li>
					<LinkButton href={social.url} external>{social.label}</LinkButton>
				</li>
			{/each}
		</ul>
	</div>
</section>
