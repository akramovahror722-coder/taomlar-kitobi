import type { Lang, Localized } from './types'

export function localize(value: Localized, lang: Lang): string {
  return value[lang] ?? value.uz
}
