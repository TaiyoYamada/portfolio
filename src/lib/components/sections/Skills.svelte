<script lang="ts">
	const groups = [
		{
			label: 'Mobile',
			items: ['Swift', 'SwiftUI', 'Flutter']
		},
		{
			label: 'Web',
			items: ['TypeScript', 'React', 'Next.js', 'SvelteKit', 'Vue.js', 'Laravel']
		},
		{
			label: 'Research',
			items: ['Python', 'Qiskit', 'Qulacs', 'VQE', 'ABC Algorithm']
		},
		{
			label: 'Tools',
			items: ['Figma', 'Git', 'GitHub Actions', 'Docker']
		}
	];
</script>

<section class="bg-surface py-14 md:py-20">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-10 md:mb-14">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Stack
			</p>
			<h2 class="text-3xl font-medium tracking-tight text-black md:text-4xl">Tools &amp; Tech</h2>
		</header>

		<dl class="divide-y divide-black/10 border-y border-black/10">
			{#each groups as group}
				<div class="grid grid-cols-[110px_1fr] gap-4 py-5 md:grid-cols-[160px_1fr]">
					<dt class="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">
						{group.label}
					</dt>
					<dd class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-700 md:text-[15px]">
						{#each group.items as item}
							<span>{item}</span>
						{/each}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
