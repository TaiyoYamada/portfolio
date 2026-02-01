"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";

export default function About() {
    return (
        <Section id="about" className="relative z-10 py-20 flex flex-col items-center">
            <div className="relative">
                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-12 -left-12 z-20"
                >
                    <span className="block bg-accent text-white font-black text-xl px-4 py-2 -rotate-12 border-4 border-black shadow-[4px_4px_0_#000]">
                        WHO IS HE?
                    </span>
                </motion.div>

                {/* Polaroid Card */}
                <motion.div
                    initial={{ rotate: 2, y: 50, opacity: 0 }}
                    whileInView={{ rotate: -2, y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="bg-white p-6 pb-20 max-w-xl w-full border-4 border-black shadow-pop-bold relative transform transition-transform hover:rotate-0 hover:scale-[1.02] duration-300"
                >
                    {/* Tape */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-gray-200/80 rotate-1 shadow-sm backdrop-blur-sm z-10" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Profile Image Area */}
                        <div className="w-full md:w-48 aspect-square bg-surface border-2 border-black relative overflow-hidden group">
                            <Image
                                src="/me.png"
                                alt="Taiyo Yamada"
                                fill
                                className="object-cover transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />
                        </div>

                        <div className="space-y-4 flex-1">
                            <div>
                                <h3 className="text-4xl font-black text-black leading-none mb-1">
                                    Taiyo Yamada
                                </h3>
                                <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
                                    Developer / Student / Researcher
                                </p>
                            </div>

                            <div className="space-y-2 text-black font-medium leading-relaxed">
                                <p>
                                    熊本県立大学 総合管理学部 B2。<br />
                                    松尾研究所 共同研究インターン生。<br />
                                    大学では、法律・経済・情報を学びながら、研究室では <span className="underline decoration-4 decoration-primary/30 underline-offset-2">量子アルゴリズム</span> の研究や <span className="underline decoration-4 decoration-primary/30 underline-offset-2">Swift</span> を中心としたアプリやSDKの開発を行っています。
                                </p>
                                <p className="text-sm text-gray-600">
                                    Born: 2005.09.26<br />
                                    From: Kumamoto, Japan
                                </p>
                            </div>

                            {/* Stickers */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["iOS", "AI", "Quantum"].map((tag, i) => (
                                    <span key={i} className={`inline-block px-3 py-1 text-xs font-black border-2 border-black bg-white shadow-[2px_2px_0_#000] ${i % 2 === 0 ? "hover:bg-accent hover:text-white" : "hover:bg-primary hover:text-white"
                                        } transition-colors cursor-default`}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Handwriting */}
                    <div className="absolute bottom-6 right-8 rotate-[-4deg]">
                        <span className="font-heading font-black text-gray-400 opacity-50 text-2xl">
                            nice to meet you!
                        </span>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
