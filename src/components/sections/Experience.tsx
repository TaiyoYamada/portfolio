"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "ソーイ株式会社",
        period: "2025.02 - 2025.12",
        role: "Web / Mobile Engineer (Intern)",
        details: [
            "Laravel・Vue.js・Flutter を用いた業務システムの開発",
            "フロントエンドの UI 実装やバックエンド API 設計・実装",
            "バッチ処理の作成、既存コードの改善・デバッグ対応",
            "API ドキュメント作成やテストなど開発フロー全体を担当",
        ],
        growth: "フルスタック的な視点を獲得。業務開発ならではのタスク管理・仕様理解・チーム開発の基礎が身についた。",
        color: "bg-primary"
    },
    {
        company: "株式会社ゆめみ",
        period: "2025.10 - 2025.11",
        role: "iOS Engineer (Intern)",
        details: [
            "SwiftUIを用いた研修アプリの開発",
            "テスタブルな設計とアーキテクチャ設計の基礎理解",
        ],
        growth: "iOSアプリ開発の設計力が向上し、アーキテクチャと品質の重要性を理解。",
        color: "bg-secondary"
    },
    {
        company: "株式会社松尾研究所",
        period: "2026.02 - present",
        role: "AI Engineer (Intern)",
        details: [],
        growth: "",
        color: "bg-accent"
    },
];

export default function Experience() {
    return (
        <Section id="experience" className="relative z-10 py-20 pb-40 overflow-hidden">
            <h2 className="text-6xl md:text-8xl font-black mb-32 text-center text-transparent text-outline tracking-tighter hover:text-primary transition-colors cursor-default">
                EXPERIENCE
            </h2>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Subway Line - Mobile: centered at 32px (px-4 + node radius), Desktop: center */}
                <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 md:-translate-x-1/2 bg-black rounded-full" />

                <div className="space-y-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Station Node - Mobile: centered at 30px, Desktop: center */}
                            <div className="absolute left-[10px] md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full border-4 border-black bg-white z-20 flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-pop">
                                <div className={`w-6 h-6 rounded-full ${exp.color} border-2 border-black`} />
                            </div>

                            {/* Content Side */}
                            <div className={`w-full md:w-1/2 min-w-0 pl-[72px] md:pl-0 ${index % 2 === 0 ? "md:pl-20 md:pr-10" : "md:pr-20 md:pl-10"
                                }`}>
                                <div className={`bg-white border-2 border-black shadow-pop p-6 rounded-2xl relative group hover:shadow-pop-bold hover:-translate-y-1 transition-all duration-300 text-left`}>

                                    <div className="flex flex-col gap-2 mb-4 items-start">
                                        <span className={`px-4 py-1 text-xs font-black text-white ${exp.color} border-2 border-black rounded-full inline-block shadow-[2px_2px_0_#000]`}>
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-black text-black leading-tight">
                                            {exp.company}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-700 font-bold">
                                            <Briefcase size={16} />
                                            {exp.role}
                                        </div>
                                    </div>

                                    {exp.details.length > 0 && (
                                        <ul className="text-sm font-medium text-gray-600 space-y-1 mb-4 text-left list-disc pl-5">
                                            {exp.details.map((d, i) => (
                                                <li key={i} className="leading-relaxed pl-1">
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {exp.growth && (
                                        <div className="mt-4 pt-4 border-t-2 border-gray-100 text-left">
                                            <span className="text-xs font-black text-primary uppercase tracking-wider block mb-1">
                                                Key Takeaways
                                            </span>
                                            <p className="text-xs font-bold text-gray-500 leading-relaxed">
                                                {exp.growth}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section >
    );
}
