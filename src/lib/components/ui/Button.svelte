<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outline';
		class?: string;
		children?: Snippet;
	}

	let { variant = 'primary', class: className, children, ...rest }: Props = $props();

	const variants = {
		primary: 'bg-primary text-white hover:bg-primary/80 shadow-[0_0_15px_rgba(124,58,237,0.5)]',
		secondary: 'bg-secondary text-white hover:bg-secondary/80',
		outline: 'border border-primary text-primary hover:bg-primary/10'
	};
</script>

<button
	class={cn(
		'transform rounded-full px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 active:scale-95',
		variants[variant],
		className
	)}
	{...rest}
>
	{@render children?.()}
</button>
