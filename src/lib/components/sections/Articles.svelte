<script lang="ts">
	import Section from './Section.svelte';
	import { BookOpen } from 'lucide-svelte';

	import type { QiitaUser, QiitaArticle } from '$lib/qiita';

	interface Props {
		data: {
			qiita: {
				user: QiitaUser | null;
				topArticles: QiitaArticle[];
			};
		};
	}

	let { data }: Props = $props();

	let userData = $derived(data?.qiita?.user);
	let topArticles = $derived(data?.qiita?.topArticles);

	const QIITA_USER_ID = 'TaiyoYamada';
</script>

{#if !userData || !topArticles || topArticles.length === 0}
	<Section id="articles" class="relative z-10 bg-white py-20">
		<h2
			class="text-outline mb-20 text-center text-6xl font-black tracking-tighter text-transparent uppercase md:text-8xl"
		>
			Articles
		</h2>
		<div class="text-center text-xl font-bold">
			<p>Failed to load the latest edition.</p>
			<a
				href={`https://qiita.com/${QIITA_USER_ID}`}
				class="mt-2 inline-block text-primary underline"
			>
				Check Qiita directly
			</a>
		</div>
	</Section>
{:else}
	<Section id="articles" class="relative z-10 border-y-4 border-black bg-white py-20">
		<div class="mx-auto max-w-6xl px-4">
			<!-- Magazine Header -->
			<div
				class="mb-8 flex flex-col items-start justify-between gap-4 border-b-4 border-black pb-4 md:mb-16 md:flex-row md:items-center md:gap-6 md:pb-8"
			>
				<div class="flex flex-col items-start">
					<span
						class="mb-1 bg-black px-2 py-1 text-[10px] font-black tracking-widest text-white uppercase md:mb-2 md:text-xs"
					>
						The Tech Chronicles
					</span>
					<h2
						class="cursor-default text-5xl leading-none font-black tracking-tighter text-black transition-colors hover:text-primary sm:text-6xl md:text-8xl"
					>
						ARTICLES
					</h2>
				</div>

				<div
					class="flex w-full flex-row items-center justify-between gap-4 md:w-auto md:flex-col md:items-end md:justify-end md:gap-0 md:text-right"
				>
					<div
						class="rotate-2 border-2 border-black bg-primary px-4 py-2 text-xl font-black text-white shadow-[2px_2px_0_#000] md:border-4 md:px-6 md:py-3 md:text-3xl md:shadow-[4px_4px_0_#000]"
					>
						{userData.items_count}
						<span class="ml-1 inline text-[10px] font-bold md:ml-0 md:block md:text-sm">POSTS</span>
					</div>
					<p
						class="mt-0 max-w-[180px] text-right text-[11px] leading-tight font-bold text-gray-500 md:mt-4 md:max-w-xs md:text-right md:text-sm"
					>
						Latest technical insights, tutorials, and engineering journals from Taiyo Yamada.
					</p>
				</div>
			</div>

			<!-- Newspaper Grid -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
				{#each topArticles as article, index}
					<a
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-full flex-col"
					>
						<article
							class="relative flex h-full flex-col overflow-hidden border-2 border-black bg-surface p-5 shadow-[4px_4px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-[6px_6px_0_#000] md:border-4 md:p-8 md:shadow-none md:hover:shadow-pop-bold"
						>
							<!-- Corner Fold Effect -->
							<div
								class="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-t-white border-r-black/10 transition-colors group-hover:border-t-white group-hover:border-r-black/20 md:border-t-[40px] md:border-r-[40px]"
							></div>

							<div class="mt-2 mb-4 flex items-center justify-between md:mt-0 md:mb-6">
								<span
									class="rounded border-2 border-black bg-white px-2 py-1 text-[10px] font-black text-black uppercase shadow-sm md:text-xs"
								>
									{index === 0 ? 'Top Story' : 'Featured'}
								</span>
								<div class="mr-4 flex items-center gap-1 text-[10px] font-black md:mr-6 md:text-sm">
									<BookOpen size={14} class="md:h-4 md:w-4" />
									<span>READ</span>
								</div>
							</div>

							<h3
								class="mb-4 line-clamp-3 text-xl leading-tight font-black text-black decoration-black decoration-2 underline-offset-4 group-hover:underline sm:text-2xl md:line-clamp-none md:text-3xl md:decoration-4 lg:text-4xl"
							>
								{article.title}
							</h3>

							<div
								class="mt-auto flex items-end justify-between border-t-2 border-dashed border-black pt-4 md:items-center md:pt-6"
							>
								<div class="flex flex-wrap gap-1.5 md:gap-2">
									{#each article.tags.slice(0, 3) as tag}
										<span
											class="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[9px] font-bold text-gray-700 md:text-xs"
										>
											#{tag.name}
										</span>
									{/each}
								</div>
								<div
									class="flex shrink-0 flex-col items-center rounded-lg border-2 border-black bg-white px-2 py-1 leading-none"
								>
									<span class="text-lg font-black text-accent md:text-2xl"
										>{article.likes_count}</span
									>
									<span class="text-[8px] font-bold tracking-wider uppercase md:text-[10px]"
										>Likes</span
									>
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
					class="inline-block border-2 border-transparent bg-black px-12 py-4 text-xl font-black text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black hover:shadow-pop"
				>
					READ MORE ARTICLES &rarr;
				</a>
			</div>
		</div>
	</Section>
{/if}
