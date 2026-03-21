<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<div
	class={cn(
		'glass rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
