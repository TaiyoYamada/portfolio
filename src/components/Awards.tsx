"use client";

import Section from "./Section";
import { Card } from "./ui/Card";
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
        <Section id="awards" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Awards
            </h2>
            <div className="grid grid-cols-1 place-items-center gap-6">
                {awards.map((award, index) => (
                    <Card key={index} className="flex items-start gap-4 p-6 hover:scale-105 transition-transform">
                        <div className="p-3 bg-primary/20 rounded-full text-primary shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                            <span className="text-sm text-gray-500 block mb-2">{award.date}</span>
                            <p className="text-gray-400 text-sm">{award.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
