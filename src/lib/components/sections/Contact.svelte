<script lang="ts">
	import { Github, Mail, ArrowUpRight } from 'lucide-svelte';
	import QiitaIcon from '$lib/components/icons/QiitaIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { env } from '$env/dynamic/public';

	const WEB3FORMS_KEY = env.PUBLIC_WEB3FORMS_KEY ?? '';

	const socials = [
		{ Icon: Github, href: 'https://github.com/TaiyoYamada', label: 'GitHub' },
		{ Icon: QiitaIcon, href: 'https://qiita.com/TaiyoYamada', label: 'Qiita' },
		{ Icon: XIcon, href: 'https://x.com/taiyo_sunsun05', label: 'X' },
		{
			Icon: Mail,
			href: 'mailto:tai09to06y@gmail.com',
			label: 'Email'
		}
	];

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMsg = $state('');

	async function onSubmit(e: Event) {
		e.preventDefault();
		if (status === 'submitting') return;
		if (!WEB3FORMS_KEY) {
			status = 'error';
			errorMsg = 'フォームが未設定です (Access Key が必要)。';
			return;
		}

		status = 'submitting';
		errorMsg = '';

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_KEY,
					from_name: 'Portfolio Contact',
					subject: `Contact from ${name || 'anonymous'}`,
					name,
					email,
					message
				})
			});
			const data = await res.json();
			if (data.success) {
				status = 'success';
				name = '';
				email = '';
				message = '';
			} else {
				status = 'error';
				errorMsg = data.message || '送信に失敗しました。';
			}
		} catch (err) {
			status = 'error';
			errorMsg = err instanceof Error ? err.message : 'ネットワークエラー';
		}
	}

	function resetStatus() {
		if (status !== 'idle') status = 'idle';
	}
</script>

<section id="contact" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-5xl px-5 md:px-8">
		<header class="mb-14 md:mb-20">
			<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
				Say hello
			</p>
			<h1 class="text-5xl font-medium tracking-tight text-black md:text-7xl">Contact</h1>
		</header>

		<div class="grid grid-cols-1 gap-16 md:grid-cols-[1fr_340px] md:gap-20">
			<!-- Left: form -->
			<div>
				<p class="mb-10 text-base leading-[1.8] text-neutral-700 md:text-lg">
					共同プロジェクト、インターン、雑談、何でもお気軽に。
					<br class="hidden md:block" />
					基本的にすべてのメッセージに返信しています。
				</p>

				{#if status === 'success'}
					<div class="border-t border-b border-black/10 py-12 text-center">
						<p class="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
							Thanks
						</p>
						<p class="mt-3 text-xl font-medium tracking-tight text-black md:text-2xl">
							受信しました。
						</p>
						<p class="mt-3 text-sm text-neutral-500">
							内容を確認して、できるだけ早めに返信します。
						</p>
						<button
							type="button"
							onclick={() => (status = 'idle')}
							class="mt-8 text-xs font-medium tracking-tight text-neutral-500 underline-offset-4 hover:text-black hover:underline"
						>
							もう一度送る
						</button>
					</div>
				{:else}
					<form onsubmit={onSubmit} class="space-y-8" novalidate>
						<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div class="flex flex-col gap-2">
								<label
									for="cf-name"
									class="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase"
								>
									Name
								</label>
								<input
									id="cf-name"
									type="text"
									bind:value={name}
									oninput={resetStatus}
									required
									class="border-0 border-b border-black/15 bg-transparent px-0 py-2.5 text-base font-medium tracking-tight text-black placeholder:text-neutral-300 focus:border-black focus:outline-none"
									placeholder="山田 太郎"
									autocomplete="name"
								/>
							</div>

							<div class="flex flex-col gap-2">
								<label
									for="cf-email"
									class="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase"
								>
									Email
								</label>
								<input
									id="cf-email"
									type="email"
									bind:value={email}
									oninput={resetStatus}
									required
									class="border-0 border-b border-black/15 bg-transparent px-0 py-2.5 text-base font-medium tracking-tight text-black placeholder:text-neutral-300 focus:border-black focus:outline-none"
									placeholder="you@example.com"
									autocomplete="email"
								/>
							</div>
						</div>

						<div class="flex flex-col gap-2">
							<label
								for="cf-message"
								class="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase"
							>
								Message
							</label>
							<textarea
								id="cf-message"
								bind:value={message}
								oninput={resetStatus}
								required
								rows="6"
								class="resize-none border-0 border-b border-black/15 bg-transparent px-0 py-2.5 text-base font-medium tracking-tight text-black placeholder:text-neutral-300 focus:border-black focus:outline-none"
								placeholder="ご用件をどうぞ"
							></textarea>
						</div>

						<!-- Honeypot -->
						<input
							type="checkbox"
							name="botcheck"
							class="hidden"
							tabindex="-1"
							autocomplete="off"
						/>

						<div class="flex flex-wrap items-center gap-6 pt-2">
							<button
								type="submit"
								disabled={status === 'submitting'}
								class="group inline-flex items-center gap-3 bg-black px-7 py-3.5 text-sm font-medium tracking-tight text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
							>
								{status === 'submitting' ? 'Sending…' : 'Send message'}
								<ArrowUpRight
									size={16}
									strokeWidth={2}
									class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								/>
							</button>

							{#if status === 'error'}
								<p class="text-sm text-accent">{errorMsg}</p>
							{/if}
						</div>
					</form>
				{/if}
			</div>

			<!-- Right: other channels -->
			<aside class="md:pt-2">
				<p class="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">Elsewhere</p>
				<ul class="mt-5 divide-y divide-black/10 border-t border-b border-black/10">
					{#each socials as { Icon, href, label }}
						<li>
							<a
								{href}
								target={href.startsWith('mailto') ? undefined : '_blank'}
								rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
								class="group flex items-center justify-between py-4 transition-colors hover:text-black"
							>
								<span
									class="flex items-center gap-3 text-[15px] font-medium text-neutral-700 group-hover:text-black"
								>
									<Icon class="h-4 w-4" />
									{label}
								</span>
								<ArrowUpRight
									size={14}
									class="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
								/>
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</div>
</section>
