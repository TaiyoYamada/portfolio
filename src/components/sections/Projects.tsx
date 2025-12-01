"use client";

import Image from "next/image";
import Section from "./Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "[ KUMATOMO ]",
        tech: ["Swift", "Laravel", "Vue.js", "TypeScript"],
        desc: "What I built and what problems I solved. Detailed description goes here.",
        role: "Frontend / Backend / Infra",
        github: "https://github.com/TaiyoYamada/kumatomo",
        image: "/kumatomo.png",
    },
    {
        title: "[ Portfolio ]",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        desc: "What I built and what problems I solved. Detailed description goes here.",
        role: "Frontend / Backend / Infra",
        link: "https://portfolio-seven-mocha-29.vercel.app/",
        github: "https://github.com/TaiyoYamada/portfolio",
        image: "/portfolio.png",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden hover:-translate-y-2 p-0 bg-surface border-white/5">
                        <div className="h-48 bg-white/5 flex items-center justify-center relative overflow-hidden">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                {project.desc}
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                                <span className="text-xs text-gray-500">{project.role}</span>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.link}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
