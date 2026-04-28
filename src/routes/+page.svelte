<script lang="ts">
	import Intro from '$lib/components/sections/Intro.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import News from '$lib/components/sections/News.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { getLatestNews } from '$lib/news';

	const latestNews = getLatestNews(5);
</script>

<Intro />

<main class="relative min-h-screen">
	<Hero />
	<News items={latestNews} />
	<Footer />
</main>
