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

<Section id="research" class="relative z-10 py-20 bg-primary/5">
	<h2 class="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter hover:text-secondary transition-colors cursor-default">
		RESEARCH
	</h2>
	<div class="flex flex-col items-center space-y-12">
		{#each researches as item, index}
			<div
				in:fly={{ y: 50, duration: 500, delay: index * 100 }}
				class={`relative w-full max-w-4xl bg-white border-2 md:border-4 border-black shadow-[4px_4px_0_#000] md:shadow-pop p-5 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-[6px_6px_0_#000] md:hover:shadow-pop-bold hover:scale-[1.02] hover:!rotate-0 ${
					index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
				}`}
			>
				<!-- Decorative 'Paper Clip' or 'Tape' -->
				<div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 md:w-32 md:h-6 bg-secondary/80 -rotate-1 border-2 border-black/20"></div>

				<div class="flex items-start justify-between mb-4 md:mb-6">
					<div class="flex items-center gap-2 md:gap-3">
						<div class="p-2 md:p-3 bg-primary text-white border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000] rounded-lg">
							<FileText size={18} class="md:w-6 md:h-6" />
						</div>
						{#if item.status === 'ongoing'}
							<span class="text-[9px] md:text-xs font-black uppercase tracking-wider px-2 md:px-3 py-0.5 md:py-1 bg-accent text-white border-2 border-black rounded-full animate-pulse">
								Ongoing
							</span>
						{/if}
					</div>
					<span class="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest border-b-2 border-gray-200 pb-1 mt-1 md:mt-0">
						Research Paper
					</span>
				</div>

				<h3 class="text-lg sm:text-2xl md:text-3xl font-black mb-3 md:mb-4 text-black leading-tight">
					{item.title}
				</h3>

				<p class="text-gray-700 text-xs sm:text-sm md:text-lg font-bold md:font-medium mb-5 md:mb-8 leading-relaxed border-l-2 md:border-l-4 border-secondary pl-3 md:pl-4">
					{item.desc}
				</p>

				<div class="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-8">
					{#each item.tech as t}
						<span class="text-[9px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 bg-white border border-black rounded-full md:rounded-md shadow-[1px_1px_0px_#000] md:shadow-[2px_2px_0px_#000] text-black tracking-tight">
							#{t}
						</span>
					{/each}
				</div>

				<div class="flex items-center justify-between border-t-2 border-black/10 pt-3 md:pt-4 mt-auto w-full">
					{#if item.link}
						<a href={item.link} target="_blank" rel="noopener noreferrer" class="flex flex-1 items-center justify-between w-full group">
							<span class="text-sm sm:text-base md:text-xl font-bold text-black flex items-center gap-1.5 md:gap-2 group-hover:text-secondary transition-colors group-hover:underline decoration-2 underline-offset-4">
								<span class="w-2 h-2 md:w-2.5 md:h-2.5 bg-success rounded-full border border-black shrink-0"></span>
								<span class="line-clamp-2 md:line-clamp-none leading-tight">{item.output}</span>
							</span>
							<ArrowUpRight class="text-black w-5 h-5 md:w-7 md:h-7 group-hover:text-secondary group-hover:scale-110 transition-all shrink-0 ml-2" />
						</a>
					{:else}
						<span class="text-sm sm:text-base md:text-xl font-bold text-black flex items-center gap-1.5 md:gap-2">
							<span class="w-2 h-2 md:w-2.5 md:h-2.5 bg-success rounded-full border border-black shrink-0"></span>
							<span class="line-clamp-2 md:line-clamp-none leading-tight">{item.output}</span>
						</span>
						<ArrowUpRight class="text-black w-5 h-5 md:w-7 md:h-7 shrink-0 ml-2" />
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Section>
