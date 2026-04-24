<script lang="ts">
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { CATEGORY_LABEL } from '$lib/news';

	let { data } = $props();
	const item = $derived(data.item);

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

	const paragraphs = $derived(
		item.body
			.split(/\n{2,}/)
			.map((p) => p.trim())
			.filter(Boolean)
	);
</script>

<svelte:head>
	<title>{item.title} | News · Taiyo Yamada</title>
	<meta name="description" content={item.body.slice(0, 140)} />
	{#if item.image}
		<meta property="og:image" content={item.image} />
	{/if}
</svelte:head>

<main class="min-h-screen bg-white pt-24 pb-20 md:pt-32">
	<article class="mx-auto max-w-3xl px-5 md:px-8">
		<!-- Back -->
		<a
			href="/news"
			class="group inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-black"
		>
			<ArrowLeft
				size={14}
				class="transition-transform group-hover:-translate-x-0.5"
			/>
			News
		</a>

		<!-- Meta -->
		<div class="mt-10 flex items-center gap-3 md:mt-14">
			<time class="font-mono text-xs text-neutral-500">{formatDate(item.date)}</time>
			<span class="text-neutral-300">·</span>
			<span class="text-[11px] font-medium tracking-[0.15em] text-neutral-500 uppercase">
				{CATEGORY_LABEL[item.category]}
			</span>
		</div>

		<!-- Title -->
		<h1
			class="mt-5 text-3xl leading-[1.15] font-medium tracking-tight text-black md:text-5xl"
		>
			{item.title}
		</h1>

		<!-- Hero image -->
		{#if item.image}
			<div
				class="mt-10 aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100 md:mt-14"
			>
				<img
					src={item.image}
					alt={item.title}
					class="h-full w-full object-cover"
				/>
			</div>
		{/if}

		<!-- Body -->
		{#if paragraphs.length > 0}
			<div class="mt-10 space-y-5 text-[15px] leading-[1.9] text-neutral-700 md:mt-14 md:text-base">
				{#each paragraphs as p}
					<p>{p}</p>
				{/each}
			</div>
		{/if}

		<!-- External link -->
		{#if item.link}
			<div class="mt-12 border-t border-black/10 pt-6">
				<a
					href={item.link}
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex items-center gap-2 text-sm font-medium text-black"
				>
					<span class="border-b border-black/30 pb-0.5 transition-colors group-hover:border-black"
						>関連リンク</span
					>
					<ArrowUpRight
						size={14}
						class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</a>
			</div>
		{/if}

		<!-- Back to list -->
		<div class="mt-20 border-t border-black/10 pt-6">
			<a
				href="/news"
				class="group inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-black"
			>
				<ArrowLeft
					size={14}
					class="transition-transform group-hover:-translate-x-0.5"
				/>
				All news
			</a>
		</div>
	</article>
</main>

<Footer />
