// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'Even Realities Docs',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/Y4jHMCU4sv' },
				{ icon: 'github', label: 'Community Notes', href: 'https://github.com/nickustinov/even-g2-notes' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Your First App', slug: 'getting-started/first-app' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Architecture', slug: 'getting-started/architecture' },
						{ label: 'Overview', slug: 'getting-started/overview' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'UI/UX Design Guidelines', slug: 'guides/design-guidelines' },
						{ label: 'Device APIs', slug: 'guides/device-apis' },
						{ label: 'Page Lifecycle', slug: 'guides/page-lifecycle' },
						{ label: 'Input & Events', slug: 'guides/input-events' },
						{ label: 'Display & UI System', slug: 'guides/display' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Resources', slug: 'community/resources' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Packaging & Deployment', slug: 'reference/packaging' },
						{ label: 'CLI', slug: 'reference/cli' },
						{ label: 'Simulator', slug: 'reference/simulator' },
					],
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
