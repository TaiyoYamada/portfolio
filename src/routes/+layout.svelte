<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/layout/Header.svelte';

	let { children } = $props();

	const siteUrl = 'https://taiyoyamada.dev';
	const siteName = 'Taiyo Yamada';
	const siteDescription =
		'山田大陽のホームページ。量子アルゴリズムの研究と、iOS / Web アプリの開発をしています。';

	// JSON-LD 構造化データ
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: '山田大陽',
		alternateName: 'Taiyo Yamada',
		url: siteUrl,
		image: `${siteUrl}/portfolio.png`,
		jobTitle: 'Engineer / Student',
		description: siteDescription,
		knowsAbout: [
			'Swift',
			'iOS開発',
			'Web開発',
			'TypeScript',
			'React',
			'Next.js',
			'SvelteKit',
			'量子コンピューティング',
			'VQE',
			'Qiskit'
		]
	};
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={siteDescription} />
	<meta
		name="keywords"
		content="山田大陽, やまだたいよう, Taiyo Yamada, エンジニア, 学生, 熊本県立大学, 飯村研究室, 量子コンピューティング, iOS開発"
	/>
	<meta name="author" content={siteName} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content="{siteUrl}/portfolio.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content="{siteUrl}/portfolio.png" />

	<link rel="canonical" href={siteUrl} />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- JSON-LD -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
</svelte:head>

<Header />
{@render children()}
