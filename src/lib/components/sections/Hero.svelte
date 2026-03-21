<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Github, Mail, ArrowDown } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { draggable } from '$lib/actions/draggable';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

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

<div
	class="relative flex h-screen w-full cursor-default flex-col items-center justify-center overflow-hidden bg-background"
	id="about-me"
>
	<!-- Draggable Shapes (Background Playground) -->
	<!-- We use CSS animations for the idle float, but `draggable` action takes over the transform when dragged -->
	<div class="w-container absolute top-24 left-4 z-10 md:top-20 md:left-20">
		<div
			use:draggable
			class="float-1 h-16 w-16 rounded-full border-4 border-black bg-secondary shadow-pop md:h-32 md:w-32"
		></div>
	</div>

	<div class="w-container absolute right-4 bottom-24 z-10 md:right-20 md:bottom-40">
		<div
			use:draggable
			class="float-2 h-24 w-24 border-4 border-black bg-primary shadow-pop md:h-40 md:w-40"
		></div>
	</div>

	<div class="w-container absolute top-32 right-8 z-10 md:top-40 md:right-32">
		<div
			use:draggable
			class="float-3 h-12 w-12 border-4 border-black bg-accent shadow-pop md:h-20 md:w-20"
		></div>
	</div>

	<!-- Main Content -->
	<div class="relative z-20 flex flex-col items-center text-center">
		{#if mounted}
			<div class="mb-8" in:customIntro={{ delay: 100 }}>
				<span
					class="inline-block border-2 border-black bg-white px-6 py-2 text-2xl font-black text-black shadow-pop select-none md:text-4xl"
				>
					HELLO! I AM
				</span>
			</div>
		{/if}

		<div class="group relative cursor-default">
			<h1
				class="text-outline text-6xl leading-none font-black tracking-tighter text-transparent transition-colors duration-300 hover:text-primary md:text-[10rem]"
			>
				TAIYO
			</h1>
			<h1
				class="relative z-10 -mt-2 text-6xl leading-none font-black tracking-tighter text-black transition-transform duration-300 group-hover:translate-x-4 md:-mt-8 md:text-[10rem]"
			>
				YAMADA
			</h1>

			<!-- Decorative floating elements near text -->
			<div
				class="float-dot absolute -top-8 -right-8 z-20 hidden h-12 w-12 rounded-full border-2 border-black bg-success shadow-pop md:block"
			></div>
		</div>

		{#if mounted}
			<p
				in:fly={{ y: 20, duration: 600, delay: 500 }}
				class="mt-8 max-w-2xl px-4 text-lg font-bold text-gray-700 md:text-2xl"
			>
				Enjoying both <span
					class="text-accent underline decoration-secondary decoration-4 underline-offset-4"
					>thinking</span
				>
				and
				<span class="text-primary underline decoration-secondary decoration-4 underline-offset-4"
					>building</span
				>, I create products you can trust.
			</p>

			<div class="mt-10 flex gap-4">
				<a
					in:fly={{ y: 20, duration: 400, delay: 800 }}
					href="https://github.com/TaiyoYamada"
					class="rounded-xl border-2 border-black bg-white p-4 shadow-pop transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-pop-bold"
					><Github class="h-6 w-6" /></a
				>
				<a
					in:fly={{ y: 20, duration: 400, delay: 850 }}
					href="https://qiita.com/TaiyoYamada"
					class="rounded-xl border-2 border-black bg-white p-4 shadow-pop transition-all duration-200 hover:-translate-y-1 hover:bg-success hover:text-white hover:shadow-pop-bold"
					><QiitaIcon class="h-6 w-6" /></a
				>
				<a
					in:fly={{ y: 20, duration: 400, delay: 900 }}
					href="https://x.com/taiyo_sunsun05"
					class="rounded-xl border-2 border-black bg-white p-4 shadow-pop transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-pop-bold"
					><XIcon class="h-6 w-6" /></a
				>
				<a
					in:fly={{ y: 20, duration: 400, delay: 950 }}
					href="mailto:t-yamada@ilab.pu-kumamoto.ac.jp"
					class="rounded-xl border-2 border-black bg-white p-4 shadow-pop transition-all duration-200 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-pop-bold"
					><Mail class="h-6 w-6" /></a
				>
			</div>
		{/if}
	</div>

	<!-- Scroll Indicator -->
	<div class="float-arrow absolute bottom-10 z-20">
		<ArrowDown
			class="h-8 w-8 rounded-full border-2 border-black bg-white p-1 text-black shadow-pop"
		/>
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
		0%,
		100% {
			transform: translateY(0) translateX(0) rotate(0);
		}
		50% {
			transform: translateY(-30px) translateX(20px) rotate(10deg);
		}
	}

	.float-2 {
		animation: float2 7s ease-in-out infinite;
		animation-delay: 1s;
		transform: rotate(12deg);
	}
	@keyframes float2 {
		0%,
		100% {
			transform: translateY(0) translateX(0) rotate(12deg);
		}
		50% {
			transform: translateY(40px) translateX(-20px) rotate(24deg);
		}
	}

	.float-3 {
		animation: float3 6s ease-in-out infinite;
		animation-delay: 2s;
		transform: rotate(45deg);
	}
	@keyframes float3 {
		0%,
		100% {
			transform: translateY(0) translateX(0) rotate(45deg);
		}
		50% {
			transform: translateY(-20px) translateX(-30px) rotate(90deg);
		}
	}

	.float-dot {
		animation: floatDot 2s ease-in-out infinite;
	}
	@keyframes floatDot {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.float-arrow {
		animation: floatArrow 1.5s infinite;
	}
	@keyframes floatArrow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}
</style>
