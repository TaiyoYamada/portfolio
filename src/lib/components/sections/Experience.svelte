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
			growth:
				'フルスタック的な視点を獲得。業務開発ならではのタスク管理・仕様理解・チーム開発の基礎が身についた。',
			color: 'bg-primary',
			borderColor: 'border-l-primary'
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
			color: 'bg-secondary',
			borderColor: 'border-l-secondary'
		},
		{
			company: '株式会社松尾研究所',
			period: '2026.02 - present',
			role: 'AI Engineer (Intern)',
			details: [],
			growth: '',
			color: 'bg-accent',
			borderColor: 'border-l-accent'
		}
	];
</script>

<Section id="experience" class="relative z-10 overflow-hidden py-20 pb-40">
	<h2
		class="text-outline mb-32 cursor-default text-center text-6xl font-black tracking-tighter text-transparent transition-colors hover:text-primary md:text-8xl"
	>
		EXPERIENCE
	</h2>

	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:gap-10">
		{#each experiences as exp, index}
			<div
				in:fly={{ y: 40, duration: 600, delay: index * 150 }}
				class={`${index === 0 ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''}`}
			>
				<div
					class={`group relative rounded-2xl border-2 border-black bg-white p-5 text-left shadow-[4px_4px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] md:rounded-3xl md:border-4 md:p-8 md:shadow-pop md:hover:-translate-y-2 md:hover:shadow-pop-bold border-l-[6px] md:border-l-8 ${exp.borderColor}`}
				>
					<div class="mb-4 flex flex-col items-start gap-2 md:gap-3">
						<div class="flex w-full items-center justify-between gap-2">
							<span
								class={`px-3 py-1 text-[10px] font-black text-white md:px-4 md:py-1 md:text-sm ${exp.color} inline-block rounded-full border-2 border-black shadow-[2px_2px_0_#000]`}
							>
								{exp.period}
							</span>
							<span
								class="text-3xl font-black text-black/5 md:text-5xl"
							>
								{String(index + 1).padStart(2, '0')}
							</span>
						</div>
						<h3 class="text-[17px] leading-tight font-black text-black sm:text-xl md:text-3xl">
							{exp.company}
						</h3>
						<div
							class="flex items-center gap-1.5 rounded-full border border-black/10 bg-primary/5 px-2 py-1 text-[11px] font-bold text-gray-700 sm:text-xs md:gap-2 md:px-3 md:py-1.5 md:text-base"
						>
							<Briefcase size={14} class="md:h-5 md:w-5" />
							{exp.role}
						</div>
					</div>

					{#if exp.details.length > 0}
						<ul
							class="mb-4 list-disc space-y-1.5 pl-4 text-left text-[11px] leading-relaxed font-bold text-gray-600 sm:text-xs md:space-y-2 md:pl-6 md:text-[15px]"
						>
							{#each exp.details as d}
								<li class="pl-1 tracking-tight sm:tracking-normal">{d}</li>
							{/each}
						</ul>
					{/if}

					{#if exp.growth}
						<div class="mt-4 border-t-2 border-black/10 pt-4 text-left">
							<span
								class="mb-1 block text-[10px] font-black tracking-wider text-primary uppercase md:mb-2 md:text-xs"
							>
								Key Takeaways
							</span>
							<p
								class="text-[10px] leading-relaxed font-bold tracking-tight text-gray-500 sm:text-[11px] sm:tracking-normal md:text-sm"
							>
								{exp.growth}
							</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Section>
