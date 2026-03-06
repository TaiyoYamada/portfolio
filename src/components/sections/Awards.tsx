"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Trophy, Award } from "lucide-react";

// The year is extracted for the giant background typography
const awards = [
    {
        title: "SPAJAM 九州予選 2025・優秀賞",
        year: "2025",
        date: "2025.09.25",
        desc: "48時間でアプリを企画・開発するハッカソンにて、技術力・UX・完成度が評価され優秀賞を受賞。限られた時間での設計、実装、チーム開発力が高く評価された。",
        color: "bg-primary",
        Icon: Trophy
    },
    {
        title: "第2回 KUMAGAKUビジネスプランコンテスト・優秀賞",
        year: "2026",
        date: "2026.02.18",
        desc: "熊本学園大学商学部主催のビジネスプランコンテストにて優秀賞を受賞。開発担当としてプロダクトの技術面を支え、ビジネスプランの実現可能性が高く評価された。",
        color: "bg-secondary",
        Icon: Award
    },
];

export default function Awards() {
    return (
        <Section id="awards" className="relative z-10 py-24 pb-48 overflow-hidden">
            {/* Background elements to add some grid/texture if needed */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <h2 className="text-6xl md:text-8xl font-black mb-24 md:mb-32 text-center text-transparent text-outline tracking-tighter hover:text-secondary transition-colors cursor-default relative z-20">
                AWARDS
            </h2>

            <div className="flex flex-col items-center px-4 md:px-8 max-w-6xl mx-auto space-y-24 md:space-y-40 relative z-20">
                {awards.map((award, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8,
                                delay: 0.1
                            }}
                            className={`relative w-full flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}
                        >
                            {/* Giant Background Year Typography */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0 md:left-12' : 'right-0 md:right-12'} text-[120px] md:text-[200px] lg:text-[280px] font-black text-black/5 -z-10 select-none tracking-tighter leading-none`}
                            >
                                {award.year}
                            </div>

                            {/* Main Award Card */}
                            <motion.div
                                className={`group relative w-full md:w-[85%] lg:w-[75%] flex flex-col md:flex-row bg-white border-4 border-black shadow-pop rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-pop-bold transition-all duration-300 ${isEven ? 'hover:-translate-y-2 hover:-translate-x-2' : 'hover:-translate-y-2 hover:translate-x-2'}`}
                            >
                                {/* Left/Top Side: Icon & Date Array */}
                                <div className={`w-full md:w-1/3 flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-black ${award.color} relative overflow-hidden`}>
                                    {/* Decorative strips */}
                                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rotate-45 transform origin-center" />
                                    <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/20 rotate-45 transform origin-center" />

                                    <div className="relative z-10 bg-white border-4 border-black rounded-full p-4 shadow-pop group-hover:scale-110 transition-transform duration-300">
                                        <award.Icon size={40} className="text-black" strokeWidth={2.5} />
                                    </div>

                                    <div className="relative z-10 mt-0 md:mt-6 bg-white border-2 border-black px-4 py-2 rounded-full shadow-sm">
                                        <span className="font-black text-sm md:text-base text-black tracking-widest">{award.date}</span>
                                    </div>
                                </div>

                                {/* Right/Bottom Side: Content */}
                                <div className="w-full md:w-2/3 p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                                    <div className="mb-4">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-tight group-hover:text-primary transition-colors">
                                            {award.title}
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed">
                                        {award.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-32 md:mt-48 text-center text-gray-400 font-bold uppercase tracking-wide text-sm md:text-base"
            >
                End of Records. But the journey continues.
            </motion.p>
        </Section>
    );
}
