<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	const researches = [
		{
			title: 'ABCアルゴリズムをオプティマイザとするVQEのノイズ下におけるロバスト性初期評価',
			desc: '量子コンピューティングにおける変分量子固有値法（VQE）の精度向上を目的とした研究。人工蜂コロニー（ABC）アルゴリズムを活用した最適化手法により、ノイズ環境下での初期探索のロバスト性を評価・改善するアプローチを提案。',
			tech: ['Python', 'Qiskit', 'Quantum Computing', 'VQE', 'ABC Algorithm'],
			kind: 'Talk',
			venue: '令和8年 電気学会 全国大会',
			link: 'https://www.iee.jp/blog/taikai2026/'
		}
	];
</script>

<section id="research" class="bg-surface py-14 md:py-20">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-10 md:mb-14">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Academic
			</p>
			<h2 class="text-3xl font-medium tracking-tight text-black md:text-5xl">Research</h2>
		</header>

		<ul class="divide-y divide-black/10 border-y border-black/10">
			{#each researches as item}
				<li class="py-8 md:py-12">
					<span class="font-mono text-[11px] tracking-tight text-neutral-400 uppercase">
						{item.kind}
					</span>

					<h3
						class="mt-4 text-xl leading-tight font-semibold tracking-tight text-black md:text-3xl"
					>
						{item.title}
					</h3>

					<p class="mt-5 max-w-3xl text-sm leading-[1.8] text-neutral-600 md:text-base">
						{item.desc}
					</p>

					<div class="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-neutral-500 md:text-sm">
						{#each item.tech as t, i}
							<span>{t}</span>
							{#if i < item.tech.length - 1}
								<span class="text-neutral-300">·</span>
							{/if}
						{/each}
					</div>

					{#if item.venue}
						<div class="mt-8">
							{#if item.link}
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									class="group inline-flex items-center gap-2 text-sm font-medium text-black"
								>
									<span class="border-b border-black pb-0.5">{item.venue}</span>
									<ArrowUpRight
										size={14}
										class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
							{:else}
								<p class="text-sm font-medium text-black">{item.venue}</p>
							{/if}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>
