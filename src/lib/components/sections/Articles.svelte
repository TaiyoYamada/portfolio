<script lang="ts">
	import { ArrowUpRight, Heart } from 'lucide-svelte';
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

<section id="articles" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
					Writing
				</p>
				<h1 class="text-5xl font-medium tracking-tight text-black md:text-7xl">Articles</h1>
			</div>
			{#if userData}
				<p class="text-sm text-neutral-500">
					{userData.items_count}
					<span class="text-neutral-400">posts on</span>
					Qiita
				</p>
			{/if}
		</header>

		{#if !topArticles || topArticles.length === 0}
			<div class="border-t border-black/10 py-16 text-center">
				<p class="text-sm text-neutral-500">記事を読み込めませんでした。</p>
				<a
					href={`https://qiita.com/${QIITA_USER_ID}`}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-black underline-offset-4 hover:underline"
				>
					Qiita で直接見る
					<ArrowUpRight size={14} />
				</a>
			</div>
		{:else}
			<ul class="divide-y divide-black/10 border-y border-black/10">
				{#each topArticles as article}
					<li>
						<a
							href={article.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group -mx-4 grid grid-cols-[1fr_auto] gap-4 px-4 py-8 transition-colors hover:bg-black/[0.02] md:-mx-6 md:grid-cols-[1fr_auto_auto] md:gap-8 md:px-6 md:py-10"
						>
							<div class="min-w-0">
								<h2 class="text-lg leading-snug font-semibold tracking-tight text-black md:text-xl">
									{article.title}
								</h2>
								<div
									class="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500 md:text-sm"
								>
									{#each article.tags.slice(0, 4) as tag, i}
										<span>{tag.name}</span>
										{#if i < Math.min(article.tags.length, 4) - 1}
											<span class="text-neutral-300">·</span>
										{/if}
									{/each}
								</div>
							</div>

							<div
								class="flex items-center gap-1.5 self-start text-xs text-neutral-500 md:self-center"
							>
								<Heart size={12} strokeWidth={2} />
								<span class="font-mono">{article.likes_count}</span>
							</div>

							<div class="hidden self-center md:block">
								<ArrowUpRight
									size={16}
									class="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
								/>
							</div>
						</a>
					</li>
				{/each}
			</ul>

			<div class="mt-10 flex justify-center">
				<a
					href={`https://qiita.com/${QIITA_USER_ID}`}
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-black"
				>
					<span
						class="border-b border-neutral-300 pb-0.5 transition-colors group-hover:border-black"
						>View all on Qiita</span
					>
					<ArrowUpRight
						size={14}
						class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</a>
			</div>
		{/if}
	</div>
</section>
