export type NewsCategory = 'talk' | 'award' | 'release' | 'media' | 'note';

export interface NewsItem {
	slug: string;
	title: string;
	date: string;
	category: NewsCategory;
	link?: string;
	image?: string;
	body: string;
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
	const match = raw.match(FRONTMATTER_RE);
	if (!match) return { data: {}, body: raw.trim() };

	const data: Record<string, string> = {};
	for (const line of match[1].split(/\r?\n/)) {
		const idx = line.indexOf(':');
		if (idx === -1) continue;
		const key = line.slice(0, idx).trim();
		let value = line.slice(idx + 1).trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		data[key] = value;
	}
	return { data, body: match[2].trim() };
}

const modules = import.meta.glob('/src/content/news/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const VALID_CATEGORIES: NewsCategory[] = ['talk', 'award', 'release', 'media', 'note'];

function toNewsItem(path: string, raw: string): NewsItem | null {
	const { data, body } = parseFrontmatter(raw);
	if (!data.title || !data.date) return null;

	const category = VALID_CATEGORIES.includes(data.category as NewsCategory)
		? (data.category as NewsCategory)
		: 'note';

	const filename = path.split('/').pop() ?? '';
	const slug = filename.replace(/\.md$/, '');

	return {
		slug,
		title: data.title,
		date: data.date,
		category,
		link: data.link || undefined,
		image: data.image || undefined,
		body
	};
}

const allNews: NewsItem[] = Object.entries(modules)
	.map(([path, raw]) => toNewsItem(path, raw))
	.filter((item): item is NewsItem => item !== null)
	.sort((a, b) => b.date.localeCompare(a.date));

export function getAllNews(): NewsItem[] {
	return allNews;
}

export function getLatestNews(limit = 5): NewsItem[] {
	return allNews.slice(0, limit);
}

export function getNewsBySlug(slug: string): NewsItem | null {
	return allNews.find((n) => n.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
	return allNews.map((n) => n.slug);
}

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
	talk: 'Talk',
	award: 'Award',
	release: 'Release',
	media: 'Media',
	note: 'Note'
};

export const CATEGORY_COLOR: Record<NewsCategory, string> = {
	talk: 'bg-secondary',
	award: 'bg-primary',
	release: 'bg-accent',
	media: 'bg-black text-white',
	note: 'bg-white'
};
