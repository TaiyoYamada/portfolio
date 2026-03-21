<script lang="ts">
	import Section from './Section.svelte';
	import { School, Briefcase, Users } from 'lucide-svelte';
	import { scale, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
</script>

<Section id="about" class="relative z-10 flex flex-col items-center py-20">
	<div class="relative w-full max-w-4xl px-4">
		<!-- Decorative Elements -->
		<div
			in:scale={{ duration: 1000, easing: elasticOut, delay: 500 }}
			class="absolute -top-10 left-0 z-20 md:-left-8"
		>
			<span
				class="block border-4 border-black bg-accent px-5 py-2 text-2xl font-black text-white shadow-[6px_6px_0_#000]"
				style="transform: rotate(-8deg);"
			>
				WHO IS HE?
			</span>
		</div>

		<!-- Single Polaroid Card -->
		<div
			in:fly={{ y: 50, duration: 800, easing: elasticOut }}
			class="relative w-full transform border-4 border-black bg-white p-6 pb-12 shadow-[12px_12px_0_#000] transition-transform duration-300 hover:scale-[1.01] hover:rotate-0 md:p-10 md:pb-16"
			style="transform: rotate(-1.5deg);"
		>
			<!-- Tape -->
			<div
				class="absolute -top-6 left-1/2 z-10 h-12 w-32 -translate-x-1/2 border border-black/10 bg-gray-200/80 shadow-sm backdrop-blur-sm"
				style="transform: translateX(-50%) rotate(2deg);"
			></div>

			<div class="flex flex-col items-center gap-8 pt-6 md:flex-row md:items-start md:gap-14">
				<!-- Photo Area -->
				<div class="flex w-full flex-col items-center sm:w-2/3 md:w-5/12">
					<div
						class="group relative mb-6 aspect-square w-full -rotate-3 transform overflow-hidden border-4 border-black shadow-[8px_8px_0_#000] transition-transform duration-500 hover:rotate-0"
					>
						<img
							src="/me.png"
							alt="Taiyo Yamada"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div
							class="pointer-events-none absolute inset-0 z-10 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
				</div>

				<!-- Right Area -->
				<div class="flex flex-1 flex-col justify-center space-y-6">
					<div class="text-center md:text-left">
						<span
							class="mb-4 inline-block -rotate-1 transform border-2 border-black bg-black px-3 py-1 text-xs font-black tracking-[0.2em] text-white shadow-[2px_2px_0_#A855F7]"
						>
							TAIYO YAMADA
						</span>
						<h3 class="mb-3 text-4xl leading-none font-black text-black md:text-5xl">
							山田 大陽
							<span
								class="mx-auto mt-1 block h-2 w-24 rotate-[-1deg] transform rounded bg-accent/40 md:mx-0"
							></span>
						</h3>
						<p class="mt-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
							Developer / Student / Researcher
						</p>
					</div>

					<div
						class="rotate-1 transform space-y-4 border-4 border-black bg-primary/5 p-4 leading-relaxed font-medium text-black shadow-[4px_4px_0_#000] md:p-5"
					>
						<ul class="w-full space-y-3">
							<li class="flex items-center gap-3 md:gap-4">
								<div
									class="shrink-0 rotate-[-2deg] border-2 border-black bg-primary p-2 text-white shadow-[2px_2px_0_#000]"
								>
									<School size={20} strokeWidth={2.5} />
								</div>
								<span class="w-full text-[17px] leading-snug font-black sm:text-base md:text-xl"
									>熊本県立大学 総合管理学部 B2</span
								>
							</li>
							<li class="flex items-center gap-3 md:gap-4">
								<div
									class="shrink-0 rotate-[3deg] border-2 border-black bg-accent p-2 text-white shadow-[2px_2px_0_#000]"
								>
									<Briefcase size={20} strokeWidth={2.5} />
								</div>
								<span class="w-full text-[17px] leading-snug font-black sm:text-base md:text-xl"
									>松尾研究所 共同研究インターン</span
								>
							</li>
							<li class="flex items-center gap-3 md:gap-4">
								<div
									class="shrink-0 rotate-[-1deg] border-2 border-black bg-secondary p-2 text-white shadow-[2px_2px_0_#000]"
								>
									<Users size={20} strokeWidth={2.5} />
								</div>
								<span class="w-full text-[17px] leading-snug font-black sm:text-base md:text-xl"
									>日本量子コンピューティング協会 熊本支部</span
								>
							</li>
						</ul>
					</div>

					<p class="pt-2 text-center text-lg font-medium md:text-left">
						大学では法律・経済・情報を学びながら、研究室では <span
							class="border-b-4 border-primary px-1 font-bold">量子アルゴリズム</span
						>
						の研究や <span class="border-b-4 border-accent px-1 font-bold">Swift</span> を中心としたアプリやライブラリの開発を行っています。
					</p>

					<!-- Stickers -->
					<div class="flex flex-wrap justify-center gap-3 pt-4 md:justify-start">
						{#each ['iOS', 'AI', 'Quantum'] as tag, i}
							<span
								class={`inline-block border-2 border-black bg-white px-4 py-1.5 text-sm font-black shadow-[4px_4px_0_#000] ${i % 2 === 0 ? 'hover:bg-accent hover:text-white' : 'hover:bg-primary hover:text-white'} transform cursor-default transition-colors ${i === 1 ? 'rotate-2' : '-rotate-1'}`}
							>
								#{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
