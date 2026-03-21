<script lang="ts">
	import Section from './Section.svelte';
	import { School } from 'lucide-svelte';
	import { scale, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
</script>

<Section id="about" class="relative z-10 py-20 flex flex-col items-center">
	<div class="relative">
		<!-- Decorative Elements -->
		<div
			in:scale={{ duration: 1000, easing: elasticOut, delay: 500 }}
			class="absolute -top-10 left-0 md:-top-12 md:-left-12 z-20"
		>
			<span class="block bg-accent text-white font-black text-xl px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000]" style="transform: rotate(-12deg);">
				WHO IS HE?
			</span>
		</div>

		<!-- Polaroid Card -->
		<div
			in:fly={{ y: 50, duration: 800, easing: elasticOut }}
			class="bg-white p-6 pb-20 max-w-xl w-full border-4 border-black shadow-pop-bold relative transform transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
			style="transform: rotate(-2deg);"
		>
			<!-- Tape -->
			<div class="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-gray-200/80 shadow-sm backdrop-blur-sm z-10" style="transform: translateX(-50%) rotate(1deg);"></div>

			<div class="flex flex-col md:flex-row gap-8 items-start">
				<!-- Profile Image Area -->
				<div class="w-full md:w-48 aspect-square bg-surface border-2 border-black relative overflow-hidden group">
					<img
						src="/me.png"
						alt="Taiyo Yamada"
						class="w-full h-full object-cover transition-all duration-300"
					/>
					<div class="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10"></div>
				</div>

				<div class="space-y-4 flex-1">
					<div>
						<span class="block text-xs font-black text-gray-400 tracking-[0.2em] mb-1 mt-2">
							TAIYO YAMADA
						</span>
						<h3 class="text-4xl font-black text-black leading-none mb-2 relative inline-block">
							<span class="relative z-10">山田 大陽</span>
							<span class="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-10" style="transform: rotate(-1deg);"></span>
						</h3>
						<p class="text-gray-500 font-bold text-sm tracking-wider uppercase mt-1">
							Developer / Student / Researcher
						</p>
					</div>

					<div class="space-y-4 text-black font-medium leading-relaxed">
						<ul class="space-y-2">
							<li class="flex items-center gap-3">
								<div class="bg-primary text-white p-1.5 border-2 border-black shadow-[2px_2px_0_#000]">
									<School size={16} strokeWidth={3} />
								</div>
								<span class="font-black text-lg">熊本県立大学 総合管理学部 B2</span>
							</li>
						</ul>
						<p>
							大学では、法律・経済・情報を学びながら、研究室では <span class="underline decoration-4 decoration-primary/30 underline-offset-2">量子アルゴリズム</span> の研究や <span class="underline decoration-4 decoration-primary/30 underline-offset-2">Swift</span> を中心としたアプリやSDKの開発を行っています。
						</p>
						<p class="text-sm text-gray-600">
							Born: 2005.09.26<br />
							From: Kumamoto, Japan
						</p>
					</div>

					<!-- Stickers -->
					<div class="flex flex-wrap gap-2 pt-2">
						{#each ["iOS", "AI", "Quantum"] as tag, i}
							<span class={`inline-block px-3 py-1 text-xs font-black border-2 border-black bg-white shadow-[2px_2px_0_#000] ${i % 2 === 0 ? "hover:bg-accent hover:text-white" : "hover:bg-primary hover:text-white"} transition-colors cursor-default`}>
								#{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Handwriting -->
			<div class="absolute bottom-6 right-8" style="transform: rotate(-4deg);">
				<span class="font-heading font-black text-gray-400 opacity-50 text-2xl">
					nice to meet you!
				</span>
			</div>
		</div>
	</div>
</Section>
