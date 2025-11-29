"use client";

import Section from "./Section";
import { Card } from "./ui/Card";

const experiences = [
    {
        company: "[ Company Name ]",
        period: "YYYY.MM - YYYY.MM",
        role: "[ Job Title / Position ]",
        details: [
            "[ Specific Responsibility 1 ]",
            "[ Specific Responsibility 2 ]",
        ],
        growth: "[ Skills and mindset gained from this experience ]",
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
