<script lang="ts">
	const awards = [
		{
			title: '第2回 KUMAGAKUビジネスプランコンテスト・優秀賞',
			date: '2026.02.18',
			desc: '熊本学園大学商学部主催のビジネスプランコンテストにて優秀賞を受賞。開発担当としてプロダクトの技術面を支え、ビジネスプランの実現可能性が高く評価された。'
		},
		{
			title: 'SPAJAM 九州予選 2025・優秀賞',
			date: '2025.09.25',
			desc: '48時間でアプリを企画・開発するハッカソンにて、技術力・UX・完成度が評価され優秀賞を受賞。限られた時間での設計、実装、チーム開発力が高く評価された。'
		}
	];
</script>

<section id="awards" class="bg-white py-14 md:py-20">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-10 md:mb-14">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Recognition
			</p>
			<h2 class="text-3xl font-medium tracking-tight text-black md:text-5xl">Awards</h2>
		</header>

		<ul class="divide-y divide-black/10 border-y border-black/10">
			{#each awards as a}
				<li class="grid grid-cols-1 gap-3 py-8 md:grid-cols-[140px_1fr] md:gap-10 md:py-10">
					<div>
						<p class="font-mono text-[11px] text-neutral-500 md:text-xs">{a.date}</p>
					</div>
					<div>
						<h2 class="text-lg leading-snug font-semibold tracking-tight text-black md:text-xl">
							{a.title}
						</h2>
						<p class="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
							{a.desc}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
