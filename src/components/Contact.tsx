"use client";

import Section from "./Section";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Contact
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex gap-4">
                        {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                            >
                                <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href="mailto:email@example.com"
                            className="text-xl font-bold text-white hover:text-primary transition-colors"
                        >
                            email@example.com
                        </a>
                    </div>
                </div>

                <Card className="p-8">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
}
