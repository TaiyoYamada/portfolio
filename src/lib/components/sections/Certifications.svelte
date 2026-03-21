<script lang="ts">
	import Section from './Section.svelte';
	import { Award, GraduationCap } from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	type CertificationType = 'certification' | 'program';

	interface Certification {
		title: string;
		issuer: string;
		date: string;
		type: CertificationType;
		desc?: string;
	}

	const certifications: Certification[] = [
		// === 資格 ===
		{
			title: 'ITパスポート試験',
			issuer: 'IPA（独立行政法人情報処理推進機構）',
			date: '2023.09',
			type: 'certification',
			desc: 'ITを利活用するすべての社会人が備えておくべきIT基礎知識を証明する経済産業省管轄の国家資格。ストラテジ・マネジメント・テクノロジの3分野を学習。'
		},
		{
			title: '量子エンジニア（アニーリング式）エントリー資格',
			issuer: '日本量子コンピューティング協会（JQCA）',
			date: '2025.05',
			type: 'certification',
			desc: '量子アニーリングに関する基礎知識とQUBO（二次制約なし二値最適化）実装スキルを証明する資格。組合せ最適化問題への量子コンピュータ適用能力を認定。'
		},
		// === 修了プログラム ===
		{
			title: '量子ソフトウェア勉強会 2025',
			issuer: '大阪大学 量子ソフトウェア研究拠点（QSRH）',
			date: '2025.09',
			type: 'program',
			desc: '量子計算・量子アルゴリズムの基礎から、量子機械学習・量子化学計算などの応用分野まで、講義とハンズオンを通じて実践的に学習。Qulacsを用いた量子回路シミュレーションを習得。'
		},
		{
			title: '大規模言語モデル講座 2025 基礎編',
			issuer: '東京大学 松尾・岩澤研究室',
			date: '2025.12',
			type: 'program',
			desc: '事前学習・事後学習・ベンチマーク評価など、LLMの学習パイプラインを網羅的に学習。最新の推論モデルを例に、公開モデルやAPIを活用した推論性能向上手法を習得。'
		}
	];
</script>

{#if certifications.length > 0}
	<Section id="certifications" class="relative z-10 bg-secondary/5 py-20">
		<h2
			class="text-outline mb-24 cursor-default text-center text-6xl font-black tracking-tighter text-transparent transition-colors hover:text-accent md:text-8xl"
		>
			CERTS
		</h2>
		<div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-2 md:grid-cols-2 md:gap-8 md:px-4">
			{#each certifications as cert, index}
				<div
					in:scale={{ duration: 800, start: 0.8, easing: elasticOut, delay: index * 100 }}
					class={`group relative flex h-full flex-col border-2 border-black bg-white p-4 shadow-pop transition-all duration-300 hover:-translate-y-1 hover:!rotate-0 hover:shadow-pop-bold md:border-4 md:p-8 md:hover:-translate-y-2 ${
						index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
					} ${
						cert.type === 'certification'
							? 'rounded-2xl md:rounded-3xl'
							: 'rounded-tl-lg rounded-tr-[2rem] rounded-br-lg rounded-bl-[2rem] md:rounded-tl-xl md:rounded-tr-[3rem] md:rounded-br-xl md:rounded-bl-[3rem]'
					}`}
				>
					<!-- Sticker Overlay Effect -->
					<div
						class="absolute -top-3 -right-3 z-10 rotate-12 border-2 border-black bg-accent px-2.5 py-1.5 text-[10px] font-black text-white shadow-[2px_2px_0_#000] md:-top-4 md:-right-4 md:px-4 md:py-2 md:text-xs"
					>
						{cert.date}
					</div>

					<div class="mb-3 flex flex-col items-start gap-3 sm:flex-row md:mb-4 md:gap-4">
						<div
							class={`shrink-0 rounded-xl border-2 border-black p-2.5 shadow-[2px_2px_0_#000] md:rounded-2xl md:p-4 md:shadow-[4px_4px_0_#000] ${cert.type === 'certification' ? 'bg-secondary text-black' : 'bg-primary text-white'}`}
						>
							{#if cert.type === 'certification'}
								<Award strokeWidth={2.5} class="h-6 w-6 md:h-8 md:w-8" />
							{:else}
								<GraduationCap strokeWidth={2.5} class="h-6 w-6 md:h-8 md:w-8" />
							{/if}
						</div>
						<div class="mt-1 md:mt-0">
							<h3 class="mb-1 text-sm leading-tight font-black text-black md:mb-2 md:text-xl">
								{cert.title}
							</h3>
							<span
								class="block text-[9px] leading-tight font-bold tracking-widest text-gray-500 uppercase md:text-sm"
							>
								{cert.issuer}
							</span>
						</div>
					</div>

					{#if cert.desc}
						<p
							class="mb-4 border-t-2 border-black/10 pt-3 text-[11px] leading-relaxed font-bold text-gray-600 sm:text-sm md:mb-0 md:pt-4"
						>
							{cert.desc}
						</p>
					{/if}

					<!-- Type Badge -->
					<div class="mt-auto pt-2 text-right">
						<span
							class={`inline-block border-2 border-black px-2 py-0.5 text-[8px] font-black uppercase md:py-1 md:text-xs ${cert.type === 'certification' ? 'bg-white text-black' : 'bg-black text-white'}`}
						>
							{cert.type}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</Section>
{/if}
