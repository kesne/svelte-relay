module.exports = {
	title: 'Svelte Relay',
	tagline: 'Easily use GraphQL in Svelte, powered by the production-ready Relay runtime.',
	url: 'https://kesne.github.io/',
	baseUrl: '/svelte-relay/',
	favicon: 'img/favicon.ico',
	organizationName: 'kesne', // Usually your GitHub org/user name.
	projectName: 'svelte-relay', // Usually your repo name.
	themeConfig: {
		sidebarCollapsible: false,
		prism: {
			// additionalLanguages: ['svelte'],
		},
		navbar: {
			title: 'Svelte Relay',
			logo: {
				alt: 'Svelte Relay Logo',
				src: 'img/svelte-relay-logo.svg',
			},
			items: [
				{
					to: 'docs/getting-started',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					href: 'https://github.com/kesne/svelte-relay',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				// {
				// 	title: 'Docs',
				// 	items: [
				// 		{
				// 			label: 'Style Guide',
				// 			to: 'docs/',
				// 		},
				// 		{
				// 			label: 'Second Doc',
				// 			to: 'docs/doc2/',
				// 		},
				// 	],
				// },
				// {
				// 	title: 'Community',
				// 	items: [
				// 		{
				// 			label: 'Stack Overflow',
				// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 		},
				// 		{
				// 			label: 'Discord',
				// 			href: 'https://discordapp.com/invite/docusaurus',
				// 		},
				// 		{
				// 			label: 'Twitter',
				// 			href: 'https://twitter.com/docusaurus',
				// 		},
				// 	],
				// },
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/kesne/svelte-relay',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/kesne/svelte-relay/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
