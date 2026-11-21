import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang } from './types'

const LANGUAGES: Lang[] = ['uz', 'en', 'ru']

interface LangValue {
  lang: Lang
  setLang: (lang: Lang) => void
  languages: Lang[]
}

const LangContext = createContext<LangValue | null>(null)

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'uz'
  const stored = window.localStorage.getItem('site-lang')
  return stored === 'en' || stored === 'ru' || stored === 'uz' ? stored : 'uz'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('site-lang', lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const value = useMemo(() => ({ lang, setLang, languages: LANGUAGES }), [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangValue {
  const context = useContext(LangContext)
  if (!context) throw new Error('useLang must be used within LangProvider')
  return context
}
