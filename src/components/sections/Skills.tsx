// "use client";

// import Section from "./Section";
// import { motion } from "framer-motion";
// import {
//     SiSwift,
//     SiTypescript,
//     SiJavascript,
//     SiPython,
//     SiPhp,
//     SiDart,
//     SiHtml5,
//     SiNextdotjs,
//     SiVuedotjs,
//     SiLaravel,
//     SiFlutter,
//     SiGithub,
//     SiDocker,
//     SiAmazonwebservices,
//     SiSupabase,
//     SiVercel,
//     SiPostgresql,
//     SiMysql,
//     SiAmazondynamodb,

//     SiGit,
//     SiFigma,
//     SiPostman,
//     SiXcode,
// } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";
// import { FaDatabase } from "react-icons/fa";
// import { IconType } from "react-icons";

// interface Skill {
//     name: string;
//     icon: IconType;
//     color: string;
// }

// interface SkillCategories {
//     [key: string]: Skill[];
// }

// const skills: SkillCategories = {
//     Languages: [
//         { name: "Swift", icon: SiSwift, color: "#F05138" },
//         { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//         { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//         { name: "Python", icon: SiPython, color: "#3776AB" },
//         { name: "PHP", icon: SiPhp, color: "#777BB4" },
//         { name: "Dart", icon: SiDart, color: "#0175C2" },
//         { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
//     ],
//     "Frameworks / Libraries": [
//         { name: "Next.js", icon: SiNextdotjs, color: "#000000ff" },
//         { name: "Vue.js", icon: SiVuedotjs, color: "#305130ff" },
//         { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
//         { name: "Flutter", icon: SiFlutter, color: "#02569B" },
//     ],
//     Databases: [
//         { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
//         { name: "MySQL", icon: SiMysql, color: "#4479A1" },
//         { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
//     ],
//     Infrastructure: [
//         { name: "Docker", icon: SiDocker, color: "#2496ED" },
//         { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
//         { name: "XServer", icon: SiVercel, color: "#FF6A00" },
//         { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
//         { name: "Vercel", icon: SiVercel, color: "#409a46ff" },
//     ],
//     Tools: [
//         { name: "Xcode", icon: SiXcode, color: "#147EFB" },
//         { name: "VSCode", icon: VscVscode, color: "#007ACC" },
//         { name: "Git", icon: SiGit, color: "#F05032" },
//         { name: "GitHub", icon: SiGithub, color: "#000000ff" },
//         { name: "Figma", icon: SiFigma, color: "#F24E1E" },
//         { name: "Postman", icon: SiPostman, color: "#FF6C37" },
//         { name: "Sequel Ace", icon: FaDatabase, color: "#F8C51C" },
//         { name: "Postico 2", icon: FaDatabase, color: "#4169E1" },
//     ],
// };



// export default function Skills() {
//     return (
//         <Section id="skills" className="relative z-10 py-20">
//             <h2 className="text-6xl md:text-8xl font-black mb-16 text-center text-transparent text-outline tracking-tighter hover:text-primary transition-colors cursor-default">
//                 SKILLS
//             </h2>

//             <div className="max-w-6xl mx-auto px-4">
//                 <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//                     {Object.values(skills).flatMap((items) =>
//                         items.map((skill, index) => {
//                             const randomSeed = skill.name.charCodeAt(0) + index;
//                             return (
//                                 <motion.div
//                                     key={skill.name}
//                                     initial={{ opacity: 0, scale: 0 }}
//                                     whileInView={{ opacity: 1, scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.05 }}
//                                     className="group relative"
//                                 >
//                                     <motion.div
//                                         animate={{
//                                             y: [0, -8 - (randomSeed % 5), 0],
//                                             rotate: [0, (randomSeed % 5) - 2.5, 0]
//                                         }}
//                                         transition={{
//                                             duration: 2 + (randomSeed % 2),
//                                             repeat: Infinity,
//                                             ease: "easeInOut",
//                                             delay: (randomSeed % 20) / 10
//                                         }}
//                                         whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
//                                         className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-4 bg-white border-2 border-black shadow-pop rounded-full cursor-default hover:shadow-pop-hover transition-shadow"
//                                     >
//                                         <skill.icon className="text-xl md:text-2xl" style={{ color: skill.color }} />
//                                         <span className="text-xs md:text-base font-black text-black uppercase tracking-wide">
//                                             {skill.name}
//                                         </span>
//                                     </motion.div>
//                                 </motion.div>
//                             )
//                         })
//                     )}
//                 </div>
//             </div>

//             {/* Decoration */}
//             <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute top-10 right-10 w-24 h-24 border-4 border-dashed border-black rounded-full opacity-20 pointer-events-none"
//             />
//         </Section>
//     );
// }

export default function Skills() {
    return null;
}
