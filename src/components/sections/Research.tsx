"use client";

import Section from "./Section";
import { Card } from "../ui/Card";

const researches = [
    {
        title: "ABCアルゴリズムをオプティマイザとするVQEのノイズ下におけるロバスト性初期評価",
        desc: "量子コンピューティングにおける変分量子固有値法（VQE）の精度向上を目的とした研究。人工蜂コロニー（ABC）アルゴリズムを活用した最適化手法により、ノイズ環境下での初期探索のロバスト性を評価・改善するアプローチを提案。",
        tech: ["Python", "Qiskit", "Quantum Computing", "VQE", "ABC Algorithm"],
        output: "電気学会 全国大会（2026年3月）発表予定",
        status: "ongoing",
    },
];

export default function Research() {
    return (
        <Section id="research" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Research
            </h2>
            <div className="space-y-6">
                {researches.map((item, index) => (
                    <Card key={index} className="p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            {item.status === "ongoing" && (
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                                    Ongoing
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-0.5 rounded-full bg-surface border border-white/10 text-gray-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="bg-surface p-3 rounded-lg border border-white/5">
                            <span className="text-secondary font-semibold block mb-1 uppercase tracking-wider text-xs">
                                Output
                            </span>
                            <span className="text-gray-400 text-sm">{item.output}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
