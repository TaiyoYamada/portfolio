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
	<!-- Floating gradient orbs -->
	<div aria-hidden="true" class="orb orb-pink absolute"></div>
	<div aria-hidden="true" class="orb orb-rainbow absolute"></div>
	<div aria-hidden="true" class="orb orb-red absolute"></div>
	<div aria-hidden="true" class="orb orb-soft absolute"></div>

	<!-- About badge (right) -->
	{#if mounted}
		<a
			href="/about"
			in:fly={{ y: 20, duration: 700, delay: 800 }}
			class="badge group absolute top-[42%] right-6 z-20 flex h-28 w-28 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white md:top-[46%] md:right-[8%] md:h-44 md:w-44 lg:h-52 lg:w-52"
		>
			<div class="flex flex-col items-center text-center">
				<span class="text-[10px] font-medium tracking-[0.22em] md:text-xs">ABOUT ME</span>
				<span class="mt-0.5 text-[9px] tracking-[0.15em] opacity-80 md:text-[10px]">自己紹介</span>
				<ArrowUpRight
					class="mt-1.5 h-3.5 w-3.5 opacity-80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-4 md:w-4"
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
				<span class="text-sm font-medium tracking-[0.2em] text-accent md:text-base">
					TAIYO YAMADA
				</span>
			</div>

			<!-- Massive headline -->
			<h1
				in:fly={{ y: 30, duration: 800, delay: 350 }}
				class="font-medium leading-[0.92] tracking-[-0.03em] text-black"
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

	.orb-pink {
		top: -12%;
		right: -6%;
		width: 60vw;
		height: 60vw;
		max-width: 720px;
		max-height: 720px;
		background: radial-gradient(
			circle at 35% 30%,
			#ffd1d9 0%,
			#ff7a8e 30%,
			#ff2d5f 62%,
			transparent 92%
		);
		filter: blur(50px);
		animation: float 14s ease-in-out infinite;
	}

	.orb-rainbow {
		bottom: -18%;
		left: -10%;
		width: 55vw;
		height: 55vw;
		max-width: 650px;
		max-height: 650px;
		background: conic-gradient(
			from 200deg,
			#ff6b6b,
			#ffb84d,
			#6bcf63,
			#4dabf7,
			#d96bff,
			#ff6b6b
		);
		filter: blur(70px);
		opacity: 0.85;
		animation: float 18s ease-in-out infinite reverse;
		animation-delay: -4s;
	}

	.orb-red {
		top: 38%;
		right: 30%;
		width: 14vw;
		height: 14vw;
		max-width: 200px;
		max-height: 200px;
		background: radial-gradient(circle at 40% 40%, #ff7a8e 0%, #c9184a 70%, transparent 100%);
		filter: blur(20px);
		opacity: 0.85;
		animation: float 10s ease-in-out infinite;
		animation-delay: -6s;
	}

	.orb-soft {
		top: 10%;
		left: 38%;
		width: 9vw;
		height: 9vw;
		max-width: 130px;
		max-height: 130px;
		background: radial-gradient(circle, #ffd6e0 0%, #ffaec0 70%, transparent 100%);
		filter: blur(30px);
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
		box-shadow: 0 24px 50px -16px rgba(222, 53, 76, 0.5);
	}

	@media (prefers-reduced-motion: reduce) {
		.orb {
			animation: none;
		}
	}
</style>
