import Link from "next/link";
import Section from "./Section";
import { BookOpen } from "lucide-react";
import { getUser, getTopArticlesByLikes } from "@/lib/qiita";

// Force dynamic rendering since we're fetching data
export const dynamic = 'force-dynamic';

const QIITA_USER_ID = "TaiyoYamada";

export default async function Articles() {
    let userData;
    let topArticles;

    try {
        [userData, topArticles] = await Promise.all([
            getUser(QIITA_USER_ID),
            getTopArticlesByLikes(QIITA_USER_ID, 3),
        ]);
    } catch (error) {
        console.error("Failed to fetch Qiita articles:", error);
        return (
            <Section id="articles" className="relative z-10 py-20 bg-white">
                <h2 className="text-6xl md:text-8xl font-black mb-20 text-center text-transparent text-outline tracking-tighter uppercase">
                    Articles
                </h2>
                <div className="text-center font-bold text-xl">
                    <p>Failed to load the latest edition.</p>
                    <a href={`https://qiita.com/${QIITA_USER_ID}`} className="text-primary underline mt-2 inline-block">
                        Check Qiita directly
                    </a>
                </div>
            </Section>
        );
    }

    return (
        <Section id="articles" className="relative z-10 py-20 bg-white border-y-4 border-black">
            <div className="max-w-6xl mx-auto px-4">
                {/* Magazine Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b-4 border-black pb-8 gap-6">
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-black bg-black text-white px-2 py-1 mb-2 uppercase tracking-widest">
                            The Tech Chronicles
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter hover:text-primary transition-colors cursor-default leading-none">
                            ARTICLES
                        </h2>
                    </div>

                    <div className="flex flex-col items-end md:text-right">
                        <div className="bg-primary text-white font-black text-3xl px-6 py-3 border-4 border-black shadow-[4px_4px_0_#000] rotate-2">
                            {userData.items_count} <span className="text-sm font-bold block">POSTS</span>
                        </div>
                        <p className="mt-4 font-bold text-gray-500 text-sm max-w-xs leading-tight">
                            Latest technical insights, tutorials, and engineering journals from Taiyo Yamada.
                        </p>
                    </div>
                </div>

                {/* Newspaper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topArticles.map((article, index) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col h-full"
                        >
                            <article className={`h-full flex flex-col border-4 border-black p-6 bg-surface hover:bg-secondary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 hover:shadow-pop-bold relative overflow-hidden ${index === 0 ? "md:col-span-2 md:p-10" : ""
                                }`}>
                                {/* Corner Fold Effect */}
                                <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-white border-r-black/10 group-hover:border-t-white group-hover:border-r-black/20 transition-colors" />

                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-black border-2 border-black px-2 py-1 rounded bg-white text-black uppercase">
                                        {index === 0 ? "Top Story" : "Featured"}
                                    </span>
                                    <div className="flex items-center gap-1 font-black text-sm">
                                        <BookOpen size={16} />
                                        <span>READ</span>
                                    </div>
                                </div>

                                <h3 className={`font-black text-black leading-tight mb-4 group-hover:underline decoration-4 decoration-black underline-offset-4 ${"text-3xl md:text-5xl"
                                    }`}>
                                    {article.title}
                                </h3>

                                <div className="mt-auto pt-6 border-t-2 border-black border-dashed flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.slice(0, 3).map((tag) => (
                                            <span key={tag.name} className="text-xs font-bold text-gray-600">
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-center leading-none">
                                        <span className="text-2xl font-black text-accent">{article.likes_count}</span>
                                        <span className="text-[10px] font-bold uppercase">Likes</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href={`https://qiita.com/${QIITA_USER_ID}`}
                        target="_blank"
                        className="inline-block px-12 py-4 bg-black text-white font-black text-xl border-2 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-pop transition-all duration-300"
                    >
                        READ MORE ARTICLES &rarr;
                    </Link>
                </div>
            </div>
        </Section>
    );
}
