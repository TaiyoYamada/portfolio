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
			tech: ['Swift', 'Laravel', 'Vue.js', 'TypeScript', 'AWS Lambda', 'RDS', 'S3', 'CloudFront', 'Terraform'],
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
			link: 'https://seat-craft.vercel.app/',
			github: 'https://github.com/TaiyoYamada/SeatCraft',
			image: '/seatcraft.png'
		},
		{
			title: 'GiraMatch',
			tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'AWS Lambda', 'API Gateway', 'DynamoDB'],
			desc: 'ギラヴァンツ北九州のファンが試合観戦の同行者を見つけるマッチングWebアプリ。2日間のハッカソンで友人と2人で開発。インフラとバックエンドを担当。',
			shortDesc: 'ハッカソンで開発した、ギラヴァンツファン用マッチングアプリ。',
			role: 'Backend / Infra',
			link: 'https://hakkutsu-app.vercel.app',
			github: 'https://github.com/TaiyoYamada/GiraMatch',
			image: '/giramatch.png'
		}
	];
</script>

<Section id="projects" class="relative z-10 py-20 pb-40">
	<h2 class="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter hover:text-primary transition-colors cursor-default">
		PROJECTS
	</h2>
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0">
		{#each projects as project, index}
			<div
				in:fly={{ y: 50, duration: 800, delay: index * 100 }}
				class="group relative bg-white border-2 border-black shadow-pop rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-pop-bold hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
			>
				<!-- Image Area -->
				<div class="h-28 sm:h-36 md:h-48 w-full relative overflow-hidden border-b-2 border-black shrink-0">
					{#if project.image}
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						/>
					{/if}
					<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
				</div>

				<!-- Content Area -->
				<div class="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
					<div class="flex flex-col xl:flex-row justify-between items-start mb-2 gap-2">
						<h3 class="text-base sm:text-lg md:text-2xl font-black text-black group-hover:text-primary transition-colors uppercase leading-tight">
							{project.title}
						</h3>
						<div class="flex gap-1.5 shrink-0">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="p-1.5 md:p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
								>
									<Github class="w-4 h-4 md:w-[18px] md:h-[18px]" />
								</a>
							{/if}
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="p-1.5 md:p-2 bg-white border-2 border-black rounded-full hover:bg-accent hover:text-white transition-colors"
								>
									<ExternalLink class="w-4 h-4 md:w-[18px] md:h-[18px]" />
								</a>
							{/if}
						</div>
					</div>

					<!-- Desktop: Full Description -->
					<p class="hidden md:block text-sm font-bold text-gray-600 mb-4 leading-relaxed">
						{project.desc}
					</p>
					
					<!-- Mobile: Short Description -->
					<p class="md:hidden text-[11px] sm:text-xs font-bold text-gray-600 mb-3 leading-relaxed">
						{project.shortDesc || project.desc}
					</p>

					<div class="mt-auto flex flex-wrap gap-1 md:gap-2">
						{#each project.tech as t}
							<span class="text-[9px] sm:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded-full border border-black bg-secondary text-black whitespace-nowrap">
								{t.toUpperCase()}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
