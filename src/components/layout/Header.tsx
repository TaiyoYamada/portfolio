"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    "About Me",
    "Skills",
    "Projects",
    "Research",
    "Experience",
    "Certifications",
    "Awards",
    "Articles",
    "Contact",
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="text-xl font-bold text-white tracking-wider hover:text-primary transition-colors"
                >
                    TaiyoYamada
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
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

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-gray-300 hover:text-primary transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.nav
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 md:hidden"
                        >
                            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        className="py-3 px-4 text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-colors font-medium"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
