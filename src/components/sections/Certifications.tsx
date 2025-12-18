"use client";

import Section from "./Section";
import { Card } from "../ui/Card";
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
        issuer: "日本量子コンピューティング協会（JQCA）/ ZebraQuantum",
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
        <Section id="certifications" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Certifications / Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
                {certifications.map((cert, index) => (
                    <Card
                        key={index}
                        className="flex items-start gap-4 p-6 hover:scale-105 transition-transform"
                    >
                        <div
                            className={`p-3 rounded-full shadow-lg ${cert.type === "certification"
                                ? "bg-secondary/20 text-secondary shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                                : "bg-primary/20 text-primary shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                                }`}
                        >
                            {cert.type === "certification" ? (
                                <Award size={24} />
                            ) : (
                                <GraduationCap size={24} />
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span
                                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cert.type === "certification"
                                        ? "bg-secondary/20 text-secondary border border-secondary/30"
                                        : "bg-primary/20 text-primary border border-primary/30"
                                        }`}
                                >
                                    {cert.type === "certification" ? "Certification" : "Program"}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                            <span className="text-sm text-gray-500 block mb-1">{cert.issuer}</span>
                            <span className="text-xs text-gray-600 block mb-2">{cert.date}</span>
                            {cert.desc && (
                                <p className="text-gray-400 text-sm">{cert.desc}</p>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
