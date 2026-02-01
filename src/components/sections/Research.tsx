"use client";

import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const researches = [
    {
        title: "ABCアルゴリズムをオプティマイザとするVQEのノイズ下におけるロバスト性初期評価",
        desc: "量子コンピューティングにおける変分量子固有値法（VQE）の精度向上を目的とした研究。人工蜂コロニー（ABC）アルゴリズムを活用した最適化手法により、ノイズ環境下での初期探索のロバスト性を評価・改善するアプローチを提案。",
        tech: ["Python", "Qiskit", "Quantum Computing", "VQE", "ABC Algorithm"],
        output: "令和8年 電気学会 全国大会 発表",
        status: "ongoing",
    },
];

export default function Research() {
    return (
        <Section id="research" className="relative z-10 py-20 bg-primary/5">
            <h2 className="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter hover:text-secondary transition-colors cursor-default">
                RESEARCH
            </h2>
            <div className="flex flex-col items-center space-y-12">
                {researches.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, rotate: -5, y: 50 }}
                        whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -2 : 2, y: 0 }}
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full max-w-4xl bg-white border-2 border-black shadow-pop p-8 md:p-12 hover:shadow-pop-bold transition-all duration-300"
                    >
                        {/* Decorative 'Paper Clip' or 'Tape' */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary/80 -rotate-1 border-2 border-black/20" />

                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary text-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg">
                                    <FileText size={24} />
                                </div>
                                {item.status === "ongoing" && (
                                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-accent text-white border-2 border-black rounded-full animate-pulse">
                                        Ongoing
                                    </span>
                                )}
                            </div>
                            <span className="hidden md:block text-xs font-bold text-gray-400 uppercase tracking-widest border-b-2 border-gray-200 pb-1">
                                Research Paper
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black mb-4 text-black leading-tight">
                            {item.title}
                        </h3>

                        <p className="text-gray-700 text-base md:text-lg font-medium mb-8 leading-relaxed border-l-4 border-secondary pl-4">
                            {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {item.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-bold px-3 py-1 bg-white border border-black rounded-md shadow-[2px_2px_0px_#000] text-black"
                                >
                                    #{t}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t-2 border-black/10 pt-4 mt-auto">
                            <span className="text-sm font-bold text-black flex items-center gap-2">
                                <span className="w-2 h-2 bg-success rounded-full border border-black" />
                                {item.output}
                            </span>
                            <ArrowUpRight className="text-black w-6 h-6" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
