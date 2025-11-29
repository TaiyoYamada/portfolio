import { NextRequest, NextResponse } from "next/server";
import { getUser, getTopArticlesByLikes } from "@/lib/qiita";

/**
 * GET /api/qiita/articles
 * 
 * Fetch Qiita user data and top articles by likes count.
 * Cached for 24 hours (86400 seconds).
 * 
 * Query Parameters:
 * - userId: Qiita user ID (default: "TaiyoYamada")
 * - limit: Number of top articles to fetch (default: 3)
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get("userId") || "TaiyoYamada";
        const limit = parseInt(searchParams.get("limit") || "3", 10);

        // Fetch user data and top articles concurrently
        const [userData, topArticles] = await Promise.all([
            getUser(userId),
            getTopArticlesByLikes(userId, limit),
        ]);

        return NextResponse.json(
            {
                success: true,
                data: {
                    user: userData,
                    topArticles,
                },
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
                },
            }
        );
    } catch (error) {
        console.error("Error fetching Qiita articles:", error);

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Failed to fetch articles",
            },
            { status: 500 }
        );
    }
}

// Enable static generation with revalidation
export const revalidate = 86400; // Revalidate every 24 hours (1 day)
