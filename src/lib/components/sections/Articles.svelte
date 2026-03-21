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
			<div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-16 border-b-4 border-black pb-4 md:pb-8 gap-4 md:gap-6">
				<div class="flex flex-col items-start">
					<span class="text-[10px] md:text-xs font-black bg-black text-white px-2 py-1 mb-1 md:mb-2 uppercase tracking-widest">
						The Tech Chronicles
					</span>
					<h2 class="text-5xl sm:text-6xl md:text-8xl font-black text-black tracking-tighter hover:text-primary transition-colors cursor-default leading-none">
						ARTICLES
					</h2>
				</div>

				<div class="flex flex-row md:flex-col items-center md:items-end md:text-right gap-4 md:gap-0 w-full md:w-auto justify-between md:justify-end">
					<div class="bg-primary text-white font-black text-xl md:text-3xl px-4 md:px-6 py-2 md:py-3 border-2 md:border-4 border-black shadow-[2px_2px_0_#000] md:shadow-[4px_4px_0_#000] rotate-2">
						{userData.items_count} <span class="text-[10px] md:text-sm font-bold md:block inline ml-1 md:ml-0">POSTS</span>
					</div>
					<p class="mt-0 md:mt-4 font-bold text-gray-500 text-[11px] md:text-sm max-w-[180px] md:max-w-xs leading-tight text-right md:text-right">
						Latest technical insights, tutorials, and engineering journals from Taiyo Yamada.
					</p>
				</div>
			</div>

			<!-- Newspaper Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
				{#each topArticles as article, index}
					<a
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col h-full"
					>
						<article class="h-full flex flex-col border-2 md:border-4 border-black p-5 md:p-8 bg-surface hover:bg-secondary hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_#000] md:shadow-none hover:shadow-[6px_6px_0_#000] md:hover:shadow-pop-bold relative overflow-hidden">
							<!-- Corner Fold Effect -->
							<div class="absolute top-0 right-0 border-t-[30px] border-r-[30px] md:border-t-[40px] md:border-r-[40px] border-t-white border-r-black/10 group-hover:border-t-white group-hover:border-r-black/20 transition-colors"></div>

							<div class="flex items-center justify-between mb-4 md:mb-6 mt-2 md:mt-0">
								<span class="text-[10px] md:text-xs font-black border-2 border-black px-2 py-1 rounded bg-white text-black uppercase shadow-sm">
									{index === 0 ? 'Top Story' : 'Featured'}
								</span>
								<div class="flex items-center gap-1 font-black text-[10px] md:text-sm mr-4 md:mr-6">
									<BookOpen size={14} class="md:w-4 md:h-4" />
									<span>READ</span>
								</div>
							</div>

							<h3 class="font-black text-black leading-tight mb-4 group-hover:underline decoration-2 md:decoration-4 decoration-black underline-offset-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl line-clamp-3 md:line-clamp-none">
								{article.title}
							</h3>

							<div class="mt-auto pt-4 md:pt-6 border-t-2 border-black border-dashed flex items-end md:items-center justify-between">
								<div class="flex flex-wrap gap-1.5 md:gap-2">
									{#each article.tags.slice(0, 3) as tag}
										<span class="text-[9px] md:text-xs font-bold text-gray-700 bg-black/5 px-2 py-0.5 rounded-full border border-black/10">
											#{tag.name}
										</span>
									{/each}
								</div>
								<div class="flex flex-col items-center leading-none shrink-0 border-2 border-black rounded-lg px-2 py-1 bg-white">
									<span class="text-lg md:text-2xl font-black text-accent">{article.likes_count}</span>
									<span class="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Likes</span>
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
