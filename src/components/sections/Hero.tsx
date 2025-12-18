"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { SiQiita } from "react-icons/si";

export default function Hero() {
    return (
        <div className="relative flex flex-col h-screen w-full" id="about-me">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <h2 className="text-xl md:text-2xl font-light text-primary mb-2 tracking-[0.2em] uppercase">
                        Developer / Student
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter drop-shadow-lg">
                        TaiyoYamada
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    Building products that work reliably and deliver value.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex gap-6"
                >
                    {[
                        { Icon: Github, href: "https://github.com/TaiyoYamada" },
                        { Icon: SiQiita, href: "https://qiita.com/TaiyoYamada" },
                        { Icon: Mail, href: "mailto:t-yamada@ilab.pu-kumamoto.ac.jp" },
                    ].map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            className="p-4 rounded-full glass hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                        >
                            <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
