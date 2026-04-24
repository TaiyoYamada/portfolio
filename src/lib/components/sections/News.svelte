<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { CATEGORY_LABEL, type NewsItem } from '$lib/news';

	interface Props {
		items: NewsItem[];
	}

	let { items }: Props = $props();

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

<section id="news" class="bg-white py-24 md:py-32">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<!-- Header -->
		<div class="mb-12 flex items-end justify-between md:mb-16">
			<div>
				<p class="mb-2 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
					Latest
				</p>
				<h2 class="text-4xl font-medium tracking-tight text-black md:text-5xl">News</h2>
			</div>
			<a
				href="/news"
				class="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-black"
			>
				All
				<ArrowUpRight
					size={14}
					class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>
		</div>

		{#if items.length === 0}
			<p class="py-16 text-center text-sm text-neutral-400">まだ記事がありません。</p>
		{:else}
			<ul class="divide-y divide-black/10 border-t border-black/10">
				{#each items as item (item.slug)}
					<li>
						<a
							href={`/news/${item.slug}`}
							class="group -mx-4 grid cursor-pointer grid-cols-[1fr_auto] gap-4 px-4 py-6 transition-colors hover:bg-black/[0.02] md:-mx-6 md:grid-cols-[140px_1fr_auto] md:gap-8 md:px-6 md:py-7"
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
									<h3
										class="text-base leading-snug font-semibold tracking-tight text-black transition-colors md:text-lg"
									>
										{item.title}
									</h3>
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
</section>
