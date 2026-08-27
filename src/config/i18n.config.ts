const defaultLocale = 'en-US'
// A list of all locales that are supported
const langs = [defaultLocale, 'pt-BR'] as const
// const langs = [defaultLocale, 'de'] as const

const locales = langs as unknown as string[]
export const i18n = {
    // Used when no locale matches
    defaultLocale, 
    locales, 
    localeDetection: true
}

export type Locale = (typeof langs) [number]

export function normalizeLocale(locale?: string | null): Locale {
    const value = locale?.toLowerCase() ?? ''
    if (value === 'pt-br' || value === 'pt' || value.startsWith('pt')) {
        return 'pt-BR'
    }
    return 'en-US'
}