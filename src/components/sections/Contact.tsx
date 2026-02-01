import Section from "./Section";
import { Github, Mail } from "lucide-react";
import { SiQiita, SiX } from "react-icons/si";

export default function Contact() {
    return (
        <Section id="contact" className="relative z-10 py-32 bg-secondary text-center overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h2 className="text-6xl md:text-9xl font-black mb-12 text-black tracking-tighter leading-none">
                    LET&apos;S<br />TALK?
                </h2>

                <p className="text-xl md:text-2xl font-bold text-black mb-16 max-w-2xl mx-auto leading-relaxed">
                    Always open to new opportunities, collaborations, and fun projects. Drop a message!
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        { Icon: Github, href: "https://github.com/TaiyoYamada", label: "GitHub" },
                        { Icon: SiQiita, href: "https://qiita.com/TaiyoYamada", label: "Qiita" },
                        { Icon: SiX, href: "https://x.com/taiyo_sunsun05", label: "X / Twitter" },
                        { Icon: Mail, href: "mailto:t-yamada@ilab.pu-kumamoto.ac.jp", label: "Email" },
                    ].map(({ Icon, href, label }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black shadow-pop flex items-center justify-center rounded-2xl group-hover:-translate-y-2 group-hover:shadow-pop-bold transition-all duration-300">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-black text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white px-2 border-2 border-black">
                                {label}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-20">
                    <p className="text-xs font-bold text-black opacity-50 uppercase tracking-widest">
                        Taiyo Yamada Portfolio © 2026
                    </p>
                </div>
            </div>
        </Section>
    );
}
