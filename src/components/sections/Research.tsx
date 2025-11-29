"use client";

import Section from "./Section";
import { Card } from "../ui/Card";

const researches = [
    {
        title: "[ Research Theme / Paper Title ]",
        desc: "Summary of research purpose, methods, and results.",
        tech: "Experimental Environment, Analysis Methods, etc.",
        output: "Conference Presentation / Paper Link",
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
                    <Card key={index} className="p-8 hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{item.desc}</p>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="bg-surface p-4 rounded-lg border border-white/5">
                                <span className="text-secondary font-bold block mb-1 uppercase tracking-wider text-xs">
                                    Tech / Method
                                </span>
                                <span className="text-gray-400">{item.tech}</span>
                            </div>
                            <div className="bg-surface p-4 rounded-lg border border-white/5">
                                <span className="text-secondary font-bold block mb-1 uppercase tracking-wider text-xs">
                                    Output
                                </span>
                                <span className="text-gray-400">{item.output}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
