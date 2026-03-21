import { getUser, getTopArticlesByLikes } from '$lib/qiita';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		setHeaders({
			'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200'
		});

		const userId = 'TaiyoYamada';
		const limit = 3;

		const [userData, topArticles] = await Promise.all([
			getUser(userId),
			getTopArticlesByLikes(userId, limit)
		]);

		return {
			qiita: {
				user: userData,
				topArticles: topArticles
			}
		};
	} catch (error) {
		console.error('Error fetching Qiita data:', error);
		// Return empty data gracefully if API fails (e.g., rate limit, or missing token)
		return {
			qiita: {
				user: null,
				topArticles: []
			}
		};
	}
};
