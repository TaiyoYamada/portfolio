"use client";

import Section from "./Section";
import { Card } from "./ui/Card";

export default function About() {
    return (
        <Section id="about" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <Card className="p-8 backdrop-blur-md bg-white/5 border-white/10">
                    <p className="text-lg leading-relaxed text-gray-300">
                        [ Here is a brief introduction about myself. Summarize my background, what I am currently focusing on, and my future goals in about 100-200 characters. ]
                    </p>
                </Card>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="p-6 hover:bg-white/10 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-2 text-secondary">[ Strength {i} ]</h3>
                            <p className="text-gray-400">[ Brief explanation supporting this strength ]</p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
