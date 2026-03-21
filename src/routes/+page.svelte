<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Research from '$lib/components/sections/Research.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Certifications from '$lib/components/sections/Certifications.svelte';
	import Awards from '$lib/components/sections/Awards.svelte';
	import Articles from '$lib/components/sections/Articles.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { data } = $props();
</script>

<main class="relative min-h-screen">
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Research />
	<Experience />
	<Certifications />
	<Awards />
	<Articles {data} />
	<Contact />
	<Footer />
</main>
