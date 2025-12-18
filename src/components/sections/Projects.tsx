"use client";

import Image from "next/image";
import Section from "./Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "KUMATOMO",
        tech: ["Swift", "Laravel", "Vue.js", "TypeScript"],
        desc: "熊本県に特化した地域密着型SNSアプリ。（開発中）地元店舗やユーザー同士のつながりを促進することを目的に、モバイルアプリからバックエンドまで一貫して設計・開発しています。",
        role: "Frontend / Backend / Infra",
        github: "https://github.com/TaiyoYamada/kumatomo",
        image: "/kumatomo.png",
    },
    {
        title: "Portfolio",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        desc: "山田大陽のポートフォリオサイト。これまでに取り組んできたプロジェクトや技術スタックを整理し、自身の関心領域や開発スタイルが伝わるよう設計しました。",
        role: "Frontend / Backend / Infra",
        link: "https://taiyoyamada.com/",
        github: "https://github.com/TaiyoYamada/portfolio",
        image: "/portfolio.png",
    },
    {
        title: "SeatCraft",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Lambda", "AWS DynamoDB", "AWS API Gateway"],
        desc: "飲み会の席決めをテーマにしたWebアプリ。友人とハッカソンで対決し、5時間程度で開発。",
        role: "Frontend / Backend / Infra",
        link: "https://seat-craft.vercel.app/",
        github: "https://github.com/TaiyoYamada/SeatCraft",
        image: "/seatcraft.png",
    },
    {
        title: "GiraMatch",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "AWS Lambda", "AWS API Gateway", "AWS DynamoDB", "Vercel"],
        desc: "ギラヴァンツ北九州のファンが試合観戦の同行者を見つけるマッチングWebアプリ。2日間のハッカソンで友人と2人で開発。インフラとバックエンドを担当。",
        role: "Backend / Infra",
        link: "https://hakkutsu-app.vercel.app",
        github: "https://github.com/TaiyoYamada/GiraMatch",
        image: "/giramatch.png",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden hover:-translate-y-2 p-0 bg-surface border-white/5">
                        <div className="aspect-[5/4] bg-white/5 flex items-center justify-center relative overflow-hidden">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-400 text-xs mb-3">
                                {project.desc}
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/10">
                                <span className="text-[10px] text-gray-500">{project.role}</span>
                                <div className="flex gap-2">
                                    <a
                                        href={project.github}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                    </a>
                                    <a
                                        href={project.link}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
