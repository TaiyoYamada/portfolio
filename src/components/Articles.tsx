import Section from "./Section";
import { Card } from "./ui/Card";
import { BookOpen, Heart } from "lucide-react";
import { getUser, getTopArticlesByLikes } from "@/lib/qiita";

const QIITA_USER_ID = "TaiyoYamada";

export default async function Articles() {
    try {
        // Fetch user data and top articles concurrently
        const [userData, topArticles] = await Promise.all([
            getUser(QIITA_USER_ID),
            getTopArticlesByLikes(QIITA_USER_ID, 3),
        ]);

        return (
            <Section id="articles" className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
                    Articles
                </h2>

                {/* Articles Count */}
                <div className="text-center mb-12">
                    <p className="text-gray-400 text-lg">
                        Qiita Articles：{" "}
                        <span className="text-primary font-bold text-2xl">
                            {userData.items_count}
                        </span>
                        {" "}articles
                    </p>
                </div>

                {/* Top 3 Articles by Likes */}
                <div className="space-y-4">
                    {topArticles.map((article, index) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <Card className="flex items-start gap-4 p-6 hover:bg-white/10 transition-colors">
                                <div className="mt-1 text-gray-500 group-hover:text-secondary transition-colors flex-shrink-0">
                                    <BookOpen size={20} />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center gap-1 text-pink-400 flex-shrink-0">
                                            <Heart size={16} className="fill-current" />
                                            <span className="font-semibold">{article.likes_count}</span>
                                        </div>
                                    </div>
                                    {article.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {article.tags.slice(0, 5).map((tag) => (
                                                <span
                                                    key={tag.name}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                                                >
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>

                {/* Link to Qiita Profile */}
                <div className="text-center mt-8">
                    <a
                        href={`https://qiita.com/${QIITA_USER_ID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                        View all articles on Qiita →
                    </a>
                </div>
            </Section>
        );
    } catch (error) {
        console.error("Failed to fetch Qiita articles:", error);

        // Error fallback UI
        return (
            <Section id="articles" className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
                    Articles
                </h2>
                <div className="text-center text-gray-400">
                    <p>Unable to load articles at this time.</p>
                    <p className="text-sm mt-2">
                        Please visit{" "}
                        <a
                            href={`https://qiita.com/${QIITA_USER_ID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            my Qiita profile
                        </a>
                        {" "}directly.
                    </p>
                </div>
            </Section>
        );
    }
}
