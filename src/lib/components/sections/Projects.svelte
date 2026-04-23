<script lang="ts">
	import Section from './Section.svelte';
	import { ExternalLink, Github } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const projects = [
		{
			title: 'Qbitrun',
			tech: ['SwiftUI', 'UIKit', 'SpriteKit', 'SceneKit'],
			desc: 'Swift Student Challenge 2026 提出作品。単一量子ビットゲートを操作してブロッホ球上の状態ベクトルを目的の位置に合わせ、得点を稼ぐゲームアプリ。',
			shortDesc: 'Swift Student Challenge 2026 提出作品。',
			role: 'Full Stack',
			github: 'https://github.com/TaiyoYamada/Qbitrun',
			image: '/qbitrun.png'
		},
		{
			title: 'KUMATOMO',
			tech: [
				'Swift',
				'Laravel',
				'Vue.js',
				'TypeScript',
				'AWS Lambda',
				'RDS',
				'S3',
				'CloudFront',
				'Terraform'
			],
			desc: '熊本県に特化した地域密着型SNSアプリ。（学習用）地元店舗やユーザー同士のつながりを促進することを目的に、モバイルアプリからバックエンドまで一貫して設計・開発。',
			shortDesc: '熊本県に特化した地域密着型SNSアプリ。（学習用）',
			role: 'Frontend / Backend / Infra',
			github: 'https://github.com/TaiyoYamada/kumatomo',
			image: '/kumatomo.png'
		},
		{
			title: 'Portfolio',
			tech: ['SvelteKit', 'Svelte', 'TypeScript', 'Tailwind CSS'],
			desc: '山田大陽のポートフォリオサイト。これまでに取り組んできたプロジェクトや技術スタックを整理し、自身の関心領域や開発スタイルが伝わるよう設計。',
			shortDesc: 'これまでの実績や開発スタイルをまとめたポートフォリオサイト。',
			role: 'Frontend / Backend / Infra',
			link: 'https://taiyoyamada.com/',
			github: 'https://github.com/TaiyoYamada/portfolio',
			image: '/portfolio.png'
		},
		{
			title: 'SeatCraft',
			tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS Lambda', 'DynamoDB', 'API Gateway'],
			desc: '飲み会の席決めをテーマにしたWebアプリ。友人とハッカソンで対決し、5時間程度で開発。',
			shortDesc: '飲み会席決めWebアプリ。',
			role: 'Frontend / Backend / Infra',
			github: 'https://github.com/TaiyoYamada/SeatCraft',
			image: '/seatcraft.png'
		},
		{
			title: 'GiraMatch',
			tech: [
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'Node.js',
				'Express',
				'AWS Lambda',
				'API Gateway',
				'DynamoDB'
			],
			desc: 'ギラヴァンツ北九州のファンが試合観戦の同行者を見つけるマッチングWebアプリ。2日間のハッカソンで友人と2人で開発。インフラとバックエンドを担当。',
			shortDesc: 'ハッカソンで開発した、ギラヴァンツファン用マッチングアプリ。',
			role: 'Backend / Infra',
			github: 'https://github.com/TaiyoYamada/GiraMatch',
			image: '/giramatch.png'
		}
	];
</script>

<Section id="projects" class="relative z-10 py-20 pb-40">
	<h2
		class="text-outline mb-20 cursor-default text-center text-6xl font-black tracking-tighter text-transparent transition-colors hover:text-primary md:text-8xl"
	>
		PROJECTS
	</h2>
	<div class="grid grid-cols-2 gap-4 px-2 md:gap-8 md:px-0 lg:grid-cols-3">
		{#each projects as project, index}
			<div
				in:fly={{ y: 50, duration: 800, delay: index * 100 }}
				class="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-pop transition-all duration-300 hover:-translate-y-2 hover:shadow-pop-bold md:rounded-3xl"
			>
				<!-- Image Area -->
				<div
					class="relative h-28 w-full shrink-0 overflow-hidden border-b-2 border-black sm:h-36 md:h-48"
				>
					{#if project.image}
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					{/if}
					<div
						class="pointer-events-none absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</div>

				<!-- Content Area -->
				<div class="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
					<div class="mb-2 flex flex-col items-start justify-between gap-2 xl:flex-row">
						<h3
							class="text-base leading-tight font-black text-black uppercase transition-colors group-hover:text-primary sm:text-lg md:text-2xl"
						>
							{project.title}
						</h3>
						<div class="flex shrink-0 gap-1.5">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-full border-2 border-black bg-white p-1.5 transition-colors hover:bg-black hover:text-white md:p-2"
								>
									<Github class="h-4 w-4 md:h-[18px] md:w-[18px]" />
								</a>
							{/if}
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-full border-2 border-black bg-white p-1.5 transition-colors hover:bg-accent hover:text-white md:p-2"
								>
									<ExternalLink class="h-4 w-4 md:h-[18px] md:w-[18px]" />
								</a>
							{/if}
						</div>
					</div>

					<!-- Desktop: Full Description -->
					<p class="mb-4 hidden text-sm leading-relaxed font-bold text-gray-600 md:block">
						{project.desc}
					</p>

					<!-- Mobile: Short Description -->
					<p class="mb-3 text-[11px] leading-relaxed font-bold text-gray-600 sm:text-xs md:hidden">
						{project.shortDesc || project.desc}
					</p>

					<div class="mt-auto flex flex-wrap gap-1 md:gap-2">
						{#each project.tech as t}
							<span
								class="rounded-full border border-black bg-secondary px-1.5 py-0.5 text-[9px] font-black whitespace-nowrap text-black sm:text-[10px] md:px-2 md:py-1"
							>
								{t.toUpperCase()}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
