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
						{ label: 'Overview', slug: 'getting-started/overview' },
						{ label: 'Architecture', slug: 'getting-started/architecture' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Your First App', slug: 'getting-started/first-app' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Display & UI System', slug: 'guides/display' },
						{ label: 'Input & Events', slug: 'guides/input-events' },
						{ label: 'Page Lifecycle', slug: 'guides/page-lifecycle' },
						{ label: 'Device APIs', slug: 'guides/device-apis' },
						{ label: 'UI/UX Design Guidelines', slug: 'guides/design-guidelines' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Simulator', slug: 'reference/simulator' },
						{ label: 'CLI', slug: 'reference/cli' },
						{ label: 'Packaging & Deployment', slug: 'reference/packaging' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Resources', slug: 'community/resources' },
					],
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
