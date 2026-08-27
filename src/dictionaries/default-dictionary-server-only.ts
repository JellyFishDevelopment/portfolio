import 'server-only'
import { Locale, i18n, normalizeLocale } from "@/config/i18n.config"
import { defaultDictionary } from "./default-dictionaries"

export const getDictionaryServerOnly = (locale: Locale | string) => {
    return defaultDictionary[normalizeLocale(locale)] ?? defaultDictionary[i18n.defaultLocale as Locale]
}