<script lang="ts">
	import Section from './Section.svelte';
	import { BookOpen } from 'lucide-svelte';

	interface Props {
		data: {
			qiita: {
				user: any;
				topArticles: any[];
			};
		};
	}

	let { data }: Props = $props();
	
	let userData = $derived(data?.qiita?.user);
	let topArticles = $derived(data?.qiita?.topArticles);

	const QIITA_USER_ID = 'TaiyoYamada';
</script>

{#if !userData || !topArticles || topArticles.length === 0}
	<Section id="articles" class="relative z-10 py-20 bg-white">
		<h2 class="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter uppercase">
			Articles
		</h2>
		<div class="text-center font-bold text-xl">
			<p>Failed to load the latest edition.</p>
			<a href={`https://qiita.com/${QIITA_USER_ID}`} class="text-primary underline mt-2 inline-block">
				Check Qiita directly
			</a>
		</div>
	</Section>
{:else}
	<Section id="articles" class="relative z-10 py-20 bg-white border-y-4 border-black">
		<div class="max-w-6xl mx-auto px-4">
			<!-- Magazine Header -->
			<div class="flex flex-col md:flex-row items-center justify-between mb-16 border-b-4 border-black pb-8 gap-6">
				<div class="flex flex-col items-start">
					<span class="text-xs font-black bg-black text-white px-2 py-1 mb-2 uppercase tracking-widest">
						The Tech Chronicles
					</span>
					<h2 class="text-6xl md:text-8xl font-black text-black tracking-tighter hover:text-primary transition-colors cursor-default leading-none">
						ARTICLES
					</h2>
				</div>

				<div class="flex flex-col items-end md:text-right">
					<div class="bg-primary text-white font-black text-3xl px-6 py-3 border-4 border-black shadow-[4px_4px_0_#000] rotate-2">
						{userData.items_count} <span class="text-sm font-bold block">POSTS</span>
					</div>
					<p class="mt-4 font-bold text-gray-500 text-sm max-w-xs leading-tight">
						Latest technical insights, tutorials, and engineering journals from Taiyo Yamada.
					</p>
				</div>
			</div>

			<!-- Newspaper Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each topArticles as article, index}
					<a
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col h-full"
					>
						<article class={`h-full flex flex-col border-4 border-black p-6 bg-surface hover:bg-secondary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 hover:shadow-pop-bold relative overflow-hidden ${index === 0 ? 'md:col-span-2 md:p-10' : ''}`}>
							<!-- Corner Fold Effect -->
							<div class="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-white border-r-black/10 group-hover:border-t-white group-hover:border-r-black/20 transition-colors"></div>

							<div class="flex items-center justify-between mb-6">
								<span class="text-xs font-black border-2 border-black px-2 py-1 rounded bg-white text-black uppercase">
									{index === 0 ? 'Top Story' : 'Featured'}
								</span>
								<div class="flex items-center gap-1 font-black text-sm">
									<BookOpen size={16} />
									<span>READ</span>
								</div>
							</div>

							<h3 class={`font-black text-black leading-tight mb-4 group-hover:underline decoration-4 decoration-black underline-offset-4 ${index === 0 ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
								{article.title}
							</h3>

							<div class="mt-auto pt-6 border-t-2 border-black border-dashed flex items-center justify-between">
								<div class="flex flex-wrap gap-2">
									{#each article.tags.slice(0, 3) as tag}
										<span class="text-xs font-bold text-gray-600">
											#{tag.name}
										</span>
									{/each}
								</div>
								<div class="flex flex-col items-center leading-none">
									<span class="text-2xl font-black text-accent">{article.likes_count}</span>
									<span class="text-[10px] font-bold uppercase">Likes</span>
								</div>
							</div>
						</article>
					</a>
				{/each}
			</div>

			<div class="mt-16 text-center">
				<a
					href={`https://qiita.com/${QIITA_USER_ID}`}
					target="_blank"
					class="inline-block px-12 py-4 bg-black text-white font-black text-xl border-2 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-pop transition-all duration-300"
				>
					READ MORE ARTICLES &rarr;
				</a>
			</div>
		</div>
	</Section>
{/if}
