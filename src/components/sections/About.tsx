"use client";

import Section from "./Section";
import { Card } from "../ui/Card";

export default function About() {
    return (
        <Section id="about" className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                About Me
            </h2>

            {/* Photo
            <div className="flex justify-center">
                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl w-64 h-64 md:w-80 md:h-80">
                    <Image
                        src="/me.jpg"
                        alt="Profile Photo"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div> */}

            <div className="grid md:grid-cols-1 gap-10 items-center">
                <Card className="p-8 backdrop-blur-md bg-white/5 border-white/10 space-y-4">
                    <h3 className="text-3xl font-bold text-secondary">山田 大陽</h3>
                    <p className="text-gray-300 text-lg">熊本県立大学 / 総合管理学部 / B2</p>
                    <p className="text-gray-300">研究分野：量子アルゴリズム・最適化</p>
                    <p className="text-gray-300">研究室：飯村研究室</p>
                    <p className="text-gray-300">生年月日：2005 / 09 / 26</p>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        大学では、法律や経済、情報を勉強する傍ら、研究室では、量子アルゴリズムの研究やSwiftを中心としたアプリ・SDK開発に取り組んでいます。
                    </p>
                </Card>
            </div>
        </Section>
    );
}
