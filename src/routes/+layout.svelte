<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/layout/Header.svelte';

	let { children } = $props();

	const siteUrl = "https://taiyoyamada.dev";

	// JSON-LD 構造化データ
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "山田大陽",
		alternateName: "Taiyo Yamada",
		url: siteUrl,
		image: `${siteUrl}/portfolio.png`,
		jobTitle: "エンジニア / 学生",
		description: "山田大陽のポートフォリオサイトです。iOSアプリ開発、Webアプリケーション開発、量子アルゴリズムの研究に取り組むエンジニア/学生です。",
		knowsAbout: [
			"Swift",
			"iOS開発",
			"Web開発",
			"TypeScript",
			"React",
			"Next.js",
			"SvelteKit",
			"量子コンピューティング"
		]
	};
</script>

<svelte:head>
	<title>Portfolio | 山田大陽</title>
	<meta name="description" content="山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。" />
	<meta name="keywords" content="山田大陽, やまだたいよう, Taiyo Yamada, ポートフォリオ, エンジニア, 学生, 熊本県立大学, 飯村研究室" />
	<meta name="author" content="山田大陽" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content="Portfolio | 山田大陽" />
	<meta property="og:description" content="山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。" />
	<meta property="og:site_name" content="Portfolio | 山田大陽" />
	<meta property="og:image" content="{siteUrl}/portfolio.png" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="山田大陽 | ポートフォリオ - エンジニア / 学生" />
	<meta name="twitter:description" content="山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。" />
	<meta name="twitter:image" content="{siteUrl}/portfolio.png" />
	
	<link rel="canonical" href={siteUrl} />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Outfit:wght@400;500;700;900&display=swap" rel="stylesheet" />
	
	<!-- JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Header />
{@render children()}
