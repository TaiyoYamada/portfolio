"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Award, GraduationCap } from "lucide-react";

type CertificationType = "certification" | "program";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    type: CertificationType;
    desc?: string;
}

const certifications: Certification[] = [
    // === 資格 ===
    {
        title: "ITパスポート試験",
        issuer: "IPA（独立行政法人情報処理推進機構）",
        date: "2023.09",
        type: "certification",
        desc: "ITを利活用するすべての社会人が備えておくべきIT基礎知識を証明する経済産業省管轄の国家資格。ストラテジ・マネジメント・テクノロジの3分野を学習。",
    },
    {
        title: "量子エンジニア（アニーリング式）エントリー資格",
        issuer: "日本量子コンピューティング協会（JQCA）",
        date: "2025.05",
        type: "certification",
        desc: "量子アニーリングに関する基礎知識とQUBO（二次制約なし二値最適化）実装スキルを証明する資格。組合せ最適化問題への量子コンピュータ適用能力を認定。",
    },
    // === 修了プログラム ===
    {
        title: "量子ソフトウェア勉強会 2025",
        issuer: "大阪大学 量子ソフトウェア研究拠点（QSRH）",
        date: "2025.09",
        type: "program",
        desc: "量子計算・量子アルゴリズムの基礎から、量子機械学習・量子化学計算などの応用分野まで、講義とハンズオンを通じて実践的に学習。Qulacsを用いた量子回路シミュレーションを習得。",
    },
    {
        title: "大規模言語モデル講座 2025 基礎編",
        issuer: "東京大学 松尾・岩澤研究室",
        date: "2025.12",
        type: "program",
        desc: "事前学習・事後学習・ベンチマーク評価など、LLMの学習パイプラインを網羅的に学習。最新の推論モデルを例に、公開モデルやAPIを活用した推論性能向上手法を習得。",
    },
];

export default function Certifications() {
    if (certifications.length === 0) {
        return null;
    }

    return (
        <Section id="certifications" className="relative z-10 py-20 bg-secondary/5">
            <h2 className="text-6xl md:text-8xl font-black mb-24 text-center text-transparent text-outline tracking-tighter hover:text-accent transition-colors cursor-default">
                CERTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -2 : 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: index * 0.1
                        }}
                        className={`relative group bg-white border-4 border-black p-8 shadow-pop hover:shadow-pop-bold hover:-translate-y-2 transition-all duration-300 ${cert.type === "certification" ? "rounded-3xl" : "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                            }`}
                    >
                        {/* Sticker Overlay Effect */}
                        <div className="absolute -top-4 -right-4 bg-accent text-white font-black text-xs px-4 py-2 rotate-12 border-2 border-black shadow-[2px_2px_0_#000]">
                            {cert.date}
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                            <div className={`p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] ${cert.type === "certification" ? "bg-secondary text-black" : "bg-primary text-white"
                                }`}>
                                {cert.type === "certification" ? (
                                    <Award size={32} strokeWidth={2.5} />
                                ) : (
                                    <GraduationCap size={32} strokeWidth={2.5} />
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-black leading-tight mb-1">
                                    {cert.title}
                                </h3>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                    {cert.issuer}
                                </span>
                            </div>
                        </div>

                        {cert.desc && (
                            <p className="text-gray-700 font-bold text-sm leading-relaxed border-t-2 border-black/10 pt-4">
                                {cert.desc}
                            </p>
                        )}

                        {/* Type Badge */}
                        <div className="absolute bottom-4 right-4">
                            <span className={`text-xs font-black uppercase px-2 py-1 border-2 border-black ${cert.type === "certification" ? "bg-white text-black" : "bg-black text-white"
                                }`}>
                                {cert.type}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
