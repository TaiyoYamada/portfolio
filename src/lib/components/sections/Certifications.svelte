<script lang="ts">
	type CertificationType = 'certification' | 'program';

	interface Certification {
		title: string;
		issuer: string;
		date: string;
		type: CertificationType;
		desc?: string;
	}

	const certifications: Certification[] = [
		{
			title: '大規模言語モデル講座 2025 基礎編',
			issuer: '東京大学 松尾・岩澤研究室',
			date: '2025.12',
			type: 'program',
			desc: '事前学習・事後学習・ベンチマーク評価など、LLMの学習パイプラインを網羅的に学習。最新の推論モデルを例に、公開モデルやAPIを活用した推論性能向上手法を習得。'
		},
		{
			title: '量子ソフトウェア勉強会 2025',
			issuer: '大阪大学 量子ソフトウェア研究拠点（QSRH）',
			date: '2025.09',
			type: 'program',
			desc: '量子計算・量子アルゴリズムの基礎から、量子機械学習・量子化学計算などの応用分野まで、講義とハンズオンを通じて実践的に学習。Qulacsを用いた量子回路シミュレーションを習得。'
		},
		{
			title: '量子エンジニア（アニーリング式）エントリー資格',
			issuer: '日本量子コンピューティング協会（JQCA）',
			date: '2025.05',
			type: 'certification',
			desc: '量子アニーリングに関する基礎知識とQUBO（二次制約なし二値最適化）実装スキルを証明する資格。組合せ最適化問題への量子コンピュータ適用能力を認定。'
		},
		{
			title: 'ITパスポート試験',
			issuer: 'IPA（独立行政法人情報処理推進機構）',
			date: '2023.09',
			type: 'certification',
			desc: 'ITを利活用するすべての社会人が備えておくべきIT基礎知識を証明する経済産業省管轄の国家資格。ストラテジ・マネジメント・テクノロジの3分野を学習。'
		}
	];

	const typeLabel: Record<CertificationType, string> = {
		certification: 'Certification',
		program: 'Program'
	};
</script>

{#if certifications.length > 0}
	<section id="certifications" class="bg-white py-14 md:py-20">
		<div class="mx-auto max-w-5xl px-5 md:px-8">
			<header class="mb-10 md:mb-14">
				<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
					Credentials
				</p>
				<h2 class="text-3xl font-medium tracking-tight text-black md:text-5xl">Certifications</h2>
			</header>

			<ul class="divide-y divide-black/10 border-y border-black/10">
				{#each certifications as cert}
					<li class="grid grid-cols-1 gap-3 py-7 md:grid-cols-[140px_1fr] md:gap-10 md:py-8">
						<div>
							<p class="font-mono text-[11px] text-neutral-500 md:text-xs">{cert.date}</p>
							<p
								class="mt-1 text-[10px] font-medium tracking-[0.15em] text-neutral-400 uppercase"
							>
								{typeLabel[cert.type]}
							</p>
						</div>
						<div>
							<h2
								class="text-base leading-snug font-semibold tracking-tight text-black md:text-lg"
							>
								{cert.title}
							</h2>
							<p class="mt-1 text-sm text-neutral-500 md:text-[15px]">{cert.issuer}</p>
							{#if cert.desc}
								<p class="mt-3 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
									{cert.desc}
								</p>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}
