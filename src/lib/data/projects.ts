import type { FeaturedProject } from '$lib/interfaces';

export const FEATURED_PROJECTS: FeaturedProject[] = [
	{
		slug: 'numen-games',
		title: 'Numen Games — VR Worlds',
		client: 'Numen Games',
		role: 'CTO & Developer',
		tagline: 'Virtual reality worlds that run natively in the browser — no downloads, no installs.',
		description: [
			'Numen Games builds immersive virtual worlds that run directly in the browser. Anyone with a link can walk into a real-time 3D space and share it with others — no app stores, no installations, no friction.',
			'The experiences are built on top of Hyperfy and Three.js, pushing what WebGL and WebXR can do inside a browser tab: interactive environments, multiplayer presence and game mechanics that feel native.',
			'As CTO I lead the technical side of the project: the architecture of the worlds, the 3D development on top of Hyperfy and Three.js, and the cloud infrastructure that keeps everything running — AWS provisioned with Terraform and services containerized with Docker.'
		],
		stack: ['Hyperfy', 'Three.js', 'AWS', 'Docker', 'Terraform'],
		links: [
			{ label: 'numen.games', url: 'https://numen.games/' },
			{ label: 'GitHub', url: 'https://github.com/numengames' }
		],
		image: '/images/projects/numen-games.jpg',
		imageAlt: 'Numen Games — avatar exploring a browser-based virtual reality world',
		tags: ['VR', '3D', 'Web']
	},
	{
		slug: 'overon-ott',
		title: 'OTT Streaming Platforms',
		client: 'Overon',
		role: 'Full-stack developer',
		tagline: 'Four multi-platform OTT streaming apps: web, HbbTV and LG & Samsung smart TVs.',
		description: [
			'For Overon I worked on a family of four OTT streaming platforms — Primeran, ETB On, Guau and Makusi — delivering on-demand and live video across web, HbbTV and smart TV apps.',
			'On the frontend I developed the web applications with Solid.js and the TV experiences for HbbTV, LG (webOS) and Samsung (Tizen), each with its own constraints around navigation, remote-control input and performance.',
			'On the backend I worked on the Node.js services, the CMS that powers the catalogs and the PostgreSQL database behind them — covering the product end to end.'
		],
		stack: ['Solid.js', 'Node.js', 'PostgreSQL', 'HbbTV', 'webOS', 'Tizen'],
		links: [
			{ label: 'primeran.eus', url: 'https://primeran.eus/' },
			{ label: 'etbon.eus', url: 'https://etbon.eus/' },
			{ label: 'guau.eus', url: 'https://guau.eus/' },
			{ label: 'makusi.eus', url: 'https://makusi.eus/ikusi' }
		],
		image: '/images/projects/overon-ott.jpg',
		imageAlt: 'ETB On — one of the OTT streaming platforms developed for Overon',
		tags: ['OTT', 'Streaming', 'Smart TV']
	},
	{
		slug: 'interactive-cell',
		title: 'Interactive Cell',
		client: '3DforScience',
		role: 'Freelance 3D web developer',
		tagline: 'A real-time interactive 3D cell for science communication, rendered in the browser.',
		description: [
			'3DforScience is a studio specialized in scientific 3D design and animation. They brought me in to build an interactive, real-time 3D cell that scientists and audiences can explore directly in the browser.',
			'The piece is built with Next.js and React Three Fiber (with drei) on top of WebGL: users can orbit around the cell, dive into its structures and trigger contextual information, keeping smooth performance while rendering complex organic geometry.',
			'The final deliverable is covered by confidentiality agreements with the studio’s end client, so there is no public link — the screenshots offer a glimpse of the result.'
		],
		stack: ['Next.js', 'React Three Fiber', 'drei', 'WebGL'],
		links: [{ label: '3dforscience.com', url: 'https://3dforscience.com/' }],
		image: '/images/projects/interactive-cell.jpg',
		imageAlt: 'Interactive 3D cell visualization for 3DforScience',
		tags: ['3D', 'WebGL', 'Science']
	},
	{
		slug: 'phago',
		title: 'Phago',
		client: '3DforScience',
		role: 'Freelance 3D web developer',
		tagline:
			'Meet the bacteriophage: an interactive, annotated 3D virus you can explore in the browser.',
		description: [
			'The second project I developed for 3DforScience: an interactive 3D bacteriophage where users can explore the anatomy of the virus — capsid, tail fibers, baseplate — through annotated, expandable hotspots.',
			'Like the Interactive Cell, it is built with Next.js and React Three Fiber (with drei) over WebGL, combining scientific accuracy with an engaging, explorable presentation.',
			'The final deliverable is covered by confidentiality agreements with the studio’s end client, so there is no public link — the screenshots offer a glimpse of the result.'
		],
		stack: ['Next.js', 'React Three Fiber', 'drei', 'WebGL'],
		links: [{ label: '3dforscience.com', url: 'https://3dforscience.com/' }],
		image: '/images/projects/phago.jpg',
		imageAlt: 'Phago — interactive 3D scientific visualization for 3DforScience',
		tags: ['3D', 'WebGL', 'Science']
	},
	{
		slug: 'hoy-entreno',
		title: 'Hoy Entreno',
		client: '1to1 Digital Solutions',
		role: 'Founder & Developer',
		tagline: 'AI-powered workout routines tailored to your goals, equipment and schedule.',
		description: [
			'Hoy Entreno is a product I built and run at my company, 1to1 Digital Solutions: it generates personalized workout routines with AI, adapting to your goals, experience, available equipment and schedule.',
			'It is a full SaaS: Next.js on the frontend, Supabase for authentication and data, and Stripe powering the subscriptions.'
		],
		stack: ['Next.js', 'Supabase', 'Stripe'],
		links: [{ label: 'hoy-entreno.app', url: 'https://hoy-entreno.app/' }],
		image: '/images/projects/hoy-entreno.jpg',
		imageAlt: 'Hoy Entreno — AI workout routine builder',
		tags: ['AI', 'SaaS']
	},
	{
		slug: 'scoura',
		title: 'Scoura',
		client: '1to1 Digital Solutions',
		role: 'Founder & Developer',
		tagline: 'Newsletters personalized for every reader, generated with AI.',
		description: [
			'Scoura is another 1to1 Digital Solutions product: a platform that generates newsletters personalized to each reader with AI, so every subscriber receives content that actually matches their interests.',
			'Like Hoy Entreno, it runs on Next.js with Supabase for auth and data and Stripe for billing.'
		],
		stack: ['Next.js', 'Supabase', 'Stripe'],
		links: [{ label: 'scoura.app', url: 'https://scoura.app/' }],
		image: '/images/projects/scoura.jpg',
		imageAlt: 'Scoura — AI-personalized newsletters',
		tags: ['AI', 'SaaS']
	}
];

/** Slugs of the featured projects highlighted on the home page, in order. */
export const HOME_FEATURED_SLUGS = ['numen-games', 'overon-ott', 'interactive-cell'];

export const HOME_FEATURED_PROJECTS: FeaturedProject[] = HOME_FEATURED_SLUGS.flatMap((slug) => {
	const project = FEATURED_PROJECTS.find((candidate) => candidate.slug === slug);
	return project ? [project] : [];
});
