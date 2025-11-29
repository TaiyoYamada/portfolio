"use client";

import Section from "./Section";
import { Github, Mail } from "lucide-react";
import { QiitaIcon } from "./icons/QiitaIcon";

export default function Contact() {
    return (
        <Section id="contact" className="mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Contact
            </h2>

            <div className="max-w-3xl mx-auto text-center space-y-10">
                <p className="text-gray-300 text-lg leading-relaxed">
                    I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-8">
                    <a
                        href="https://github.com/TaiyoYamada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                    >
                        <Github className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                    </a>
                    <a
                        href="https://qiita.com/TaiyoYamada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                    >
                        <QiitaIcon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                    </a>
                    <a
                        href="mailto:email@example.com"
                        className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                    >
                        <Mail className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                    </a>
                </div>

                <div>
                    <a
                        href="mailto:email@example.com"
                        className="text-2xl font-bold text-white hover:text-primary transition-colors"
                    >
                        email@example.com
                    </a>
                </div>
            </div>
        </Section>
    );
}
