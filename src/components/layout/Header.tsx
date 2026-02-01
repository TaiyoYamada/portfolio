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
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-4 left-0 right-0 max-w-5xl mx-auto z-50 px-4"
            >
                <div className="bg-white border-2 border-black shadow-pop rounded-full px-6 h-16 flex items-center justify-between relative z-50">
                    {/* Logo / Name */}
                    <Link
                        href="/"
                        className="text-lg md:text-xl font-black text-black tracking-tight hover:text-primary transition-colors flex items-center gap-2"
                    >
                        <span className="w-3 h-3 bg-accent rounded-full border border-black" />
                        TaiyoYamada
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                whileHover={{ scale: 1.1, rotate: ((index % 5) - 2) * 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 py-2 text-xs font-bold text-black border border-transparent hover:bg-secondary hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full transition-all"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="xl:hidden p-2 text-black hover:bg-secondary rounded-full border border-transparent hover:border-black transition-all"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
                            onClick={closeMenu}
                        />
                        <motion.nav
                            initial={{ y: -20, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -20, opacity: 0, scale: 0.95 }}
                            className="fixed top-24 left-4 right-4 bg-white border-2 border-black shadow-pop rounded-2xl z-50 p-4 xl:hidden max-h-[80vh] overflow-y-auto"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        onClick={closeMenu}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="p-3 text-lg font-bold text-black hover:bg-primary hover:text-white rounded-xl border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
