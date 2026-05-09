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
</script>

<svelte:head>
	<title>{item.title} | News · Taiyo Yamada</title>
	<meta name="description" content={item.excerpt} />
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
			<ArrowLeft size={14} class="transition-transform group-hover:-translate-x-0.5" />
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
		<h1 class="mt-5 text-3xl leading-[1.15] font-medium tracking-tight text-black md:text-5xl">
			{item.title}
		</h1>

		<!-- Hero image -->
		{#if item.image}
			<div class="mt-10 aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100 md:mt-14">
				<img src={item.image} alt={item.title} class="h-full w-full object-cover" />
			</div>
		{/if}

		<!-- Body -->
		{#if item.bodyHtml}
			<div
				class="prose mt-10 max-w-none text-[15px] leading-[1.9] text-neutral-700 prose-neutral md:mt-14 md:text-base
				prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-black
				prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl md:prose-h2:text-3xl
				prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-xl md:prose-h3:text-2xl
				prose-p:my-5 prose-p:leading-[1.9]
				prose-a:border-b prose-a:border-black/30 prose-a:font-medium prose-a:text-black prose-a:no-underline hover:prose-a:border-black
				prose-blockquote:border-l-2 prose-blockquote:border-black/20
				prose-blockquote:pl-5 prose-blockquote:text-neutral-500 prose-blockquote:not-italic prose-strong:font-medium prose-strong:text-black
				prose-code:rounded prose-code:bg-black/[0.04] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
				prose-pre:rounded-lg prose-pre:bg-neutral-950 prose-pre:text-neutral-100
				prose-img:rounded-xl
				prose-hr:border-black/10"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html item.bodyHtml}
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
				<ArrowLeft size={14} class="transition-transform group-hover:-translate-x-0.5" />
				All news
			</a>
		</div>
	</article>
</main>

<Footer />
