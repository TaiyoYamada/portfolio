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
	class="fixed top-4 right-0 left-0 z-50 mx-auto max-w-5xl px-4"
>
	<div
		class="relative z-50 flex h-16 items-center justify-between rounded-full border-2 border-black bg-white px-6 shadow-pop"
	>
		<!-- Logo / Name -->
		<a
			href="/"
			class="flex items-center gap-2 text-lg font-black tracking-tight text-black transition-colors hover:text-primary md:text-xl"
		>
			<span class="h-3 w-3 rounded-full border border-black bg-accent"></span>
			TaiyoYamada
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-1 xl:flex">
			{#each navItems as item, index}
				<a
					href={`#${item.toLowerCase().replace(' ', '-')}`}
					style="--hover-rot: {((index % 5) - 2) * 2}deg;"
					class="rounded-full border border-transparent px-3 py-2 text-xs font-bold text-black transition-all hover:[transform:scale(1.1)_rotate(var(--hover-rot))] hover:border-black hover:bg-secondary hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
				>
					{item}
				</a>
			{/each}
		</nav>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="rounded-full border border-transparent p-2 text-black transition-all hover:border-black hover:bg-secondary xl:hidden"
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
		class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
		onclick={closeMenu}
		role="presentation"
	></div>

	<nav
		in:fly={{ y: -20, duration: 300 }}
		out:fly={{ y: -20, duration: 300 }}
		class="fixed top-24 right-4 left-4 z-50 max-h-[80vh] overflow-y-auto rounded-2xl border-2 border-black bg-white p-4 shadow-pop xl:hidden"
	>
		<div class="flex flex-col gap-2">
			{#each navItems as item, index}
				<a
					href={`#${item.toLowerCase().replace(' ', '-')}`}
					onclick={closeMenu}
					in:fly={{ x: -20, duration: 300, delay: index * 50 }}
					class="rounded-xl border-2 border-transparent p-3 text-lg font-bold text-black transition-all hover:border-black hover:bg-primary hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
				>
					{item}
				</a>
			{/each}
		</div>
	</nav>
{/if}
