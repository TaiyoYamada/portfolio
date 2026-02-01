"use client";

import Image from "next/image";
import Section from "./Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "KUMATOMO",
        tech: ["Swift", "Laravel", "Vue.js", "TypeScript"],
        desc: "熊本県に特化した地域密着型SNSアプリ。（開発中）地元店舗やユーザー同士のつながりを促進することを目的に、モバイルアプリからバックエンドまで一貫して設計・開発。",
        role: "Frontend / Backend / Infra",
        github: "https://github.com/TaiyoYamada/kumatomo",
        image: "/kumatomo.png",
    },
    {
        title: "Portfolio",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        desc: "山田大陽のポートフォリオサイト。これまでに取り組んできたプロジェクトや技術スタックを整理し、自身の関心領域や開発スタイルが伝わるよう設計。",
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
        <Section id="projects" className="relative z-10 py-20 pb-40">
            <h2 className="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter hover:text-primary transition-colors cursor-default">
                PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white border-2 border-black shadow-pop rounded-3xl overflow-hidden hover:shadow-pop-bold hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
                    >
                        {/* Image Area */}
                        <div className="h-48 w-full relative overflow-hidden border-b-2 border-black shrink-0">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            )}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-black text-black group-hover:text-primary transition-colors uppercase">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 shrink-0">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white border-2 border-black rounded-full hover:bg-accent hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm font-bold text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={t}
                                        className="text-xs font-black px-3 py-1 rounded-full border border-black bg-secondary text-black"
                                    >
                                        {t.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
