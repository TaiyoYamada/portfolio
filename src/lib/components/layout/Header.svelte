<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';

	const navItems = [
		'About Me',
		'Projects',
		'Research',
		'Experience',
		'Certifications',
		'Awards',
		'Articles',
		'Contact'
	];

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
	function closeMenu() {
		isOpen = false;
	}
</script>

<!-- Desktop / Header Bar -->
<header
	in:fly={{ y: -100, duration: 800 }}
	class="fixed top-4 left-0 right-0 max-w-5xl mx-auto z-50 px-4"
>
	<div
		class="bg-white border-2 border-black shadow-pop rounded-full px-6 h-16 flex items-center justify-between relative z-50"
	>
		<!-- Logo / Name -->
		<a
			href="/"
			class="text-lg md:text-xl font-black text-black tracking-tight hover:text-primary transition-colors flex items-center gap-2"
		>
			<span class="w-3 h-3 bg-accent rounded-full border border-black"></span>
			TaiyoYamada
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden xl:flex items-center gap-1">
			{#each navItems as item, index}
				<a
					href={`#${item.toLowerCase().replace(' ', '-')}`}
					style="--hover-rot: {((index % 5) - 2) * 2}deg;"
					class="px-3 py-2 text-xs font-bold text-black border border-transparent hover:bg-secondary hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:[transform:scale(1.1)_rotate(var(--hover-rot))] rounded-full transition-all"
				>
					{item}
				</a>
			{/each}
		</nav>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="xl:hidden p-2 text-black hover:bg-secondary rounded-full border border-transparent hover:border-black transition-all"
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
		>
			{#if isOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>
</header>

<!-- Mobile Navigation Overlay -->
{#if isOpen}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
		onclick={closeMenu}
		role="presentation"
	></div>
	
	<nav
		in:fly={{ y: -20, duration: 300 }}
		out:fly={{ y: -20, duration: 300 }}
		class="fixed top-24 left-4 right-4 bg-white border-2 border-black shadow-pop rounded-2xl z-50 p-4 xl:hidden max-h-[80vh] overflow-y-auto"
	>
		<div class="flex flex-col gap-2">
			{#each navItems as item, index}
				<a
					href={`#${item.toLowerCase().replace(' ', '-')}`}
					onclick={closeMenu}
					in:fly={{ x: -20, duration: 300, delay: index * 50 }}
					class="p-3 text-lg font-bold text-black hover:bg-primary hover:text-white rounded-xl border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
				>
					{item}
				</a>
			{/each}
		</div>
	</nav>
{/if}
