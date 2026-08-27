'use client'
import { Locale, i18n, normalizeLocale } from "@/config/i18n.config"
import { defaultDictionary } from "./default-dictionaries"

export const getDictionaryUseClient = (locale: Locale | string) => {
    return defaultDictionary[normalizeLocale(locale)] ?? defaultDictionary[i18n.defaultLocale as Locale]
}