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

<footer class="relative overflow-hidden bg-black text-white">
	<!-- Floating monochrome lights (Hero language echo) -->
	<div aria-hidden="true" class="orb-faint absolute"></div>
	<div aria-hidden="true" class="orb-glow absolute"></div>
	<div aria-hidden="true" class="orb-spark absolute"></div>
	<div aria-hidden="true" class="orb-mist-d absolute"></div>

	<div class="relative z-10 mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
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

<style>
	.orb-faint,
	.orb-glow,
	.orb-spark,
	.orb-mist-d {
		border-radius: 50%;
		pointer-events: none;
		will-change: transform;
	}

	/* Largest pale halo, bottom-right */
	.orb-faint {
		bottom: -30%;
		right: -10%;
		width: 60vw;
		height: 60vw;
		max-width: 700px;
		max-height: 700px;
		background: radial-gradient(
			circle at 30% 30%,
			rgba(255, 255, 255, 0.18) 0%,
			rgba(200, 200, 200, 0.09) 40%,
			rgba(140, 140, 140, 0.04) 65%,
			transparent 85%
		);
		filter: blur(80px);
		animation: drift 22s ease-in-out infinite;
	}

	/* Mid soft glow upper-left */
	.orb-glow {
		top: -15%;
		left: -5%;
		width: 35vw;
		height: 35vw;
		max-width: 480px;
		max-height: 480px;
		background: radial-gradient(
			circle at 40% 40%,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(180, 180, 180, 0.06) 55%,
			transparent 90%
		);
		filter: blur(70px);
		animation: drift 28s ease-in-out infinite reverse;
		animation-delay: -8s;
	}

	/* Tiny bright pinpoint mid-right */
	.orb-spark {
		top: 35%;
		right: 22%;
		width: 6vw;
		height: 6vw;
		max-width: 90px;
		max-height: 90px;
		background: radial-gradient(
			circle,
			rgba(230, 230, 230, 0.14) 0%,
			rgba(200, 200, 200, 0.06) 55%,
			transparent 100%
		);
		filter: blur(26px);
		opacity: 0.7;
		animation: drift 14s ease-in-out infinite;
		animation-delay: -5s;
	}

	/* Wide diffuse mid-grey wash for depth */
	.orb-mist-d {
		bottom: 5%;
		left: 25%;
		width: 45vw;
		height: 45vw;
		max-width: 560px;
		max-height: 560px;
		background: radial-gradient(
			circle at 50% 50%,
			rgba(255, 255, 255, 0.07) 0%,
			rgba(180, 180, 180, 0.04) 55%,
			transparent 90%
		);
		filter: blur(95px);
		opacity: 0.85;
		animation: drift 32s ease-in-out infinite;
		animation-delay: -12s;
	}

	@keyframes drift {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(20px, -15px) scale(1.04);
		}
		66% {
			transform: translate(-15px, 12px) scale(0.97);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.orb-faint,
		.orb-glow,
		.orb-spark,
		.orb-mist-d {
			animation: none;
		}
	}
</style>
