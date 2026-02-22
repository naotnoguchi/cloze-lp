export const SUPPORTED_LANGS = ['en', 'ja'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

export const LANG_LABELS: Record<Lang, string> = {
	en: 'English',
	ja: '日本語',
};

/** Base path (e.g. /cloze-lp/) - no trailing slash in Astro's BASE_URL */
export function getBase(): string {
	const b = import.meta.env.BASE_URL;
	return b.endsWith('/') ? b.slice(0, -1) : b;
}

/** Path for a locale: /cloze-lp/en */
export function localePath(lang: Lang): string {
	return `${getBase()}/${lang}`;
}

/** Path for a page: e.g. terms -> /cloze-lp/en/terms */
export function pagePath(lang: Lang, page: 'index' | 'terms' | 'privacy'): string {
	const base = getBase();
	if (page === 'index') return `${base}/${lang}`;
	return `${base}/${lang}/${page}`;
}
