<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Github, Mail, ArrowDown } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { onMount } from 'svelte';

	const images = ['/hero-night.jpg', '/hero-night-2.jpg', '/hero-night-3.jpg'];
	const HOLD_MS = 6500;

	let mounted = $state(false);
	let activeIndex = $state(0);
	let canvas: HTMLCanvasElement | undefined = $state();

	onMount(() => {
		mounted = true;
		const slideId = setInterval(() => {
			activeIndex = (activeIndex + 1) % images.length;
		}, HOLD_MS);

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!canvas || reduce) {
			return () => clearInterval(slideId);
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) return () => clearInterval(slideId);

		let w = 0;
		let h = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			if (!canvas) return;
			w = canvas.offsetWidth;
			h = canvas.offsetHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener('resize', resize);

		// ---- Quantum circuit ----
		type GateType = 'box' | 'ring' | 'control' | 'target' | 'phase';
		interface Gate {
			wire: number;
			x: number; // 0..1 along the circuit
			type: GateType;
			pair?: number; // other wire for 2-qubit gates
		}

		const NUM_WIRES = 4;
		const gates: Gate[] = [
			{ wire: 0, x: 0.12, type: 'box' },
			{ wire: 2, x: 0.12, type: 'box' },
			{ wire: 1, x: 0.22, type: 'ring' },
			{ wire: 3, x: 0.22, type: 'ring' },
			{ wire: 0, x: 0.34, type: 'control', pair: 2 },
			{ wire: 2, x: 0.34, type: 'target' },
			{ wire: 1, x: 0.46, type: 'phase' },
			{ wire: 3, x: 0.46, type: 'box' },
			{ wire: 0, x: 0.56, type: 'ring' },
			{ wire: 2, x: 0.56, type: 'control', pair: 3 },
			{ wire: 3, x: 0.56, type: 'target' },
			{ wire: 1, x: 0.68, type: 'box' },
			{ wire: 0, x: 0.74, type: 'phase' },
			{ wire: 2, x: 0.8, type: 'ring' },
			{ wire: 3, x: 0.8, type: 'box' }
		];

		const particles: { wire: number; x: number; speed: number }[] = [];
		for (let w0 = 0; w0 < NUM_WIRES; w0++) {
			for (let i = 0; i < 2; i++) {
				particles.push({
					wire: w0,
					x: Math.random(),
					speed: 0.0016 + Math.random() * 0.0009
				});
			}
		}

		let t = 0;
		let raf = 0;

		const tick = () => {
			ctx.clearRect(0, 0, w, h);

			const topMargin = h * 0.22;
			const botMargin = h * 0.22;
			const leftMargin = w * 0.08;
			const rightMargin = w * 0.1;
			const wireSpan = (h - topMargin - botMargin) / (NUM_WIRES - 1);
			const wireY = (i: number) => topMargin + i * wireSpan;
			const wireX = (p: number) => leftMargin + p * (w - leftMargin - rightMargin);

			// Wires
			ctx.strokeStyle = 'rgba(255,255,255,0.22)';
			ctx.lineWidth = 1;
			for (let i = 0; i < NUM_WIRES; i++) {
				const y = wireY(i);
				ctx.beginPath();
				ctx.moveTo(wireX(0), y);
				ctx.lineTo(wireX(1), y);
				ctx.stroke();
			}

			// 2-qubit connectors
			for (const g of gates) {
				if (g.type === 'control' && g.pair !== undefined) {
					const x = wireX(g.x);
					const y1 = wireY(g.wire);
					const y2 = wireY(g.pair);
					ctx.strokeStyle = 'rgba(255,255,255,0.5)';
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(x, y1);
					ctx.lineTo(x, y2);
					ctx.stroke();
				}
			}

			// Gates
			for (const g of gates) {
				const x = wireX(g.x);
				const y = wireY(g.wire);
				const pulse = 0.75 + Math.sin(t * 0.02 + g.wire * 1.1 + g.x * 9) * 0.2;

				if (g.type === 'box') {
					// Filled rounded square
					const s = 11;
					ctx.fillStyle = `rgba(10,10,10,0.9)`;
					ctx.fillRect(x - s, y - s, s * 2, s * 2);
					ctx.strokeStyle = `rgba(255,255,255,${0.95 * pulse})`;
					ctx.lineWidth = 1.2;
					ctx.strokeRect(x - s, y - s, s * 2, s * 2);
				} else if (g.type === 'ring') {
					ctx.fillStyle = `rgba(10,10,10,0.85)`;
					ctx.beginPath();
					ctx.arc(x, y, 10, 0, Math.PI * 2);
					ctx.fill();
					ctx.strokeStyle = `rgba(255,255,255,${0.9 * pulse})`;
					ctx.lineWidth = 1.2;
					ctx.beginPath();
					ctx.arc(x, y, 10, 0, Math.PI * 2);
					ctx.stroke();
				} else if (g.type === 'control') {
					ctx.fillStyle = `rgba(255,255,255,${0.95 * pulse})`;
					ctx.beginPath();
					ctx.arc(x, y, 4.5, 0, Math.PI * 2);
					ctx.fill();
				} else if (g.type === 'target') {
					ctx.fillStyle = 'rgba(10,10,10,0.9)';
					ctx.beginPath();
					ctx.arc(x, y, 10, 0, Math.PI * 2);
					ctx.fill();
					ctx.strokeStyle = `rgba(255,255,255,${0.95 * pulse})`;
					ctx.lineWidth = 1.2;
					ctx.beginPath();
					ctx.arc(x, y, 10, 0, Math.PI * 2);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(x - 7, y);
					ctx.lineTo(x + 7, y);
					ctx.moveTo(x, y - 7);
					ctx.lineTo(x, y + 7);
					ctx.stroke();
				} else if (g.type === 'phase') {
					// Small filled diamond
					const s = 7;
					ctx.fillStyle = `rgba(255,255,255,${0.9 * pulse})`;
					ctx.beginPath();
					ctx.moveTo(x, y - s);
					ctx.lineTo(x + s, y);
					ctx.lineTo(x, y + s);
					ctx.lineTo(x - s, y);
					ctx.closePath();
					ctx.fill();
				}
			}

			// Particles flowing along wires
			for (const p of particles) {
				p.x += p.speed;
				if (p.x > 1) p.x = 0;
				const x = wireX(p.x);
				const y = wireY(p.wire);

				const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
				glow.addColorStop(0, 'rgba(255,255,255,0.6)');
				glow.addColorStop(1, 'rgba(255,255,255,0)');
				ctx.fillStyle = glow;
				ctx.beginPath();
				ctx.arc(x, y, 14, 0, Math.PI * 2);
				ctx.fill();

				ctx.fillStyle = 'rgba(255,255,255,0.98)';
				ctx.beginPath();
				ctx.arc(x, y, 2.2, 0, Math.PI * 2);
				ctx.fill();
			}

			t += 1;
			raf = requestAnimationFrame(tick);
		};
		tick();

		return () => {
			clearInterval(slideId);
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<section class="relative h-screen w-full overflow-hidden bg-black">
	<!-- Background slideshow -->
	{#each images as src, i (src)}
		<img
			{src}
			alt=""
			aria-hidden="true"
			class="kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out"
			style:opacity={i === activeIndex ? 1 : 0}
			style:animation-delay={`${i * -8}s`}
		/>
	{/each}

	<!-- Gradient overlays for legibility -->
	<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>

	<!-- Bloch sphere (qubit state) -->
	<canvas
		bind:this={canvas}
		aria-hidden="true"
		class="pointer-events-none absolute top-1/2 right-0 h-full w-full -translate-y-1/2 opacity-60 md:w-[58%] md:opacity-95"
	></canvas>

	<!-- Content -->
	<div class="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28 lg:px-24">
		<div class="max-w-3xl">
			{#if mounted}
				<div in:fly={{ y: 20, duration: 700, delay: 200 }} class="mb-6 flex items-center gap-3">
					<span class="h-px w-8 bg-white/60"></span>
					<span
						class="text-[10px] font-medium tracking-[0.28em] text-white/80 uppercase md:text-[11px]"
					>
						Taiyo Yamada
					</span>
				</div>

				<h1
					in:fly={{ y: 40, duration: 900, delay: 400 }}
					class="text-5xl leading-[1.05] font-medium tracking-[-0.02em] text-white md:text-7xl lg:text-8xl"
				>
					Hi, I'm Taiyo.
				</h1>

				<p
					in:fly={{ y: 20, duration: 700, delay: 800 }}
					class="mt-6 max-w-md text-sm leading-relaxed font-light text-white/75 md:text-base"
				>
					面白そうの方に、毎回走る。
				</p>

				<div in:fly={{ y: 20, duration: 600, delay: 1100 }} class="mt-10 flex gap-3">
					<a
						href="https://github.com/TaiyoYamada"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<Github class="h-5 w-5" />
					</a>
					<a
						href="https://qiita.com/TaiyoYamada"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Qiita"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<QiitaIcon class="h-5 w-5" />
					</a>
					<a
						href="https://x.com/taiyo_sunsun05"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<XIcon class="h-5 w-5" />
					</a>
					<a
						href="mailto:t-yamada@ilab.pu-kumamoto.ac.jp"
						aria-label="Email"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<Mail class="h-5 w-5" />
					</a>
				</div>
			{/if}
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="float-arrow absolute bottom-6 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
		<ArrowDown class="h-6 w-6 text-white/70" strokeWidth={2} />
	</div>
</section>

<style>
	.kenburns {
		animation: kenburns 24s ease-in-out infinite alternate;
		transform-origin: 50% 40%;
	}
	@keyframes kenburns {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.08);
		}
	}

	.float-arrow {
		animation: floatArrow 2s ease-in-out infinite;
	}
	@keyframes floatArrow {
		0%,
		100% {
			transform: translate(-50%, 0);
		}
		50% {
			transform: translate(-50%, 8px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.kenburns,
		.float-arrow {
			animation: none;
		}
	}
</style>
