"use client";

import Section from "./Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "[ Project Name 1 ]",
        tech: ["React", "Next.js", "TypeScript"],
        desc: "What I built and what problems I solved. Detailed description goes here.",
        role: "Leader / Frontend",
        link: "#",
        github: "#",
    },
    {
        title: "[ Project Name 2 ]",
        tech: ["Python", "FastAPI", "Docker"],
        desc: "What I built and what problems I solved. Detailed description goes here.",
        role: "Backend / Infra",
        link: "#",
        github: "#",
    },
    {
        title: "[ Project Name 3 ]",
        tech: ["Swift", "SwiftUI", "Firebase"],
        desc: "What I built and what problems I solved. Detailed description goes here.",
        role: "Mobile App",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden hover:-translate-y-2 p-0 bg-surface border-white/5">
                        <div className="h-48 bg-white/5 flex items-center justify-center text-gray-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span>Thumbnail</span>
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
