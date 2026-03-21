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

<Section id="awards" class="relative z-10 overflow-hidden py-24 pb-48">
	<!-- Background elements to add some grid/texture if needed -->
	<div class="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30"></div>

	<h2
		class="text-outline relative z-20 mb-24 cursor-default text-center text-6xl font-black tracking-tighter text-transparent transition-colors hover:text-secondary md:mb-32 md:text-8xl"
	>
		AWARDS
	</h2>

	<div
		class="relative z-20 mx-auto grid max-w-6xl grid-cols-2 gap-4 px-2 pb-20 md:grid-cols-2 md:gap-8 md:px-4"
	>
		{#each awards as award, index}
			<div
				in:fly={{ y: 80, duration: 800, delay: 100 + index * 100 }}
				class="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-pop-bold md:rounded-3xl md:border-4 md:hover:-translate-y-2"
			>
				<!-- Top Side: Icon & Date (Banner) -->
				<div
					class={`flex w-full flex-col items-center justify-center border-b-2 border-black p-4 md:border-b-4 md:p-8 ${award.color} relative shrink-0 overflow-hidden`}
				>
					<!-- Decorative strips -->
					<div
						class="absolute -top-4 -right-4 h-12 w-12 origin-center rotate-45 transform bg-white/20 md:h-16 md:w-16"
					></div>
					<div
						class="absolute -bottom-4 -left-4 h-12 w-12 origin-center rotate-45 transform bg-white/20 md:h-16 md:w-16"
					></div>

					<!-- Giant Background Year Typography -->
					<div
						class="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[80px] leading-none font-black tracking-tighter text-white/30 select-none md:text-[140px]"
					>
						{award.year}
					</div>

					<div
						class="relative z-10 mb-2 rounded-full border-2 border-black bg-white p-2.5 shadow-pop transition-transform duration-300 group-hover:scale-110 md:mb-4 md:border-4 md:p-4"
					>
						<award.Icon class="h-6 w-6 text-black md:h-10 md:w-10" strokeWidth={2.5} />
					</div>

					<div
						class="relative z-10 flex items-center justify-center rounded-full border-2 border-black bg-white px-3 py-1.5 leading-none shadow-[2px_2px_0_#000] md:px-5 md:py-2.5"
					>
						<span
							class="ml-[0.1em] inline-block translate-y-[1px] text-[10px] font-black tracking-widest text-black sm:text-[11px] md:text-sm"
							>{award.date}</span
						>
					</div>
				</div>

				<!-- Bottom Side: Content -->
				<div class="flex flex-1 flex-col bg-white p-3 sm:p-4 md:p-8">
					<div class="mb-2 md:mb-4">
						<h3
							class="text-sm leading-tight font-black text-black transition-colors group-hover:text-primary sm:text-base md:text-2xl lg:text-3xl"
						>
							{award.title}
						</h3>
					</div>
					<p class="mt-auto text-[11px] leading-relaxed font-bold text-gray-600 sm:text-sm">
						{award.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</Section>
