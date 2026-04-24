import { error } from '@sveltejs/kit';
import { getNewsBySlug, getAllSlugs } from '$lib/news';
import type { PageServerLoad, EntryGenerator } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const item = getNewsBySlug(params.slug);
	if (!item) error(404, 'News item not found');
	return { item };
};

export const entries: EntryGenerator = () => {
	return getAllSlugs().map((slug) => ({ slug }));
};
