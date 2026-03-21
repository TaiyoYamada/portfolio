<script lang="ts">
	import { Github, Mail } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import Section from './Section.svelte';

	const links = [
		{ Icon: Github, href: 'https://github.com/TaiyoYamada', label: 'GitHub' },
		{ Icon: QiitaIcon, href: 'https://qiita.com/TaiyoYamada', label: 'Qiita' },
		{ Icon: XIcon, href: 'https://x.com/taiyo_sunsun05', label: 'X / Twitter' },
		{ Icon: Mail, href: 'mailto:t-yamada@ilab.pu-kumamoto.ac.jp', label: 'Email' }
	];
</script>

<Section id="contact" class="relative z-10 py-32 bg-secondary text-center overflow-hidden">
	<!-- Background Decoration -->
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 30px 30px;"
	></div>

	<div class="relative z-10 max-w-4xl mx-auto px-4">
		<h2 class="text-6xl md:text-9xl font-black mb-12 text-black tracking-tighter leading-none">
			LET'S<br />TALK?
		</h2>

		<p class="text-base sm:text-xl md:text-2xl font-bold text-black mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
			Always open to new opportunities, collaborations, and fun projects. Drop a message!
		</p>
		<div class="flex justify-center gap-3 sm:gap-6 md:gap-10">
			{#each links as { Icon, href, label }}
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative shrink-0"
				>
					<div class="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border-2 md:border-4 border-black shadow-[2px_2px_0_#000] md:shadow-pop flex items-center justify-center rounded-xl md:rounded-2xl md:group-hover:-translate-y-2 group-hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] md:group-hover:shadow-pop-bold transition-all duration-300">
						<Icon class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black group-hover:scale-110 transition-transform" />
					</div>
					<span class="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 text-[10px] md:text-sm font-black text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white px-1.5 md:px-2 border-2 border-black z-20 pointer-events-none shadow-sm">
						{label}
					</span>
				</a>
			{/each}
		</div>
	</div>
</Section>
