<script lang="ts">
	import { cn } from '$lib/utils';
	import { inview } from '$lib/actions/inview';
	import { fly } from 'svelte/transition';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		id?: string;
		class?: string;
		delay?: number;
		children?: Snippet;
	}

	let { id, class: className, delay = 0, children, ...rest }: Props = $props();

	let visible = $state(false);
</script>

<section
	{id}
	use:inview={{ threshold: 0.1, once: true, onEnter: () => (visible = true) }}
	class={cn('py-20 px-4 md:px-8 max-w-7xl mx-auto', className)}
	{...rest}
>
	{#if visible}
		<div in:fly={{ y: 50, duration: 800, delay: delay * 1000 }}>
			{@render children?.()}
		</div>
	{/if}
</section>
