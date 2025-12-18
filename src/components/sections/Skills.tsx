"use client";

import Section from "./Section";
import { Card } from "../ui/Card";
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
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaApple, FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
    name: string;
    level: number;
    icon: IconType;
    color: string;
}

interface SkillCategories {
    [key: string]: Skill[];
}

const skills: SkillCategories = {
    Languages: [
        { name: "Swift", level: 90, icon: SiSwift, color: "#F05138" },
        { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", level: 85, icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", level: 75, icon: SiPython, color: "#3776AB" },
        { name: "PHP", level: 70, icon: SiPhp, color: "#777BB4" },
        { name: "Dart", level: 65, icon: SiDart, color: "#0175C2" },
        { name: "HTML/CSS", level: 90, icon: SiHtml5, color: "#E34F26" },
    ],
    "Frameworks / Libraries": [
        { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Vue.js", level: 75, icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Laravel", level: 80, icon: SiLaravel, color: "#FF2D20" },
        { name: "Flutter", level: 65, icon: SiFlutter, color: "#02569B" },
    ],
    Databases: [
        { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", level: 75, icon: SiMysql, color: "#4479A1" },
        { name: "DynamoDB", level: 70, icon: SiAmazondynamodb, color: "#4053D6" },
    ],
    Infrastructure: [
        { name: "Docker", level: 75, icon: SiDocker, color: "#2496ED" },
        { name: "AWS", level: 70, icon: SiAmazonwebservices, color: "#FF9900" },
        { name: "XServer", level: 80, icon: SiVercel, color: "#FF6A00" },
        { name: "Supabase", level: 80, icon: SiSupabase, color: "#3FCF8E" },
        { name: "Vercel", level: 85, icon: SiVercel, color: "#FFFFFF" },
    ],
    Tools: [
        { name: "Xcode", level: 90, icon: FaApple, color: "#147EFB" },
        { name: "VSCode", level: 90, icon: VscVscode, color: "#007ACC" },
        { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
        { name: "GitHub", level: 90, icon: SiGithub, color: "#FFFFFF" },
        { name: "Figma", level: 60, icon: SiFigma, color: "#F24E1E" },
        { name: "Postman", level: 80, icon: SiPostman, color: "#FF6C37" },
        { name: "Sequel Ace", level: 75, icon: FaDatabase, color: "#F8C51C" },
        { name: "Postico 2", level: 75, icon: FaDatabase, color: "#4169E1" },
    ],
};

function SkillItem({ skill, index }: { skill: Skill; index: number }) {
    const Icon = skill.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 py-2"
        >
            <div
                className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
                style={{ color: skill.color }}
            >
                <Icon size={20} />
            </div>
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <Section id="skills" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full hover:border-primary/30 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-4">
                                {category}
                            </h3>
                            <div className="space-y-1">
                                {items.map((skill, index) => (
                                    <SkillItem key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
