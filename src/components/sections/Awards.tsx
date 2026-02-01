"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Trophy } from "lucide-react";

const awards = [
    {
        title: "SPAJAM 九州予選 2025・優秀賞",
        date: "2025.09.25",
        desc: "48時間でアプリを企画・開発するハッカソンにて、技術力・UX・完成度が評価され優秀賞を受賞。限られた時間での設計、実装、チーム開発力が高く評価された。",
    },
];

export default function Awards() {
    return (
        <Section id="awards" className="relative z-10 py-20 pb-40">
            <h2 className="text-6xl md:text-8xl font-black mb-24 text-center text-transparent text-outline tracking-tighter hover:text-secondary transition-colors cursor-default">
                AWARDS
            </h2>
            <div className="flex flex-col items-center">

                {/* Trophy Shelf */}
                <div className="relative w-full max-w-2xl px-8 pb-4 border-b-[12px] border-black flex justify-center items-end gap-8 md:gap-16">
                    {/* Shelf Shadow */}
                    <div className="absolute -bottom-6 left-4 right-4 h-4 bg-black/10 rounded-full blur-sm" />

                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -50, rotate: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                bounce: 0.5,
                                delay: index * 0.2
                            }}
                            className="group relative flex flex-col items-center cursor-pointer"
                        >
                            {/* Award Badge/Cup */}
                            <motion.div
                                className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full border-4 border-black flex items-center justify-center p-4 shadow-pop group-hover:shadow-pop-bold group-hover:-translate-y-4 transition-all duration-300"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                            >
                                <Trophy size={48} className="text-black" strokeWidth={2.5} />
                                {/* Shine effect */}
                                <div className="absolute top-2 right-4 w-4 h-4 bg-white rounded-full opacity-50" />
                            </motion.div>

                            {/* Label Card - Always visible */}
                            <div className="absolute top-full mt-6 w-64 md:w-80 bg-white border-2 border-black p-4 shadow-pop rounded-xl z-20 cursor-default">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-black rotate-45" />
                                <span className="block text-xs font-black text-primary mb-1 text-center">
                                    {award.date}
                                </span>
                                <h3 className="text-lg font-black text-black text-center leading-tight mb-2">
                                    {award.title}
                                </h3>
                                <p className="text-xs font-bold text-gray-500 text-center leading-relaxed">
                                    {award.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-center text-gray-400 font-bold uppercase tracking-widest text-sm">
                    Keep Winning.
                </p>
            </div>
        </Section>
    );
}
