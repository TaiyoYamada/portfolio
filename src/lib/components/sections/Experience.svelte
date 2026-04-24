<script lang="ts">
	const experiences = [
		{
			company: '株式会社松尾研究所',
			period: '2026.02 — Present',
			role: 'AI Engineer (Intern)',
			details: [] as string[],
			growth: ''
		},
		{
			company: '株式会社ゆめみ',
			period: '2025.10 — 2025.11',
			role: 'iOS Engineer (Intern)',
			details: [
				'SwiftUIを用いた研修アプリの開発',
				'テスタブルな設計とアーキテクチャ設計の基礎理解'
			],
			growth: 'iOSアプリ開発の設計力が向上し、アーキテクチャと品質の重要性を理解。'
		},
		{
			company: 'ソーイ株式会社',
			period: '2025.02 — 2025.12',
			role: 'Web / Mobile Engineer (Intern)',
			details: [
				'Laravel・Vue.js・Flutter を用いた業務システムの開発',
				'フロントエンドの UI 実装やバックエンド API 設計・実装',
				'バッチ処理の作成、既存コードの改善・デバッグ対応',
				'API ドキュメント作成やテストなど開発フロー全体を担当'
			],
			growth:
				'フルスタック的な視点を獲得。業務開発ならではのタスク管理・仕様理解・チーム開発の基礎が身についた。'
		}
	];
</script>

<section id="experience" class="bg-white py-14 md:py-20">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-10 md:mb-14">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Work
			</p>
			<h2 class="text-3xl font-medium tracking-tight text-black md:text-5xl">Experience</h2>
		</header>

		<ol class="divide-y divide-black/10 border-y border-black/10">
			{#each experiences as exp}
				<li class="grid grid-cols-1 gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-10 md:py-12">
					<div>
						<p class="font-mono text-[11px] text-neutral-500 md:text-xs">{exp.period}</p>
					</div>
					<div>
						<h2
							class="text-xl leading-tight font-semibold tracking-tight text-black md:text-2xl"
						>
							{exp.company}
						</h2>
						<p class="mt-1 text-sm text-neutral-500 md:text-[15px]">{exp.role}</p>

						{#if exp.details.length > 0}
							<ul
								class="mt-5 space-y-2 text-sm leading-relaxed text-neutral-600 md:text-[15px]"
							>
								{#each exp.details as d}
									<li class="flex gap-3">
										<span class="mt-[0.65em] h-px w-3 shrink-0 bg-neutral-300"></span>
										<span>{d}</span>
									</li>
								{/each}
							</ul>
						{/if}

						{#if exp.growth}
							<p
								class="mt-5 border-l border-black/20 pl-4 text-sm leading-relaxed text-neutral-500 md:text-[15px]"
							>
								{exp.growth}
							</p>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
