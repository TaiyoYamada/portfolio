<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { Github, Mail, ArrowDown } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { draggable } from '$lib/actions/draggable';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	// For complex spring entries:
	function springScale(node: HTMLElement, { delay = 0 }: { delay?: number }) {
		return {
			delay,
			duration: 800,
			css: (t: number) => {
				const eased = Math.sin((t * Math.PI) / 2);
				// A slight overshoot spring approximation
				const scaleVal = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; 
				// For real spring we just use builtin or simplier css easing. Svelte's easing 'elasticOut' or similar is good.
				// But we'll just use simple scale here.
				return `transform: scale(${eased}) rotate(${-10 + 8 * eased}deg); opacity: ${eased};`;
			}
		};
	}
	
	import { elasticOut } from 'svelte/easing';
	
	function customIntro(node: HTMLElement, { delay = 0 }) {
		return {
			delay,
			duration: 1000,
			easing: elasticOut,
			css: (t: number) => {
				return `transform: scale(${t}) rotate(${-10 + 8 * t}deg); opacity: ${Math.min(t * 2, 1)}`;
			}
		};
	}
</script>

<div class="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center cursor-default" id="about-me">
	<!-- Draggable Shapes (Background Playground) -->
	<!-- We use CSS animations for the idle float, but `draggable` action takes over the transform when dragged -->
	<div class="absolute top-24 left-4 md:top-20 md:left-20 z-10 w-container">
		<div
			use:draggable
			class="float-1 w-16 h-16 md:w-32 md:h-32 bg-secondary rounded-full border-4 border-black shadow-pop"
		></div>
	</div>

	<div class="absolute bottom-24 right-4 md:bottom-40 md:right-20 z-10 w-container">
		<div
			use:draggable
			class="float-2 w-24 h-24 md:w-40 md:h-40 bg-primary border-4 border-black shadow-pop"
		></div>
	</div>

	<div class="absolute top-32 right-8 md:top-40 md:right-32 z-10 w-container">
		<div
			use:draggable
			class="float-3 w-12 h-12 md:w-20 md:h-20 bg-accent border-4 border-black shadow-pop"
		></div>
	</div>

	<!-- Main Content -->
	<div class="relative z-20 text-center flex flex-col items-center">
		{#if mounted}
			<div class="mb-8" in:customIntro={{ delay: 100 }}>
				<span class="text-2xl md:text-4xl font-black text-black bg-white px-6 py-2 border-2 border-black shadow-pop inline-block select-none">
					HELLO! I AM
				</span>
			</div>
		{/if}

		<div class="relative group cursor-default">
			<h1 class="text-6xl md:text-[10rem] leading-none font-black text-transparent text-outline tracking-tighter hover:text-primary transition-colors duration-300">
				TAIYO
			</h1>
			<h1 class="text-6xl md:text-[10rem] leading-none font-black text-black tracking-tighter -mt-2 md:-mt-8 group-hover:translate-x-4 transition-transform duration-300 relative z-10">
				YAMADA
			</h1>

			<!-- Decorative floating elements near text -->
			<div class="absolute -right-8 -top-8 w-12 h-12 bg-success rounded-full border-2 border-black shadow-pop hidden md:block float-dot z-20"></div>
		</div>

		{#if mounted}
			<p
				in:fly={{ y: 20, duration: 600, delay: 500 }}
				class="mt-8 text-lg md:text-2xl font-bold text-gray-700 max-w-2xl px-4"
			>
				Enjoying both <span class="text-accent underline decoration-4 decoration-secondary underline-offset-4">thinking</span> and <span class="text-primary underline decoration-4 decoration-secondary underline-offset-4">building</span>, I create products you can trust.
			</p>

			<div class="flex gap-4 mt-10">
				<a
					in:fly={{ y: 20, duration: 400, delay: 800 }}
					href="https://github.com/TaiyoYamada"
					class="p-4 bg-white border-2 border-black shadow-pop rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-pop-bold transition-all duration-200"
				><Github class="w-6 h-6" /></a>
				<a
					in:fly={{ y: 20, duration: 400, delay: 850 }}
					href="https://qiita.com/TaiyoYamada"
					class="p-4 bg-white border-2 border-black shadow-pop rounded-xl hover:bg-success hover:text-white hover:-translate-y-1 hover:shadow-pop-bold transition-all duration-200"
				><QiitaIcon class="w-6 h-6" /></a>
				<a
					in:fly={{ y: 20, duration: 400, delay: 900 }}
					href="https://x.com/taiyo_sunsun05"
					class="p-4 bg-white border-2 border-black shadow-pop rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-pop-bold transition-all duration-200"
				><XIcon class="w-6 h-6" /></a>
				<a
					in:fly={{ y: 20, duration: 400, delay: 950 }}
					href="mailto:t-yamada@ilab.pu-kumamoto.ac.jp"
					class="p-4 bg-white border-2 border-black shadow-pop rounded-xl hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-pop-bold transition-all duration-200"
				><Mail class="w-6 h-6" /></a>
			</div>
		{/if}
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-10 z-20 float-arrow">
		<ArrowDown class="w-8 h-8 text-black border-2 border-black rounded-full p-1 bg-white shadow-pop" />
	</div>
</div>

<style>
	/* Isolate drag and animation. We animate the wrapper (.w-container), and action moves the child. */
	.w-container {
		transform: translateZ(0); /* Hardware accel */
	}

	.w-container > div {
		cursor: grab;
	}
	.w-container > div:active {
		cursor: grabbing;
	}

	.float-1 {
		animation: float1 5s ease-in-out infinite;
	}
	@keyframes float1 {
		0%, 100% { transform: translateY(0) translateX(0) rotate(0); }
		50% { transform: translateY(-30px) translateX(20px) rotate(10deg); }
	}

	.float-2 {
		animation: float2 7s ease-in-out infinite;
		animation-delay: 1s;
		transform: rotate(12deg);
	}
	@keyframes float2 {
		0%, 100% { transform: translateY(0) translateX(0) rotate(12deg); }
		50% { transform: translateY(40px) translateX(-20px) rotate(24deg); }
	}

	.float-3 {
		animation: float3 6s ease-in-out infinite;
		animation-delay: 2s;
		transform: rotate(45deg);
	}
	@keyframes float3 {
		0%, 100% { transform: translateY(0) translateX(0) rotate(45deg); }
		50% { transform: translateY(-20px) translateX(-30px) rotate(90deg); }
	}

	.float-dot {
		animation: floatDot 2s ease-in-out infinite;
	}
	@keyframes floatDot {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}

	.float-arrow {
		animation: floatArrow 1.5s infinite;
	}
	@keyframes floatArrow {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(10px); }
	}
</style>
