<script lang="ts">
	import Section from './Section.svelte';
	import { Briefcase } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const experiences = [
		{
			company: 'ソーイ株式会社',
			period: '2025.02 - 2025.12',
			role: 'Web / Mobile Engineer (Intern)',
			details: [
				'Laravel・Vue.js・Flutter を用いた業務システムの開発',
				'フロントエンドの UI 実装やバックエンド API 設計・実装',
				'バッチ処理の作成、既存コードの改善・デバッグ対応',
				'API ドキュメント作成やテストなど開発フロー全体を担当'
			],
			growth: 'フルスタック的な視点を獲得。業務開発ならではのタスク管理・仕様理解・チーム開発の基礎が身についた。',
			color: 'bg-primary'
		},
		{
			company: '株式会社ゆめみ',
			period: '2025.10 - 2025.11',
			role: 'iOS Engineer (Intern)',
			details: [
				'SwiftUIを用いた研修アプリの開発',
				'テスタブルな設計とアーキテクチャ設計の基礎理解'
			],
			growth: 'iOSアプリ開発の設計力が向上し、アーキテクチャと品質の重要性を理解。',
			color: 'bg-secondary'
		},
		{
			company: '株式会社松尾研究所',
			period: '2026.02 - present',
			role: 'AI Engineer (Intern)',
			details: [],
			growth: '',
			color: 'bg-accent'
		}
	];
</script>

<Section id="experience" class="relative z-10 py-20 pb-40 overflow-hidden">
	<h2 class="text-6xl md:text-8xl font-black mb-32 text-center text-transparent text-outline tracking-tighter hover:text-primary transition-colors cursor-default">
		EXPERIENCE
	</h2>

	<div class="max-w-4xl mx-auto relative px-2 sm:px-4">
		<!-- Subway Line -->
		<div class="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-2 md:w-4 -translate-x-1/2 md:-translate-x-1/2 bg-black rounded-full"></div>

		<div class="space-y-16 md:space-y-24">
			{#each experiences as exp, index}
				<div
					in:fly={{ x: index % 2 === 0 ? -50 : 50, duration: 600, delay: index * 100 }}
					class={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
				>
					<!-- Station Node -->
					<div class="absolute left-[24px] md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-black bg-white z-20 flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-[4px_4px_0_#000] md:shadow-pop">
						<div class={`w-4 h-4 md:w-6 md:h-6 rounded-full ${exp.color} border-2 border-black`}></div>
					</div>

					<!-- Content Side -->
					<div class={`w-full md:w-1/2 min-w-0 pl-[56px] md:pl-0 ${index % 2 === 0 ? 'md:pl-16 lg:pl-24 md:pr-6 lg:pr-8' : 'md:pr-16 lg:pr-24 md:pl-6 lg:pl-8'}`}>
						<div class="bg-white border-2 md:border-4 border-black shadow-[4px_4px_0_#000] md:shadow-pop p-4 md:p-8 rounded-2xl md:rounded-3xl relative group hover:shadow-[6px_6px_0_#000] md:hover:shadow-pop-bold hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 text-left">
							<div class="flex flex-col gap-2 md:gap-3 mb-4 items-start">
								<span class={`px-3 py-1 md:px-4 md:py-1 text-[10px] md:text-sm font-black text-white ${exp.color} border-2 border-black rounded-full inline-block shadow-[2px_2px_0_#000]`}>
									{exp.period}
								</span>
								<h3 class="text-[17px] sm:text-xl md:text-3xl font-black text-black leading-tight">
									{exp.company}
								</h3>
								<div class="flex items-center gap-1.5 md:gap-2 text-[11px] sm:text-xs md:text-base text-gray-700 font-bold bg-primary/5 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-black/10">
									<Briefcase size={14} class="md:w-5 md:h-5" />
									{exp.role}
								</div>
							</div>

							{#if exp.details.length > 0}
								<ul class="text-[11px] sm:text-xs md:text-[15px] font-bold text-gray-600 space-y-1.5 md:space-y-2 mb-4 text-left list-disc pl-4 md:pl-6 leading-relaxed">
									{#each exp.details as d}
										<li class="pl-1 tracking-tight sm:tracking-normal">{d}</li>
									{/each}
								</ul>
							{/if}

							{#if exp.growth}
								<div class="mt-4 pt-4 border-t-2 border-black/10 text-left">
									<span class="text-[10px] md:text-xs font-black text-primary uppercase tracking-wider block mb-1 md:mb-2">
										Key Takeaways
									</span>
									<p class="text-[10px] sm:text-[11px] md:text-sm font-bold text-gray-500 leading-relaxed tracking-tight sm:tracking-normal">
										{exp.growth}
									</p>
								</div>
							{/if}
						</div>
					</div>

					<!-- Empty Side for layout balance -->
					<div class="hidden md:block w-1/2"></div>
				</div>
			{/each}
		</div>
	</div>
</Section>
