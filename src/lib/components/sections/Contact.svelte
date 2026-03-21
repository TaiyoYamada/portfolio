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

<Section id="contact" class="relative z-10 overflow-hidden bg-secondary py-32 text-center">
	<!-- Background Decoration -->
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 30px 30px;"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl px-4">
		<h2 class="mb-12 text-6xl leading-none font-black tracking-tighter text-black md:text-9xl">
			LET'S<br />TALK?
		</h2>

		<p
			class="mx-auto mb-10 max-w-2xl px-4 text-base leading-relaxed font-bold text-black sm:text-xl md:mb-16 md:px-0 md:text-2xl"
		>
			Always open to new opportunities, collaborations, and fun projects. Drop a message!
		</p>
		<div class="flex justify-center gap-3 sm:gap-6 md:gap-10">
			{#each links as { Icon, href, label }}
				<a {href} target="_blank" rel="noopener noreferrer" class="group relative shrink-0">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-[2px_2px_0_#000] transition-all duration-300 group-hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-2xl md:border-4 md:shadow-pop md:group-hover:-translate-y-2 md:group-hover:shadow-pop-bold"
					>
						<Icon
							class="h-6 w-6 text-black transition-transform group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10"
						/>
					</div>
					<span
						class="pointer-events-none absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 border-2 border-black bg-white px-1.5 text-[10px] font-black whitespace-nowrap text-black opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:-bottom-8 md:px-2 md:text-sm"
					>
						{label}
					</span>
				</a>
			{/each}
		</div>
	</div>
</Section>
