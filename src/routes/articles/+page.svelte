<script lang="ts">
	import Articles from '$lib/components/sections/Articles.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Articles | 山田大陽</title>
	<meta name="description" content="山田大陽が Qiita に投稿している技術記事の一覧。" />
</svelte:head>

<main class="relative min-h-screen pt-28 md:pt-32">
	<Articles {data} />
	<Footer />
</main>
