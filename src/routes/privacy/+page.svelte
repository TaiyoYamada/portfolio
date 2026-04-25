<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';

	const lastUpdated = '2026-04-25';
</script>

<svelte:head>
	<title>Privacy Policy | 山田大陽</title>
	<meta name="description" content="taiyoyamada.dev のプライバシーポリシー。" />
</svelte:head>

<main class="relative min-h-screen pt-28 md:pt-32">
	<section class="bg-white py-20 md:py-28">
		<div class="mx-auto max-w-3xl px-5 md:px-8">
			<header class="mb-14 md:mb-20">
				<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
					Legal
				</p>
				<h1 class="text-5xl font-medium tracking-tight text-black md:text-7xl">Privacy Policy</h1>
				<p class="mt-6 text-sm text-neutral-500">最終更新日: {lastUpdated}</p>
			</header>

			<div
				class="space-y-12 text-[15px] leading-[1.85] text-neutral-700 md:space-y-16 md:text-base"
			>
				<p>
					本サイト（taiyoyamada.com、以下「当サイト」）は、山田大陽が個人で運営する portfolio
					です。当サイトでは、以下のとおり個人情報を取り扱います。
				</p>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						01 — 収集する情報
					</h2>
					<p>お問い合わせフォーム（contact）から送信される以下の情報を取得します。</p>
					<ul class="mt-3 list-disc space-y-1 pl-5">
						<li>お名前</li>
						<li>メールアドレス</li>
						<li>メッセージ本文</li>
					</ul>
					<p class="mt-3">それ以外に、利用者を特定できる情報を意図的に収集することはありません。</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						02 — 利用目的
					</h2>
					<p>
						取得した個人情報は、お問い合わせ内容への返信、および関連する連絡のためにのみ利用します。それ以外の目的で利用することはありません。
					</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						03 — 第三者への提供（Web3Forms）
					</h2>
					<p>
						お問い合わせフォームの送信処理には <a
							href="https://web3forms.com"
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-4 hover:text-black">Web3Forms</a
						>（運営: ICEPLEX
						LLC、米国）を利用しています。フォームから送信された情報は同社のサーバーを経由して運営者に転送されるため、
						<strong class="font-medium text-black">米国への個人データの越境移転</strong>
						が発生します。フォームを送信される場合、これに同意いただいたものとみなします。
					</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						04 — 保管期間
					</h2>
					<p>
						受信したメッセージは原則として 12
						ヶ月以内に削除します。返信およびその後のやり取りに必要な期間のみ保持します。
					</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						05 — Cookie / アクセス解析
					</h2>
					<p>
						当サイトは Cookie の発行を行いません。また、現時点で Google Analytics
						等のアクセス解析ツールも使用していません。
					</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						06 — 開示・訂正・削除のご請求
					</h2>
					<p>
						ご自身の個人情報について開示・訂正・削除をご希望の場合、<a
							href="/contact"
							class="underline underline-offset-4 hover:text-black">お問い合わせフォーム</a
						>よりご連絡ください。本人確認のうえ、合理的な期間内に対応いたします。
					</p>
				</section>

				<section>
					<h2
						class="mb-4 text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase md:mb-5"
					>
						07 — 本ポリシーの改定
					</h2>
					<p>
						本ポリシーの内容は、必要に応じて予告なく改定する場合があります。改定後の内容は本ページに掲載した時点から効力を生じるものとし、最新の内容は冒頭の「最終更新日」をご確認ください。
					</p>
				</section>
			</div>
		</div>
	</section>
	<Footer />
</main>
