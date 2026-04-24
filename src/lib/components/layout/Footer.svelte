<script lang="ts">
	import { Github } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'News', href: '/news' },
		{ label: 'About', href: '/about' },
		{ label: 'Articles', href: '/articles' },
		{ label: 'Contact', href: '/contact' }
	];

	const socials = [
		{ Icon: Github, href: 'https://github.com/TaiyoYamada', label: 'GitHub' },
		{ Icon: QiitaIcon, href: 'https://qiita.com/TaiyoYamada', label: 'Qiita' },
		{ Icon: XIcon, href: 'https://x.com/taiyo_sunsun05', label: 'X' }
	];
</script>

<footer class="bg-black text-white">
	<div class="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
		<dl class="divide-y divide-white/10 border-t border-b border-white/10">
			<div class="flex flex-col gap-3 py-5 md:grid md:grid-cols-[160px_1fr] md:gap-4">
				<dt class="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">Explore</dt>
				<dd class="flex flex-wrap gap-x-6 gap-y-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm font-medium text-white/75 transition-colors hover:text-white md:text-[15px]"
						>
							{item.label}
						</a>
					{/each}
				</dd>
			</div>

			<div class="flex flex-col gap-3 py-5 md:grid md:grid-cols-[160px_1fr] md:gap-4">
				<dt class="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">Elsewhere</dt>
				<dd class="flex flex-wrap gap-x-5 gap-y-2">
					{#each socials as { Icon, href, label }}
						<a
							{href}
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white md:text-[15px]"
						>
							<Icon class="h-4 w-4" />
							<span>{label}</span>
						</a>
					{/each}
				</dd>
			</div>
		</dl>

		<div
			class="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-white/40 md:mt-10 md:flex-row md:items-center"
		>
			<p>&copy; {new Date().getFullYear()} Taiyo Yamada</p>
			<p class="font-mono">Kumamoto, JP</p>
		</div>
	</div>
</footer>
