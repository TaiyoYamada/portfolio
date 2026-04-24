<script lang="ts">
	const facts = [
		{ label: 'University', value: '熊本県立大学 総合管理学部 飯村研究室 B3' },
		{ label: 'Internship', value: '松尾研究所 共同研究インターン' },
		{ label: 'Community', value: '日本量子コンピューティング協会 熊本支部' }
	];
</script>

<section id="about" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<!-- Header -->
		<header class="mb-14 md:mb-20">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Profile
			</p>
			<h1 class="text-5xl font-medium tracking-tight text-black md:text-7xl">About</h1>
		</header>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
			<!-- Photo -->
			<div class="order-1 md:order-none">
				<div class="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
					<img
						src="/me.png"
						alt="Taiyo Yamada"
						class="h-full w-full object-cover"
					/>
				</div>
				<p class="mt-3 font-mono text-[11px] text-neutral-400">— ヒッチハイク（福岡 - 東京）, 2025</p>
			</div>

			<!-- Content -->
			<div class="order-2 md:order-none md:pt-2">
				<h2 class="text-3xl leading-tight font-medium tracking-tight text-black md:text-4xl">
					山田 大陽
					<span class="block text-xl font-medium tracking-tight text-neutral-400 md:text-2xl">
						Taiyo Yamada
					</span>
				</h2>

				<div class="mt-8 space-y-5 text-[15px] leading-[1.8] text-neutral-700 md:text-base">
					<p>
						大学では法律・経済・情報を横断的に学びながら、研究室では量子アルゴリズムの研究、並行して Swift
						を中心としたアプリ・ライブラリの開発を行っています。
					</p>
					<p>
						衝動で動くタイプで、面白そうと思ったらだいたい手を出しています。
					</p>
				</div>

				<!-- Facts -->
				<dl class="mt-10 divide-y divide-black/10 border-y border-black/10">
					{#each facts as fact}
						<div class="grid grid-cols-[110px_1fr] gap-4 py-3.5 md:grid-cols-[140px_1fr]">
							<dt class="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">
								{fact.label}
							</dt>
							<dd class="text-sm text-neutral-800 md:text-[15px]">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
