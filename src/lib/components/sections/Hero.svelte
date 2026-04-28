<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ArrowUpRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	let contentEl: HTMLDivElement | undefined = $state();

	onMount(() => {
		mounted = true;

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let scrollY = 0;
		let scrollTargetY = 0;
		const onScroll = () => {
			scrollTargetY = window.scrollY;
		};
		if (!reduce) window.addEventListener('scroll', onScroll, { passive: true });

		let raf = 0;
		const tick = () => {
			scrollY += (scrollTargetY - scrollY) * 0.15;
			if (contentEl) {
				const vh = window.innerHeight || 1;
				const p = Math.min(Math.max(scrollY / vh, 0), 1);
				contentEl.style.transform = `translate3d(0, ${-p * 80}px, 0) scale(${1 - p * 0.06})`;
				contentEl.style.opacity = String(1 - p * 0.9);
			}
			raf = requestAnimationFrame(tick);
		};
		if (!reduce) tick();

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<section class="relative h-screen w-full overflow-hidden bg-white">
	<!-- Floating gradient orbs (monochrome layered) -->
	<div aria-hidden="true" class="orb orb-pink absolute"></div>
	<div aria-hidden="true" class="orb orb-rainbow absolute"></div>
	<div aria-hidden="true" class="orb orb-red absolute"></div>
	<div aria-hidden="true" class="orb orb-soft absolute"></div>

	<!-- About badge (right) -->
	{#if mounted}
		<a
			href="/about"
			in:fly={{ y: 20, duration: 700, delay: 800 }}
			class="badge group absolute top-[42%] right-6 z-20 flex h-28 w-28 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white md:top-[46%] md:right-[8%] md:h-44 md:w-44 lg:h-52 lg:w-52"
		>
			<div class="flex flex-col items-center text-center">
				<span class="text-[10px] font-medium tracking-[0.22em] md:text-xs">ABOUT ME</span>
				<span class="mt-0.5 text-[9px] tracking-[0.15em] opacity-70 md:text-[10px]">自己紹介</span>
				<ArrowUpRight
					class="mt-1.5 h-3.5 w-3.5 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4"
				/>
			</div>
		</a>
	{/if}

	<!-- Content -->
	<div
		bind:this={contentEl}
		class="relative z-10 flex h-full flex-col px-6 pt-24 pb-12 will-change-transform md:px-12 md:pt-28 md:pb-16 lg:px-20"
		style="transform-origin: 0% 50%;"
	>
		{#if mounted}
			<!-- Top label -->
			<div in:fly={{ y: 20, duration: 600, delay: 200 }} class="mb-3">
				<span class="text-sm font-medium tracking-[0.2em] text-neutral-500 md:text-base">
					TAIYO YAMADA
				</span>
			</div>

			<!-- Massive headline -->
			<h1
				in:fly={{ y: 30, duration: 800, delay: 350 }}
				class="leading-[0.92] font-medium tracking-[-0.03em] text-black"
				style="font-size: clamp(3rem, 11vw, 10rem);"
			>
				WRITING<br />
				NATURE<br />
				IN CODE.
			</h1>

			<!-- Subtitle stack -->
			<div
				in:fly={{ y: 20, duration: 600, delay: 550 }}
				class="mt-5 flex flex-col text-xs font-medium tracking-[0.2em] text-black/70 md:mt-8 md:ml-4 md:text-sm"
			>
				<span>AI</span>
				<span>QUANTUM</span>
			</div>
		{/if}
	</div>
</section>

<style>
	.orb {
		border-radius: 50%;
		pointer-events: none;
		will-change: transform;
	}

	/* Large smoky orb top-right: deepest tone, atmospheric anchor */
	.orb-pink {
		top: -14%;
		right: -8%;
		width: 62vw;
		height: 62vw;
		max-width: 740px;
		max-height: 740px;
		background: radial-gradient(
			circle at 35% 30%,
			rgba(20, 20, 20, 0.55) 0%,
			rgba(40, 40, 40, 0.32) 28%,
			rgba(90, 90, 90, 0.16) 55%,
			rgba(140, 140, 140, 0.06) 78%,
			transparent 95%
		);
		filter: blur(55px);
		animation: float 14s ease-in-out infinite;
	}

	/* Conic tonal swirl bottom-left: movement, mid-greys */
	.orb-rainbow {
		bottom: -20%;
		left: -12%;
		width: 56vw;
		height: 56vw;
		max-width: 660px;
		max-height: 660px;
		background: conic-gradient(
			from 200deg,
			rgba(30, 30, 30, 0.55),
			rgba(170, 170, 170, 0.18),
			rgba(60, 60, 60, 0.45),
			rgba(200, 200, 200, 0.12),
			rgba(40, 40, 40, 0.5),
			rgba(140, 140, 140, 0.22),
			rgba(30, 30, 30, 0.55)
		);
		filter: blur(75px);
		opacity: 0.7;
		animation: float 18s ease-in-out infinite reverse;
		animation-delay: -4s;
	}

	/* Small dense ink drop: focal accent */
	.orb-red {
		top: 40%;
		right: 30%;
		width: 12vw;
		height: 12vw;
		max-width: 180px;
		max-height: 180px;
		background: radial-gradient(
			circle at 40% 40%,
			rgba(30, 30, 30, 0.42) 0%,
			rgba(70, 70, 70, 0.2) 55%,
			transparent 100%
		);
		filter: blur(28px);
		opacity: 0.6;
		animation: float 10s ease-in-out infinite;
		animation-delay: -6s;
	}

	/* Pale highlight: lifts the upper-mid space */
	.orb-soft {
		top: 12%;
		left: 36%;
		width: 11vw;
		height: 11vw;
		max-width: 160px;
		max-height: 160px;
		background: radial-gradient(
			circle,
			rgba(120, 120, 120, 0.32) 0%,
			rgba(180, 180, 180, 0.16) 60%,
			transparent 100%
		);
		filter: blur(35px);
		animation: float 16s ease-in-out infinite;
		animation-delay: -9s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(25px, -20px) scale(1.05);
		}
		66% {
			transform: translate(-15px, 15px) scale(0.95);
		}
	}

	.badge {
		box-shadow: 0 24px 55px -18px rgba(0, 0, 0, 0.55);
	}

	@media (prefers-reduced-motion: reduce) {
		.orb {
			animation: none;
		}
	}
</style>
