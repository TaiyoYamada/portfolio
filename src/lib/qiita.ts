/**
 * Qiita API v2 Service Layer
 * 
 * This module provides functions to interact with the Qiita API v2.
 * Documentation: https://qiita.com/api/v2/docs
 */

const QIITA_API_BASE = "https://qiita.com/api/v2";

// TypeScript interfaces for Qiita API responses
export interface QiitaTag {
    name: string;
    versions: string[];
}

export interface QiitaArticle {
    id: string;
    title: string;
    url: string;
    likes_count: number;
    created_at: string;
    updated_at: string;
    tags: QiitaTag[];
    user: {
        id: string;
        name: string;
        profile_image_url: string;
    };
}

export interface QiitaUser {
    id: string;
    name: string;
    description: string;
    items_count: number;
    followers_count: number;
    followees_count: number;
    profile_image_url: string;
}

/**
 * Fetch user information from Qiita API
 * @param userId - Qiita user ID
 * @returns User information including Articles count
 */
export async function getUser(userId: string): Promise<QiitaUser> {
    const token = process.env.QIITA_API_TOKEN;

    if (!token) {
        throw new Error("QIITA_API_TOKEN is not configured in environment variables");
    }

    const response = await fetch(`${QIITA_API_BASE}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

/**
 * Fetch all articles for a specific user with pagination
 * @param userId - Qiita user ID
 * @param perPage - Number of items per page (max 100)
 * @returns Array of articles
 */
export async function getUserArticles(
    userId: string,
    perPage: number = 100
): Promise<QiitaArticle[]> {
    const token = process.env.QIITA_API_TOKEN;

    if (!token) {
        throw new Error("QIITA_API_TOKEN is not configured in environment variables");
    }

    let allArticles: QiitaArticle[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(
            `${QIITA_API_BASE}/users/${userId}/items?page=${page}&per_page=${perPage}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
        }

        const articles: QiitaArticle[] = await response.json();

        if (articles.length === 0) {
            hasMore = false;
        } else {
            allArticles = [...allArticles, ...articles];
            page++;

            // Stop if we got less than perPage items (last page)
            if (articles.length < perPage) {
                hasMore = false;
            }
        }
    }

    return allArticles;
}

/**
 * Get top N articles sorted by likes count
 * @param userId - Qiita user ID
 * @param limit - Number of top articles to return
 * @returns Top articles sorted by likes_count in descending order
 */
export async function getTopArticlesByLikes(
    userId: string,
    limit: number = 3
): Promise<QiitaArticle[]> {
    const articles = await getUserArticles(userId);

    // Sort by likes_count in descending order and take top N
    return articles
        .sort((a, b) => b.likes_count - a.likes_count)
        .slice(0, limit);
}
