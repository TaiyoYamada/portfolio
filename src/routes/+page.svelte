<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import News from '$lib/components/sections/News.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { getLatestNews } from '$lib/news';

	const latestNews = getLatestNews(5);
</script>

<main class="relative min-h-screen">
	<Hero />
	<News items={latestNews} />
	<Footer />
</main>
