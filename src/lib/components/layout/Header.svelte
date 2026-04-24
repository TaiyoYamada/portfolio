<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const navItems: { label: string; href: string }[] = [
		{ label: 'News', href: '/news' },
		{ label: 'About', href: '/about' },
		{ label: 'Articles', href: '/articles' },
		{ label: 'Contact', href: '/contact' }
	];

	let isOpen = $state(false);
	let scrolledPastHero = $state(false);

	onMount(() => {
		const check = () => {
			scrolledPastHero = window.scrollY > window.innerHeight - 80;
		};
		check();
		window.addEventListener('scroll', check, { passive: true });
		window.addEventListener('resize', check);
		return () => {
			window.removeEventListener('scroll', check);
			window.removeEventListener('resize', check);
		};
	});

	function toggleMenu() {
		isOpen = !isOpen;
	}
	function closeMenu() {
		isOpen = false;
	}

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path === href || path.startsWith(href + '/');
	}

	const onDark = $derived(page.url.pathname === '/' && !scrolledPastHero);
</script>

<header class="fixed inset-x-0 top-0 z-50">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
		<!-- Logo monogram -->
		<a
			href="/"
			aria-label="Home"
			class={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-semibold tracking-[0.05em] transition-all hover:-translate-y-0.5 md:h-10 md:w-10 md:text-xs ${
				onDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'
			}`}
		>
			TY
		</a>

		<!-- Right: nav + mobile button -->
		<div class="flex items-center">
			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-10 lg:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class={`relative text-[15px] font-medium tracking-tight transition-colors md:text-base ${
							isActive(item.href)
								? onDark
									? 'text-white'
									: 'text-black'
								: onDark
									? 'text-white/75 hover:text-white'
									: 'text-neutral-600 hover:text-black'
						}`}
					>
						{item.label}
						{#if isActive(item.href)}
							<span
								class={`absolute -bottom-1.5 left-0 h-px w-full ${onDark ? 'bg-white' : 'bg-black'}`}
							></span>
						{/if}
					</a>
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<button
				onclick={toggleMenu}
				class={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
					onDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'
				}`}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
			>
				{#if isOpen}
					<X size={22} strokeWidth={2} />
				{:else}
					<Menu size={22} strokeWidth={2} />
				{/if}
			</button>
		</div>
	</div>
</header>

<!-- Mobile Navigation Overlay -->
{#if isOpen}
	<button
		type="button"
		tabindex="-1"
		aria-label="Close menu"
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
		class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
		onclick={closeMenu}
	></button>

	<nav
		in:fly={{ y: -8, duration: 200 }}
		out:fly={{ y: -8, duration: 150 }}
		class="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg lg:hidden"
	>
		<div class="flex flex-col p-2">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={closeMenu}
					class={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href) ? 'bg-black/5 text-black' : 'text-neutral-600 hover:bg-black/5 hover:text-black'}`}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</nav>
{/if}
