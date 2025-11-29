"use client";

import Section from "./Section";
import { Card } from "./ui/Card";

const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "Swift", "HTML/CSS"],
    "Frameworks / Libraries": ["Next.js", "React", "Tailwind CSS", "Three.js", "Framer Motion"],
    "Tools / Infrastructure": ["Git", "Docker", "AWS", "Vercel", "Figma"],
    "Design / Others": ["UI/UX Design", "3D Modeling", "Motion Graphics", "Accessibility"],
};

export default function Skills() {
    return (
        <Section id="skills" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, items], index) => (
                    <Card key={category} className="hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-4">
                            {category}
                        </h3>
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li key={item} className="text-gray-300 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(167,139,250,0.5)]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
