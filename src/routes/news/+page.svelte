<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { getAllNews, CATEGORY_LABEL, type NewsCategory, type NewsItem } from '$lib/news';
	import Footer from '$lib/components/layout/Footer.svelte';

	const all = getAllNews();
	const categories = Array.from(new Set(all.map((n) => n.category))) as NewsCategory[];

	let filter = $state<NewsCategory | 'all'>('all');

	const filtered = $derived(
		filter === 'all' ? all : all.filter((n: NewsItem) => n.category === filter)
	);

	const MONTHS = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	function formatDate(date: string) {
		const [y, m, d] = date.split('-');
		return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
	}
</script>

<svelte:head>
	<title>News | Taiyo Yamada</title>
	<meta name="description" content="山田大陽の活動記録。登壇・受賞・リリース・掲載など。" />
</svelte:head>

<main class="min-h-screen bg-white pt-28 pb-24 md:pt-36">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<!-- Header -->
		<header class="mb-12 md:mb-16">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Archive
			</p>
			<h1 class="text-5xl font-medium tracking-tight text-black md:text-7xl">News</h1>
			<p class="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base">
				登壇・受賞・リリース・掲載など、これまでの活動をまとめています。
			</p>
		</header>

		<!-- Filter -->
		{#if categories.length > 1}
			<div class="mb-6 flex flex-wrap items-center gap-1">
				<button
					type="button"
					onclick={() => (filter = 'all')}
					class={`rounded-md px-3 py-1.5 text-xs font-medium tracking-tight transition-colors ${filter === 'all' ? 'bg-black text-white' : 'text-neutral-500 hover:bg-black/5 hover:text-black'}`}
				>
					All
					<span class="ml-1 opacity-60">{all.length}</span>
				</button>
				{#each categories as c (c)}
					{@const count = all.filter((n) => n.category === c).length}
					<button
						type="button"
						onclick={() => (filter = c)}
						class={`rounded-md px-3 py-1.5 text-xs font-medium tracking-tight transition-colors ${filter === c ? 'bg-black text-white' : 'text-neutral-500 hover:bg-black/5 hover:text-black'}`}
					>
						{CATEGORY_LABEL[c]}
						<span class="ml-1 opacity-60">{count}</span>
					</button>
				{/each}
			</div>
		{/if}

		<!-- List -->
		{#if filtered.length === 0}
			<p class="py-16 text-center text-sm text-neutral-400">該当する記事がありません。</p>
		{:else}
			<ul class="divide-y divide-black/10 border-t border-black/10">
				{#each filtered as item (item.slug)}
					<li>
						<a
							href={`/news/${item.slug}`}
							class="group -mx-4 grid cursor-pointer grid-cols-[1fr_auto] gap-4 px-4 py-7 transition-colors hover:bg-black/[0.02] md:-mx-6 md:grid-cols-[140px_1fr_auto] md:gap-8 md:px-6 md:py-8"
						>
							<div class="col-span-2 flex items-center gap-3 md:col-span-1 md:block">
								<time class="block font-mono text-[11px] text-neutral-500 md:text-xs">
									{formatDate(item.date)}
								</time>
								<span
									class="text-[10px] font-medium tracking-[0.15em] text-neutral-400 uppercase md:mt-1 md:block"
								>
									{CATEGORY_LABEL[item.category]}
								</span>
							</div>
							<div class="flex min-w-0 items-start gap-4 md:gap-5">
								<div class="min-w-0 flex-1">
									<h2
										class="text-base leading-snug font-semibold tracking-tight text-black md:text-lg"
									>
										{item.title}
									</h2>
									{#if item.body}
										<p
											class="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500 md:text-[15px]"
										>
											{item.body}
										</p>
									{/if}
								</div>
								{#if item.image}
									<div
										class="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-100 md:h-20 md:w-20"
									>
										<img
											src={item.image}
											alt=""
											loading="lazy"
											class="h-full w-full object-cover"
										/>
									</div>
								{/if}
							</div>
							<div class="row-start-1 flex items-start justify-end pt-1 md:row-start-auto">
								<ArrowUpRight
									size={16}
									class="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
								/>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</main>

<Footer />
