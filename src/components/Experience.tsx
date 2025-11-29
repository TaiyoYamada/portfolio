"use client";

import Section from "./Section";
import { Card } from "./ui/Card";

const experiences = [
    {
        company: "ソーイ株式会社",
        period: "2025.01 - 2025.12",
        role: "Web / Mobile Engineer (Intern)",
        details: [
            "Laravel・Vue・Flutter を用いた業務システムの開発",
            "フロントエンドの UI 実装やバックエンド API 設計・実装",
            "バッチ処理の作成、既存コードの改善・デバッグ対応",
            "API ドキュメント作成や仕様整理など開発フロー全体を担当",
        ],
        growth:
            "フルスタック的な視点を獲得。業務開発ならではのタスク管理・仕様理解・チーム開発の基礎が身についた。",
    },
    {
        company: "株式会社ゆめみ",
        period: "2025.10 - 2025.11",
        role: "iOS Engineer Intern",
        details: [
            "SwiftUI・Clean Architecture を用いた機能開発・UI改善",
            "既存コードのリファクタリングや命名・責務分離の改善",
            "テスタブルな設計とアーキテクチャ設計の基礎理解",
            "レビュー文化・ペアプロを通したチーム開発の経験",
        ],
        growth:
            "iOS アプリ開発の設計力が大幅に向上し、アーキテクチャと品質の重要性を理解。プロとして必要なコードの読み書き・改善視点が身についた。",
    },
];


export default function Experience() {
    return (
        <Section id="experience" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Experience
            </h2>
            <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        <span className="absolute -left-[5px] top-8 w-3 h-3 bg-primary rounded-full ring-4 ring-background shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
                        <Card className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                <span className="text-sm text-gray-400 bg-surface border border-white/5 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-secondary font-medium mb-4">{exp.role}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            {exp.growth && (
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">
                                        Key Takeaways
                                    </span>
                                    <p className="text-sm text-gray-400">{exp.growth}</p>
                                </div>
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
}
