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
	<Section id="certifications" class="relative z-10 py-20 bg-secondary/5">
		<h2 class="text-6xl md:text-8xl font-black mb-24 text-center text-transparent text-outline tracking-tighter hover:text-accent transition-colors cursor-default">
			CERTS
		</h2>
		<div class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto px-2 md:px-4">
			{#each certifications as cert, index}
				<div
					in:scale={{ duration: 800, start: 0.8, easing: elasticOut, delay: index * 100 }}
					class={`relative group bg-white border-2 md:border-4 border-black p-4 md:p-8 flex flex-col h-full shadow-pop transition-all duration-300 hover:shadow-pop-bold hover:-translate-y-1 md:hover:-translate-y-2 hover:!rotate-0 ${
						index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
					} ${
						cert.type === 'certification'
							? 'rounded-2xl md:rounded-3xl'
							: 'rounded-tr-[2rem] rounded-bl-[2rem] md:rounded-tr-[3rem] md:rounded-bl-[3rem] rounded-tl-lg rounded-br-lg md:rounded-tl-xl md:rounded-br-xl'
					}`}
				>
					<!-- Sticker Overlay Effect -->
					<div class="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-accent text-white font-black text-[10px] md:text-xs z-10 px-2.5 py-1.5 md:px-4 md:py-2 rotate-12 border-2 border-black shadow-[2px_2px_0_#000]">
						{cert.date}
					</div>

					<div class="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-3 md:mb-4">
						<div class={`p-2.5 md:p-4 rounded-xl md:rounded-2xl border-2 border-black shadow-[2px_2px_0_#000] md:shadow-[4px_4px_0_#000] shrink-0 ${cert.type === 'certification' ? 'bg-secondary text-black' : 'bg-primary text-white'}`}>
							{#if cert.type === 'certification'}
								<Award strokeWidth={2.5} class="w-6 h-6 md:w-8 md:h-8" />
							{:else}
								<GraduationCap strokeWidth={2.5} class="w-6 h-6 md:w-8 md:h-8" />
							{/if}
						</div>
						<div class="mt-1 md:mt-0">
							<h3 class="text-sm md:text-xl font-black text-black leading-tight mb-1 md:mb-2">
								{cert.title}
							</h3>
							<span class="text-[9px] md:text-sm font-bold text-gray-500 uppercase tracking-widest block leading-tight">
								{cert.issuer}
							</span>
						</div>
					</div>

					{#if cert.desc}
						<p class="text-gray-600 font-bold text-[11px] sm:text-sm leading-relaxed border-t-2 border-black/10 pt-3 md:pt-4 mb-4 md:mb-0">
							{cert.desc}
						</p>
					{/if}

					<!-- Type Badge -->
					<div class="mt-auto pt-2 text-right">
						<span class={`inline-block text-[8px] md:text-xs font-black uppercase px-2 py-0.5 md:py-1 border-2 border-black ${cert.type === 'certification' ? 'bg-white text-black' : 'bg-black text-white'}`}>
							{cert.type}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</Section>
{/if}
