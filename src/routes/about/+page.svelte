<script lang="ts">
	import { MarkdownSection } from "$components";
	import { Expandable } from "$components";
	import { type IExperience, TECHNOLOGIES, SOCIAL_MEDIA } from "$lib";

    const SUMMARY: string = "Experienced Full-Stack Web Developer currently working at Boxfish Studio, specializing in web3 development using Solana and IOTA blockchains. Proficient in React with Next.js and Svelte with SvelteKit for front-end development, and Node.js for back-end development. Prior to this role, worked at Mnemo and Addentra, delivering high-quality web applications utilizing TDD techniques and Scrum methodology. Skilled in Vue.js, Angular, and Python. Holds a Master's degree in Industry 4.0 from UNIR and a Bachelor's degree in Computer Engineering from the University of Alcalá."
    const EXPERIENCES: IExperience[] = [
        {
            title: "Full-Stack Web3 Developer at Boxfish Studio, 18/04/2022 – Currently working",
            summary: `
            <p>Boxfish Studio is a technology company that specializes in developing web3 applications. As a Full-Stack Web3 Developer, my main responsibilities include:</p>
            <ul style="margin: 10px 0 10px 20px; list-style-type: disc;">
                <li>Developing web applications using React with Next.js and Svelte with SvelteKit for front-end, and Node.js for back-end.</li>
                <li>Lead the development of a web3 project with Solana, where Next.js was utilized for front-end development and Node.js with Express for the back-end. Development and maintenance of APIs and databases, as well as migrations and schema modifications.</li>
                <li>Developing web applications for IOTA using SvelteKit and React for front-end, and Node.js and Prisma for back-end.</li>
                <li>Collaborated with cross-functional teams to deliver successful web3 projects, utilizing agile development methodologies and effective communication.</li>
            </ul>
            <p>Throughout my time at Boxfish Studio, I have utilized the Agile methodology for project management and followed best practices for web3 development. I have had the opportunity to develop some applications both independently and as part of a team. Additionally, I have gained experience leading and managing teams to deliver successful projects.</p>`,
            technologies: ['Svelte', 'React', 'Typescript', 'NextJS', 'NodeJS', 'Solana', 'IOTA', 'Vercel', 'GraphQL', 'Express.js', 'JWT', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'Linux', 'Git', 'Docker', 'Heroku', 'Chakra', 'Strapi', 'Postman', 'Styled-componentes', 'Figma', 'Yarn', 'pnpm']
        },
        {
            title: "Full-Stack Web Developer at Mnemo, 01/06/2020 – 02/11/2021",
            summary: `
            <p>Mnemo is a technology consulting company that offers digital transformation services to businesses. As a Full-Stack Web Developer, my main responsibilities included:</p>
            <ul style="margin: 10px 0 10px 20px; list-style-type: disc;">
                <li>Developing web applications using Vue.js 2.0 and Angular 6 for front-end, and Python for back-end.</li>
                <li>Ensuring high-quality standards and meeting client requirements for web applications built on Angular, by conducting rigorous testing using tools like Karma and Jasmine.</li>
                <li>Working with a banking client to develop internal applications to manage requests, streamlining their workflows and improving their efficiency.</li>
                <li>Experience with cloud computing, including deploying web applications on cloud platforms like Google Cloud Platform.</li>
                <li>Working with state management, tables, communication MVC, and security in web applications, ensuring that they were scalable, maintainable, and met the client's needs.</li>
            </ul>
            <p>During my time at Mnemo, I took ownership of the entire web application development process, from the initial requirements gathering to the final deployment. I leveraged my strong technical skills in front-end development, back-end programming, and cloud computing to create robust and scalable web applications. As a self-motivated individual, I took pride in working independently to meet project deadlines and deliver high-quality software solutions.</p>`,
            technologies: ['Angular', 'Vue.js', 'Typescript', 'Python', 'Google Cloud', 'Java', 'Jasmine', 'Karma', 'HTML', 'CSS', 'JavaScript', 'Swagger', 'Postman', 'Spring', 'Linux', 'Git', 'NPM']
        },
        {
            title: "Full-Stack Web Developer at Addentra Internet S.L., 03/09/2018 – 13/04/2020",
            summary: `
            <p>Addentra Internet S.L. is a company specializing in web and mobile application development for dental clinics. As a Full-Stack Web Developer, my main responsibilities included:</p>
            <ul style="margin: 10px 0 10px 20px; list-style-type: disc;">
                <li>Developing an application in Angular 8 and Node.js using Test-Driven Development (TDD) techniques.</li>
                <li>Participating in refinement, design, and architecture tasks for web applications, ensuring that the final product was scalable, maintainable, and met the client's requirements.</li>
                <li>Conducting tests using Karma and Jasmine for projects with Angular, ensuring that the web applications were of high quality and met the client's requirements.</li>
                <li>Working with databases, including designing database schemas, writing SQL queries, and ensuring data integrity and security.</li>
            </ul>
            <p>Throughout my time at Addentra, I utilized the Scrum methodology for project management and followed Agile practices, including daily stand-up meetings and sprint reviews. I followed SOLID principles and design patterns to create scalable and maintainable code. I collaborated with cross-functional teams, including UX/UI designers and QA testers, to ensure that the web applications were user-friendly and met the client's expectations.</p>`,
            technologies: ['Angular', 'NodeJS', 'Typescript', 'MariaDB', 'AWS', 'MySQL', 'Jasmine', 'Karma', 'Protractor', 'RxJS', 'Bootstrap', 'SQL Server', 'SOLID', 'Scrum', 'Jira', 'Trello', 'TDD', 'Agile', 'HTML', 'CSS', 'SASS', 'JavaScript', 'Windows', 'Git', 'ThreeJS', 'NPM', 'Webpack', 'Jenkins']
        },
    ]

    const EDUCATION: IExperience[] = [
        {
            title: "Master's degree in Industry 4.0, 2021/2022",
            summary: `
            <p>UNIR is a private university in Spain that offers a wide range of undergraduate and postgraduate degrees. I studied a Master's degree in Industry 4.0, which is a specialization in the field of Industrial Engineering. During my time at UNIR, I learned about the latest technologies in the field of Industry 4.0, including:</p>
            <ul style="margin: 10px 0 10px 20px; list-style-type: disc;">
                <li>Internet of Things (IoT)</li>
                <li>Blockchain</li>
                <li>Artificial Intelligence (AI)</li>
                <li>Big Data</li>
                <li>Robotics</li>
                <li>3D Printing</li>
                <li>Cloud Computing</li>
                <li>Cibersecurity</li>
            </ul>
            `,
            technologies: ['Azure', 'Arduino', 'Python', 'eMarisma', 'Ultimaker Cura', 'Autodesk Fusion 360', 'TensorFlow', 'MQTT', 'CoppeliaSim']
        },
        {
            title: "Bachelor's degree in Computer Engineering, 2014/2015 – 2018/2019",
            summary: `
            <p>University of Alcalá is a public university in Spain that offers a wide range of undergraduate and postgraduate degrees. I studied a Bachelor's degree in Computer Engineering, which is a specialization in the field of Computer Science. During my time at the University of Alcalá, I learned about the latest technologies in the field of Computer Science, including:</p>
            <ul style="margin: 10px 0 10px 20px; list-style-type: disc;">
                <li>Computer programming and software development</li>
                <li>Data structures and algorithms</li>
                <li>Computer architecture and organization</li>
                <li>Operating systems and system programming</li>
                <li>Computer networks and communications</li>
                <li>Database systems and management</li>
                <li>Artificial intelligence and machine learning</li>
                <li>Computer security and cryptography</li>
            </ul>
            <p>Throughout their studies, students will have opportunities to work on hands-on projects and gain practical experience in developing software applications and systems. They will also develop important skills in problem-solving, critical thinking, and communication, which are essential for success in the field of computer engineering.</p>`,
            technologies: ['Python', 'Java', 'Android', 'PostgreSQL', 'C', 'C++', 'Apache', 'Nvidia CUDA', 'Scala', 'SQLite', 'Prolog', 'Pascal']
        },
    ]
</script>

<section class="flex flex-col space-y-12 mt-2">
    <h1 class="text-5xl underline">About Me</h1>
    <div class="card p-8">
        <span class="font-semibold tracking-wide"> {SUMMARY}</span>
    </div>

    <div class="flex flex-col space-y-4 my-8">
        <h1>Work Experience</h1>
        {#each EXPERIENCES as experience}
            <Expandable {...experience} />
        {/each}
    </div>

    <MarkdownSection title='Technologies worked' markdown={TECHNOLOGIES} />

    <div class="flex flex-col space-y-4 my-8">
        <h1>Education</h1>
        {#each EDUCATION as experience}
            <Expandable {...experience} />
        {/each}
    </div>

    <MarkdownSection title='Social media' markdown={SOCIAL_MEDIA} />
</section>
