<script lang="ts">
	import Section from './Section.svelte';
	import { FileText, ArrowUpRight } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const researches = [
		{
			title: 'ABCアルゴリズムをオプティマイザとするVQEのノイズ下におけるロバスト性初期評価',
			desc: '量子コンピューティングにおける変分量子固有値法（VQE）の精度向上を目的とした研究。人工蜂コロニー（ABC）アルゴリズムを活用した最適化手法により、ノイズ環境下での初期探索のロバスト性を評価・改善するアプローチを提案。',
			tech: ['Python', 'Qiskit', 'Quantum Computing', 'VQE', 'ABC Algorithm'],
			output: '令和8年 電気学会 全国大会 発表',
			status: 'ongoing',
			link: 'https://www.iee.jp/blog/taikai2026/'
		}
	];
</script>

<Section id="research" class="relative z-10 bg-primary/5 py-20">
	<h2
		class="text-outline mb-20 cursor-default text-center text-6xl font-black tracking-tighter text-transparent transition-colors hover:text-secondary md:text-8xl"
	>
		RESEARCH
	</h2>
	<div class="flex flex-col items-center space-y-12">
		{#each researches as item, index}
			<div
				in:fly={{ y: 50, duration: 500, delay: index * 100 }}
				class={`relative w-full max-w-4xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000] transition-all duration-300 hover:scale-[1.02] hover:!rotate-0 hover:shadow-[6px_6px_0_#000] sm:p-8 md:border-4 md:p-12 md:shadow-pop md:hover:shadow-pop-bold ${
					index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
				}`}
			>
				<!-- Decorative 'Paper Clip' or 'Tape' -->
				<div
					class="absolute -top-3 left-1/2 h-5 w-24 -translate-x-1/2 -rotate-1 border-2 border-black/20 bg-secondary/80 md:h-6 md:w-32"
				></div>

				<div class="mb-4 flex items-start justify-between md:mb-6">
					<div class="flex items-center gap-2 md:gap-3">
						<div
							class="rounded-lg border-2 border-black bg-primary p-2 text-white shadow-[2px_2px_0px_#000] md:p-3 md:shadow-[4px_4px_0px_#000]"
						>
							<FileText size={18} class="md:h-6 md:w-6" />
						</div>
						{#if item.status === 'ongoing'}
							<span
								class="animate-pulse rounded-full border-2 border-black bg-accent px-2 py-0.5 text-[9px] font-black tracking-wider text-white uppercase md:px-3 md:py-1 md:text-xs"
							>
								Ongoing
							</span>
						{/if}
					</div>
					<span
						class="mt-1 border-b-2 border-gray-200 pb-1 text-[9px] font-bold tracking-widest text-gray-400 uppercase md:mt-0 md:text-xs"
					>
						Research Paper
					</span>
				</div>

				<h3
					class="mb-3 text-lg leading-tight font-black text-black sm:text-2xl md:mb-4 md:text-3xl"
				>
					{item.title}
				</h3>

				<p
					class="mb-5 border-l-2 border-secondary pl-3 text-xs leading-relaxed font-bold text-gray-700 sm:text-sm md:mb-8 md:border-l-4 md:pl-4 md:text-lg md:font-medium"
				>
					{item.desc}
				</p>

				<div class="mb-5 flex flex-wrap gap-1.5 md:mb-8 md:gap-2">
					{#each item.tech as t}
						<span
							class="rounded-full border border-black bg-white px-2 py-0.5 text-[9px] font-bold tracking-tight text-black shadow-[1px_1px_0px_#000] md:rounded-md md:px-3 md:py-1 md:text-xs md:shadow-[2px_2px_0px_#000]"
						>
							#{t}
						</span>
					{/each}
				</div>

				<div
					class="mt-auto flex w-full items-center justify-between border-t-2 border-black/10 pt-3 md:pt-4"
				>
					{#if item.link}
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex w-full flex-1 items-center justify-between"
						>
							<span
								class="flex items-center gap-1.5 text-sm font-bold text-black decoration-2 underline-offset-4 transition-colors group-hover:text-secondary group-hover:underline sm:text-base md:gap-2 md:text-xl"
							>
								<span
									class="h-2 w-2 shrink-0 rounded-full border border-black bg-success md:h-2.5 md:w-2.5"
								></span>
								<span class="line-clamp-2 leading-tight md:line-clamp-none">{item.output}</span>
							</span>
							<ArrowUpRight
								class="ml-2 h-5 w-5 shrink-0 text-black transition-all group-hover:scale-110 group-hover:text-secondary md:h-7 md:w-7"
							/>
						</a>
					{:else}
						<span
							class="flex items-center gap-1.5 text-sm font-bold text-black sm:text-base md:gap-2 md:text-xl"
						>
							<span
								class="h-2 w-2 shrink-0 rounded-full border border-black bg-success md:h-2.5 md:w-2.5"
							></span>
							<span class="line-clamp-2 leading-tight md:line-clamp-none">{item.output}</span>
						</span>
						<ArrowUpRight class="ml-2 h-5 w-5 shrink-0 text-black md:h-7 md:w-7" />
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Section>
