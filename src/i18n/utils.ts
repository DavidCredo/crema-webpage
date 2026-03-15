import en from "./en";
import de from "./de";

export const languages = {
  en: "English",
  de: "Deutsch",
} as const;

export const defaultLang = "en" as const;

type Locale = keyof typeof languages;

const translations: Record<Locale, typeof en> = { en, de };

/**
 * Detect locale from the current URL pathname.
 * /de/privacy → "de", /privacy → "en"
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Locale;
  return defaultLang;
}

/**
 * Return a translation function bound to the current locale.
 * Usage: const t = useTranslations(Astro.url);
 *        t("hero.title.line1") // → translated string
 */
export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);
  return function t(key: keyof typeof en): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

/**
 * Get a localized path. Strips /de prefix for default locale.
 * localePath("/privacy", "de") → "/de/privacy"
 * localePath("/privacy", "en") → "/privacy"
 */
export function localePath(path: string, lang: Locale): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}