<script lang="ts">
	import About from '$lib/components/sections/About.svelte';
	// import Skills from '$lib/components/sections/Skills.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Research from '$lib/components/sections/Research.svelte';
	import Certifications from '$lib/components/sections/Certifications.svelte';
	import Awards from '$lib/components/sections/Awards.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<title>About | Taiyo Yamada</title>
	<meta name="description" content="山田大陽のプロフィール、経歴、研究活動、保有資格、受賞歴。" />
</svelte:head>

<main class="relative min-h-screen pt-28 md:pt-32">
	<About />
	<!-- <Skills /> -->
	<Experience />
	<Research />
	<Certifications />
	<Awards />
	<Footer />
</main>
