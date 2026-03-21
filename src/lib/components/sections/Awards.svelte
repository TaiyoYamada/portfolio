<script lang="ts">
	import Section from './Section.svelte';
	import { Trophy, Award } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const awards = [
		{
			title: 'SPAJAM 九州予選 2025・優秀賞',
			year: '2025',
			date: '2025.09.25',
			desc: '48時間でアプリを企画・開発するハッカソンにて、技術力・UX・完成度が評価され優秀賞を受賞。限られた時間での設計、実装、チーム開発力が高く評価された。',
			color: 'bg-primary',
			Icon: Trophy
		},
		{
			title: '第2回 KUMAGAKUビジネスプランコンテスト・優秀賞',
			year: '2026',
			date: '2026.02.18',
			desc: '熊本学園大学商学部主催のビジネスプランコンテストにて優秀賞を受賞。開発担当としてプロダクトの技術面を支え、ビジネスプランの実現可能性が高く評価された。',
			color: 'bg-secondary',
			Icon: Award
		}
	];
</script>

<Section id="awards" class="relative z-10 py-24 pb-48 overflow-hidden">
	<!-- Background elements to add some grid/texture if needed -->
	<div class="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

	<h2 class="text-6xl md:text-8xl font-black mb-24 md:mb-32 text-center text-transparent text-outline tracking-tighter hover:text-secondary transition-colors cursor-default relative z-20">
		AWARDS
	</h2>

	<div class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-4 max-w-6xl mx-auto relative z-20 pb-20">
		{#each awards as award, index}
			<div
				in:fly={{ y: 80, duration: 800, delay: 100 + index * 100 }}
				class="group relative bg-white border-2 md:border-4 border-black shadow-pop rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-pop-bold transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 flex flex-col h-full"
			>
				<!-- Top Side: Icon & Date (Banner) -->
				<div class={`w-full flex flex-col items-center justify-center p-4 md:p-8 border-b-2 md:border-b-4 border-black ${award.color} relative overflow-hidden shrink-0`}>
					<!-- Decorative strips -->
					<div class="absolute -right-4 -top-4 w-12 h-12 md:w-16 md:h-16 bg-white/20 rotate-45 transform origin-center"></div>
					<div class="absolute -left-4 -bottom-4 w-12 h-12 md:w-16 md:h-16 bg-white/20 rotate-45 transform origin-center"></div>
					
					<!-- Giant Background Year Typography -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[140px] font-black text-white/30 z-0 select-none tracking-tighter leading-none pointer-events-none">
						{award.year}
					</div>

					<div class="relative z-10 bg-white border-2 md:border-4 border-black rounded-full p-2.5 md:p-4 shadow-pop group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-4">
						<award.Icon class="text-black w-6 h-6 md:w-10 md:h-10" strokeWidth={2.5} />
					</div>

					<div class="relative z-10 bg-white border-2 border-black px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-[2px_2px_0_#000] flex items-center justify-center leading-none">
						<span class="font-black text-[10px] sm:text-[11px] md:text-sm text-black tracking-widest ml-[0.1em] inline-block translate-y-[1px]">{award.date}</span>
					</div>
				</div>

				<!-- Bottom Side: Content -->
				<div class="flex-1 p-3 sm:p-4 md:p-8 flex flex-col bg-white">
					<div class="mb-2 md:mb-4">
						<h3 class="text-sm sm:text-base md:text-2xl lg:text-3xl font-black text-black leading-tight group-hover:text-primary transition-colors">
							{award.title}
						</h3>
					</div>
					<p class="text-[11px] sm:text-sm font-bold text-gray-600 leading-relaxed mt-auto">
						{award.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</Section>
