"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link href="/" className="text-xl font-bold text-white tracking-wider hover:text-primary transition-colors">
                    TaiyoYamada
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        "About Me",
                        "Skills",
                        "Projects",
                        // "Research",
                        "Experience",
                        "Awards",
                        "Articles",
                        "Contact",
                    ].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors tracking-wide"
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile Menu Button (Optional, for now just hidden on mobile) */}
                <div className="md:hidden">
                    {/* Placeholder for mobile menu */}
                </div>
            </div>
        </motion.header>
    );
}
