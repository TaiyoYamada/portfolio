"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import {
    SiSwift,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiPhp,
    SiDart,
    SiHtml5,
    SiNextdotjs,
    SiVuedotjs,
    SiLaravel,
    SiFlutter,
    SiGithub,
    SiDocker,
    SiAmazonwebservices,
    SiSupabase,
    SiVercel,
    SiPostgresql,
    SiMysql,
    SiAmazondynamodb,
    SiFirebase,
    SiGit,
    SiFigma,
    SiPostman,
    SiXcode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaApple, FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

interface SkillCategories {
    [key: string]: Skill[];
}

const skills: SkillCategories = {
    Languages: [
        { name: "Swift", icon: SiSwift, color: "#F05138" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    ],
    "Frameworks / Libraries": [
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
    Databases: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
    ],
    Infrastructure: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
        { name: "XServer", icon: SiVercel, color: "#FF6A00" },
        { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
    Tools: [
        { name: "Xcode", icon: SiXcode, color: "#147EFB" },
        { name: "VSCode", icon: VscVscode, color: "#007ACC" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Sequel Ace", icon: FaDatabase, color: "#F8C51C" },
        { name: "Postico 2", icon: FaDatabase, color: "#4169E1" },
    ],
};

function SkillTile({ skill }: { skill: Skill }) {
    const Icon = skill.icon;

    return (
        <motion.div
            whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 group"
        >
            <div
                className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
            >
                <Icon />
            </div>
            <span className="text-xs font-medium text-gray-300 group-hover:text-white text-center">
                {skill.name}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <Section id="skills" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Skills
            </h2>

            <div className="space-y-12">
                {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <div key={category}>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold mb-6 text-white pl-4 border-l-4 border-primary"
                        >
                            {category}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                        >
                            {items.map((skill) => (
                                <SkillTile key={skill.name} skill={skill} />
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
