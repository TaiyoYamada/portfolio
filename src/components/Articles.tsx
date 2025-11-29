"use client";

import Section from "./Section";
import { Card } from "./ui/Card";
import { BookOpen } from "lucide-react";

const articles = [
    {
        title: "[ Article Title ]",
        link: "#",
        desc: "What the article is about.",
    },
    {
        title: "[ Article Title ]",
        link: "#",
        desc: "What the article is about.",
    },
];

export default function Articles() {
    return (
        <Section id="articles" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Articles
            </h2>
            <div className="space-y-4">
                {articles.map((article, index) => (
                    <a key={index} href={article.link} className="block group">
                        <Card className="flex items-start gap-4 p-6 hover:bg-white/10 transition-colors">
                            <div className="mt-1 text-gray-500 group-hover:text-secondary transition-colors">
                                <BookOpen size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-1">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{article.desc}</p>
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </Section>
    );
}
