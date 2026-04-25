<script lang="ts">
	import { Github, Mail } from 'lucide-svelte';
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
		{ Icon: XIcon, href: 'https://x.com/taiyo_sunsun05', label: 'X' },
		{ Icon: Mail, href: 'mailto:tai09to06y@gmail.com', label: 'Email' }
	];
</script>

<footer class="bg-black text-white">
	<div class="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
		<div class="divide-y divide-white/10 border-t border-b border-white/10">
			<nav class="flex flex-wrap gap-x-6 gap-y-2 py-5" aria-label="Site navigation">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-sm font-medium text-white/75 transition-colors hover:text-white md:text-[15px]"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<nav class="flex flex-wrap gap-x-5 gap-y-2 py-5" aria-label="Social links">
				{#each socials as { Icon, href, label }}
					<a
						{href}
						target={href.startsWith('mailto') ? undefined : '_blank'}
						rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
						class="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white md:text-[15px]"
					>
						<Icon class="h-4 w-4" />
						<span>{label}</span>
					</a>
				{/each}
			</nav>
		</div>

		<div
			class="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-white/40 md:mt-10 md:flex-row md:items-center"
		>
			<p>Copyright &copy; {new Date().getFullYear()} Taiyo Yamada All Rights Reserved.</p>
			<a href="/privacy" class="transition-colors hover:text-white">Privacy Policy</a>
		</div>
	</div>
</footer>
