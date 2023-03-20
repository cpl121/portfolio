<script lang="ts">
	import { MarkdownSection } from "$components";
	import { Expandable } from "$components";
	import { type IExperience, TECHNOLOGIES, SOCIAL_MEDIA } from "$lib";

    const EXPERIENCE: IExperience[] = [
        {
            title: "Boxfish Studio. 13/04/2022 - now",
            summary: "Currently working",
        },
        {
            title: "Mnemo Consulting. 01/06/2020 - 02/11/2021",
            summary: "In Mnemo I worked as a fullstack web developer, using Vue.js 2.0 and Angular 6 technologies for the front-end part, and Python for the Back-end part. In projects with Angular, tests have been carried out with Karma and Jasmine, and the work methodology used was SCRUM.",
        },
        {
            title: "Addentra Internet SL. 03/09/2018 - 13/04/2020",
            summary: "I have worked as a web developer at Addentra Internet S.L., 09/03/2018 – 04/13/2020. I started in the company doing Front-End and Back-End tasks, developing an application in Angular 8 and Node.js using techniques such as Test Driven Development (TDD). The working methodology used has been Scrum and I have participated in refinement, design and architecture tasks. Good practices based on SOLID principles and design patterns have been used.",
        },
    ]
</script>

<div class="card p-4">
    <span> I’m interested in front-end and dapp development,  I’m currently learning React, Vue.js 3 and web 3.0</span>
</div>

<div class="flex flex-col space-y-4 my-8">
    {#each EXPERIENCE as {title, summary }}
        <Expandable {title} {summary} />
    {/each}
</div>

<div class="flex flex-col space-y-8">
    <MarkdownSection title='Technologies worked' markdown={TECHNOLOGIES} />
    <MarkdownSection title='Social media' markdown={SOCIAL_MEDIA} />
</div>


