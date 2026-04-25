<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Github, Mail } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { onMount } from 'svelte';

	const images = ['/hero-night.jpg', '/hero-night-2.jpg', '/hero-night-3.jpg'];
	const HOLD_MS = 6500;

	const titleChars = "Hi, I'm Taiyo.".split('');

	const marqueeWord = 'Taiyo Yamada';

	let mounted = $state(false);
	let activeIndex = $state(0);
	let canvas: HTMLCanvasElement | undefined = $state();
	let heroEl: HTMLElement | undefined = $state();
	let contentEl: HTMLDivElement | undefined = $state();
	let spotlightEl: HTMLDivElement | undefined = $state();

	onMount(() => {
		mounted = true;

		const slideId = setInterval(() => {
			activeIndex = (activeIndex + 1) % images.length;
		}, HOLD_MS);

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// ---- Mouse spotlight + magnetic buttons ----
		let targetX = 0;
		let targetY = 0;
		let curX = 0;
		let curY = 0;
		let hasMoved = false;
		const onMove = (e: MouseEvent) => {
			if (!heroEl) return;
			const r = heroEl.getBoundingClientRect();
			targetX = e.clientX - r.left;
			targetY = e.clientY - r.top;
			if (!hasMoved) {
				curX = targetX;
				curY = targetY;
				hasMoved = true;
			}
		};

		type MagState = { x: number; y: number; tx: number; ty: number };
		const magnetStates: { el: HTMLElement; s: MagState }[] = [];
		const magnetCleanups: (() => void)[] = [];
		if (heroEl && !reduce) {
			heroEl.addEventListener('mousemove', onMove);
			const magnets = heroEl.querySelectorAll<HTMLElement>('[data-magnet]');
			magnets.forEach((el) => {
				const s: MagState = { x: 0, y: 0, tx: 0, ty: 0 };
				magnetStates.push({ el, s });
				const move = (e: MouseEvent) => {
					const r = el.getBoundingClientRect();
					const cx = r.left + r.width / 2;
					const cy = r.top + r.height / 2;
					s.tx = (e.clientX - cx) * 0.4;
					s.ty = (e.clientY - cy) * 0.4;
				};
				const leave = () => {
					s.tx = 0;
					s.ty = 0;
				};
				el.addEventListener('mousemove', move);
				el.addEventListener('mouseleave', leave);
				magnetCleanups.push(() => {
					el.removeEventListener('mousemove', move);
					el.removeEventListener('mouseleave', leave);
				});
			});
		}

		// ---- Scroll-driven hero exit (parallax + scale + fade) ----
		let scrollY = 0;
		let scrollTargetY = 0;
		const onScroll = () => {
			scrollTargetY = window.scrollY;
		};
		if (!reduce) window.addEventListener('scroll', onScroll, { passive: true });

		let uiRaf = 0;
		const uiTick = () => {
			// spotlight
			if (spotlightEl && hasMoved) {
				curX += (targetX - curX) * 0.12;
				curY += (targetY - curY) * 0.12;
				spotlightEl.style.transform = `translate3d(${curX - 400}px, ${curY - 400}px, 0)`;
				if (spotlightEl.style.opacity !== '1') spotlightEl.style.opacity = '1';
			}
			// magnets
			for (const { el, s } of magnetStates) {
				s.x += (s.tx - s.x) * 0.18;
				s.y += (s.ty - s.y) * 0.18;
				el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
			}
			// scroll-driven exit
			scrollY += (scrollTargetY - scrollY) * 0.15;
			if (contentEl) {
				const vh = window.innerHeight || 1;
				const p = Math.min(Math.max(scrollY / vh, 0), 1);
				contentEl.style.transform = `translate3d(0, ${-p * 80}px, 0) scale(${1 - p * 0.06})`;
				contentEl.style.opacity = String(1 - p * 0.9);
			}
			uiRaf = requestAnimationFrame(uiTick);
		};
		if (!reduce) uiTick();

		// ---- Quantum circuit ----
		let circuitRaf = 0;
		let circuitResize: (() => void) | null = null;
		if (canvas && !reduce) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
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
				circuitResize = resize;
				window.addEventListener('resize', resize);

				type GateType = 'box' | 'ring' | 'control' | 'target' | 'phase';
				interface Gate {
					wire: number;
					x: number;
					type: GateType;
					pair?: number;
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
				const tick = () => {
					ctx.clearRect(0, 0, w, h);

					const topMargin = h * 0.22;
					const botMargin = h * 0.22;
					const leftMargin = w * 0.08;
					const rightMargin = w * 0.1;
					const wireSpan = (h - topMargin - botMargin) / (NUM_WIRES - 1);
					const wireY = (i: number) => topMargin + i * wireSpan;
					const wireX = (p: number) => leftMargin + p * (w - leftMargin - rightMargin);

					ctx.strokeStyle = 'rgba(255,255,255,0.18)';
					ctx.lineWidth = 1;
					for (let i = 0; i < NUM_WIRES; i++) {
						const y = wireY(i);
						ctx.beginPath();
						ctx.moveTo(wireX(0), y);
						ctx.lineTo(wireX(1), y);
						ctx.stroke();
					}

					for (const g of gates) {
						if (g.type === 'control' && g.pair !== undefined) {
							const x = wireX(g.x);
							const y1 = wireY(g.wire);
							const y2 = wireY(g.pair);
							ctx.strokeStyle = 'rgba(255,255,255,0.4)';
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(x, y1);
							ctx.lineTo(x, y2);
							ctx.stroke();
						}
					}

					for (const g of gates) {
						const x = wireX(g.x);
						const y = wireY(g.wire);
						const pulse = 0.75 + Math.sin(t * 0.02 + g.wire * 1.1 + g.x * 9) * 0.2;

						if (g.type === 'box') {
							const s = 11;
							ctx.fillStyle = `rgba(10,10,10,0.9)`;
							ctx.fillRect(x - s, y - s, s * 2, s * 2);
							ctx.strokeStyle = `rgba(255,255,255,${0.85 * pulse})`;
							ctx.lineWidth = 1.2;
							ctx.strokeRect(x - s, y - s, s * 2, s * 2);
						} else if (g.type === 'ring') {
							ctx.fillStyle = `rgba(10,10,10,0.85)`;
							ctx.beginPath();
							ctx.arc(x, y, 10, 0, Math.PI * 2);
							ctx.fill();
							ctx.strokeStyle = `rgba(255,255,255,${0.8 * pulse})`;
							ctx.lineWidth = 1.2;
							ctx.beginPath();
							ctx.arc(x, y, 10, 0, Math.PI * 2);
							ctx.stroke();
						} else if (g.type === 'control') {
							ctx.fillStyle = `rgba(255,255,255,${0.85 * pulse})`;
							ctx.beginPath();
							ctx.arc(x, y, 4.5, 0, Math.PI * 2);
							ctx.fill();
						} else if (g.type === 'target') {
							ctx.fillStyle = 'rgba(10,10,10,0.9)';
							ctx.beginPath();
							ctx.arc(x, y, 10, 0, Math.PI * 2);
							ctx.fill();
							ctx.strokeStyle = `rgba(255,255,255,${0.85 * pulse})`;
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
							const s = 7;
							ctx.fillStyle = `rgba(255,255,255,${0.8 * pulse})`;
							ctx.beginPath();
							ctx.moveTo(x, y - s);
							ctx.lineTo(x + s, y);
							ctx.lineTo(x, y + s);
							ctx.lineTo(x - s, y);
							ctx.closePath();
							ctx.fill();
						}
					}

					for (const p of particles) {
						p.x += p.speed;
						if (p.x > 1) p.x = 0;
						const x = wireX(p.x);
						const y = wireY(p.wire);

						const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
						glow.addColorStop(0, 'rgba(255,255,255,0.55)');
						glow.addColorStop(1, 'rgba(255,255,255,0)');
						ctx.fillStyle = glow;
						ctx.beginPath();
						ctx.arc(x, y, 14, 0, Math.PI * 2);
						ctx.fill();

						ctx.fillStyle = 'rgba(255,255,255,0.95)';
						ctx.beginPath();
						ctx.arc(x, y, 2.2, 0, Math.PI * 2);
						ctx.fill();
					}

					t += 1;
					circuitRaf = requestAnimationFrame(tick);
				};
				tick();
			}
		}

		return () => {
			clearInterval(slideId);
			cancelAnimationFrame(uiRaf);
			cancelAnimationFrame(circuitRaf);
			if (circuitResize) window.removeEventListener('resize', circuitResize);
			heroEl?.removeEventListener('mousemove', onMove);
			window.removeEventListener('scroll', onScroll);
			magnetCleanups.forEach((fn) => fn());
		};
	});
</script>

<section bind:this={heroEl} class="relative h-screen w-full overflow-hidden bg-black">
	<!-- Background slideshow -->
	{#each images as src, i (src)}
		<img
			{src}
			alt=""
			aria-hidden="true"
			class="kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-1800 ease-in-out"
			style:opacity={i === activeIndex ? 1 : 0}
			style:animation-delay={`${i * -8}s`}
		/>
	{/each}

	<!-- Gradient overlays for legibility -->
	<div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/30"></div>
	<div class="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent"></div>

	<!-- Mouse-tracked spotlight -->
	<div
		bind:this={spotlightEl}
		aria-hidden="true"
		class="spotlight pointer-events-none absolute top-0 left-0 z-5 h-200 w-200 rounded-full opacity-0"
		style="transform: translate3d(-9999px, -9999px, 0); transition: opacity 600ms ease;"
	></div>

	<!-- Quantum circuit -->
	<canvas
		bind:this={canvas}
		aria-hidden="true"
		class="pointer-events-none absolute top-1/2 right-0 h-full w-full -translate-y-1/2 opacity-40 md:w-[58%] md:opacity-70"
	></canvas>

	<!-- Massive watermark marquee (bottom bleed) -->
	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 z-6 translate-y-[26%] overflow-hidden"
	>
		<div
			class="marquee-track flex w-max items-center leading-none font-medium tracking-[-0.04em] whitespace-nowrap text-white/[0.07] uppercase"
			style="font-size: clamp(4rem, 11vw, 12rem);"
		>
			<span class="px-10">{marqueeWord}</span>
			<span class="px-10">·</span>
			<span class="px-10">{marqueeWord}</span>
			<span class="px-10">·</span>
			<span class="px-10">{marqueeWord}</span>
			<span class="px-10">·</span>
			<span class="px-10">{marqueeWord}</span>
			<span class="px-10">·</span>
		</div>
	</div>

	<!-- Content -->
	<div
		bind:this={contentEl}
		class="relative z-10 flex h-full flex-col justify-center px-6 pt-24 pb-28 will-change-transform md:justify-end md:px-16 md:pt-0 md:pb-32 lg:px-24"
		style="transform-origin: 0% 50%;"
	>
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
			{/if}

			<h1
				class="mask-h1 text-5xl leading-[1.05] font-medium tracking-[-0.02em] text-white md:text-7xl lg:text-8xl"
				class:in={mounted}
				aria-label="Hi, I'm Taiyo."
			>
				{#each titleChars as ch, i}
					<span class="cm" aria-hidden="true">
						<span class="ch" style="--d: {500 + i * 35}ms">{ch === ' ' ? ' ' : ch}</span>
					</span>
				{/each}
			</h1>

			{#if mounted}
				<p
					in:fly={{ y: 20, duration: 700, delay: 1100 }}
					class="mt-6 max-w-md text-sm leading-relaxed font-light text-white/75 md:text-base"
				>
					面白そうな方に、全力で走る。
				</p>

				<div in:fly={{ y: 20, duration: 600, delay: 1400 }} class="mt-10 flex gap-3">
					<a
						data-magnet
						href="https://github.com/TaiyoYamada"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<Github class="h-5 w-5" />
					</a>
					<a
						data-magnet
						href="https://qiita.com/TaiyoYamada"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Qiita"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<QiitaIcon class="h-5 w-5" />
					</a>
					<a
						data-magnet
						href="https://x.com/taiyo_sunsun05"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<XIcon class="h-5 w-5" />
					</a>
					<a
						data-magnet
						href="mailto:tai09to06y@gmail.com"
						aria-label="Email"
						class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:h-12 md:w-12"
					>
						<Mail class="h-5 w-5" />
					</a>
				</div>
			{/if}
		</div>
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

	/* Mouse spotlight */
	.spotlight {
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.28) 0%,
			rgba(255, 255, 255, 0.1) 35%,
			rgba(255, 255, 255, 0) 70%
		);
		mix-blend-mode: soft-light;
		filter: blur(40px);
		will-change: transform;
	}

	/* H1 character mask reveal */
	.mask-h1 .cm {
		display: inline-block;
		overflow: hidden;
		line-height: 1.05;
		padding-bottom: 0.18em;
		margin-bottom: -0.18em;
	}
	.mask-h1 .ch {
		display: inline-block;
		transform: translateY(110%);
		transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
		transition-delay: var(--d, 0ms);
		will-change: transform;
	}
	.mask-h1.in .ch {
		transform: translateY(0);
	}

	/* Watermark marquee */
	.marquee-track {
		animation: marquee 60s linear infinite;
	}
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.kenburns {
			animation: none;
		}
		.mask-h1 .ch {
			transform: none;
			transition: none;
		}
		.marquee-track {
			animation: none;
		}
	}
</style>
