<script lang="ts">
	import { onMount } from 'svelte';

	const words = [
		'ENGINEER',
		'CREATOR',
		'BUILDER',
		'STUDENT',
		'EXPLORER',
		'DREAMER',
		'CODER',
		'MAKER'
	];

	let current = $state(words[0]);
	let phase = $state<'loading' | 'resolved' | 'opening' | 'done'>('loading');
	let show = $state(true);

	onMount(() => {
		if (sessionStorage.getItem('intro-played') === '1') {
			show = false;
			return;
		}

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			show = false;
			sessionStorage.setItem('intro-played', '1');
			return;
		}

		document.body.style.overflow = 'hidden';

		let wordRaf = 0;
		let lastSwap = 0;
		const timeouts: ReturnType<typeof setTimeout>[] = [];

		const tickWord = (now: number) => {
			if (phase !== 'loading') return;
			if (now - lastSwap > 85) {
				let next = current;
				while (next === current) {
					next = words[Math.floor(Math.random() * words.length)];
				}
				current = next;
				lastSwap = now;
			}
			wordRaf = requestAnimationFrame(tickWord);
		};
		wordRaf = requestAnimationFrame(tickWord);

		timeouts.push(
			setTimeout(() => {
				cancelAnimationFrame(wordRaf);
				current = 'TAIYO YAMADA';
				phase = 'resolved';
			}, 1700)
		);
		timeouts.push(
			setTimeout(() => {
				phase = 'opening';
			}, 2350)
		);
		timeouts.push(
			setTimeout(() => {
				phase = 'done';
				show = false;
				document.body.style.overflow = '';
				sessionStorage.setItem('intro-played', '1');
			}, 3300)
		);

		return () => {
			cancelAnimationFrame(wordRaf);
			timeouts.forEach(clearTimeout);
			document.body.style.overflow = '';
		};
	});
</script>

{#if show}
	<div class="intro-root fixed inset-0 z-[100]" aria-hidden="true">
		<!-- Curtains (split open at end) -->
		<div
			class="curtain curtain-top absolute inset-x-0 top-0 bg-black"
			class:open={phase === 'opening' || phase === 'done'}
		></div>
		<div
			class="curtain curtain-bottom absolute inset-x-0 bottom-0 bg-black"
			class:open={phase === 'opening' || phase === 'done'}
		></div>

		<!-- Content: centered morphing word only -->
		<div
			class="content pointer-events-none absolute inset-0 z-[1] flex items-center justify-center text-white"
			class:fade-out={phase === 'opening' || phase === 'done'}
		>
			<span
				class="word font-medium tracking-[0.18em] uppercase"
				class:resolved={phase === 'resolved' || phase === 'opening' || phase === 'done'}
				style="font-size: clamp(1.5rem, 5vw, 3.5rem);"
			>
				{current}
			</span>
		</div>
	</div>
{/if}

<style>
	.curtain {
		height: 50.5%;
		transform: translateY(0);
		transition: transform 950ms cubic-bezier(0.76, 0, 0.24, 1);
		will-change: transform;
	}
	.curtain-top.open {
		transform: translateY(-100%);
	}
	.curtain-bottom.open {
		transform: translateY(100%);
	}

	.content {
		transition: opacity 380ms ease;
	}
	.content.fade-out {
		opacity: 0;
	}

	.word {
		display: inline-block;
	}
	.word.resolved {
		animation: settle 520ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
	@keyframes settle {
		0% {
			letter-spacing: 0.45em;
			opacity: 0.55;
			filter: blur(2px);
		}
		100% {
			letter-spacing: 0.18em;
			opacity: 1;
			filter: blur(0);
		}
	}
</style>
