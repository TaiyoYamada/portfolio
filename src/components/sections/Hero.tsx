"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import { SiQiita, SiX } from "react-icons/si";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center" id="about-me">

            {/* Draggable Shapes (Background Playground) */}
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                className="absolute top-20 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full border-4 border-black shadow-pop cursor-grab active:cursor-grabbing z-10 hidden md:block"
            />
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                className="absolute bottom-40 right-10 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-primary rotate-12 border-4 border-black shadow-pop cursor-grab active:cursor-grabbing z-10 hidden md:block"
            />
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                className="absolute top-40 right-32 w-20 h-20 bg-accent rotate-45 border-4 border-black shadow-pop cursor-grab active:cursor-grabbing z-10 hidden md:block"
            />

            {/* Main Content */}
            <div className="relative z-20 text-center flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-8"
                >
                    <span className="text-2xl md:text-4xl font-black text-black bg-white px-6 py-2 border-2 border-black shadow-pop inline-block">
                        HELLO! I AM
                    </span>
                </motion.div>

                <div className="relative group cursor-default">
                    <h1 className="text-6xl md:text-[10rem] leading-none font-black text-transparent text-outline tracking-tighter hover:text-primary transition-colors duration-300">
                        TAIYO
                    </h1>
                    <h1 className="text-6xl md:text-[10rem] leading-none font-black text-black tracking-tighter -mt-2 md:-mt-8 group-hover:translate-x-4 transition-transform duration-300">
                        YAMADA
                    </h1>

                    {/* Decorative floating elements near text */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-8 -top-8 w-12 h-12 bg-success rounded-full border-2 border-black shadow-pop hidden md:block"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-lg md:text-2xl font-bold text-gray-700 max-w-2xl px-4"
                >
                    Enjoying both <span className="text-accent underline decoration-4 decoration-secondary underline-offset-4">thinking</span> and <span className="text-primary underline decoration-4 decoration-secondary underline-offset-4">building</span>, I create products you can trust.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4 mt-10"
                >
                    {[
                        { Icon: Github, href: "https://github.com/TaiyoYamada", color: "hover:bg-black hover:text-white" },
                        { Icon: SiQiita, href: "https://qiita.com/TaiyoYamada", color: "hover:bg-success hover:text-white" },
                        { Icon: SiX, href: "https://x.com/taiyo_sunsun05", color: "hover:bg-black hover:text-white" },
                        { Icon: Mail, href: "mailto:t-yamada@ilab.pu-kumamoto.ac.jp", color: "hover:bg-accent hover:text-white" },
                    ].map(({ Icon, href, color }, index) => (
                        <a
                            key={index}
                            href={href}
                            className={`p-4 bg-white border-2 border-black shadow-pop rounded-xl ${color} hover:-translate-y-1 hover:shadow-pop-bold transition-all duration-200`}
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 z-20"
            >
                <ArrowDown className="w-8 h-8 text-black border-2 border-black rounded-full p-1 bg-white shadow-pop" />
            </motion.div>
        </div>
    );
}
