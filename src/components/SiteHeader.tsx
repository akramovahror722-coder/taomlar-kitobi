import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLang } from '../lib/lang'
import { useTheme } from '../lib/theme'
import { localize } from '../lib/locale'
import type { Localized } from '../lib/types'

interface SiteHeaderProps {
  brand: string
  tagline: Localized
  accent: string
  icon: ReactNode
  portfolioUrl?: string
}

export function SiteHeader({
  brand,
  tagline,
  accent,
  icon,
  portfolioUrl = 'https://akramovahror722-coder.github.io/portfolio/',
}: SiteHeaderProps) {
  const { lang, setLang, languages } = useLang()
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#080d14]/80">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
          >
            {icon}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
              {brand}
            </span>
            <span className="hidden truncate text-xs text-slate-500 sm:block dark:text-slate-400">
              {localize(tagline, lang)}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center rounded-lg border border-slate-200 bg-white/60 p-0.5 dark:border-white/10 dark:bg-white/5">
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLang(item)}
                aria-pressed={lang === item}
                className={`rounded-md px-2 py-1 text-[11px] font-bold uppercase transition-colors ${
                  lang === item
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label="Theme"
            className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-white/60 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <a
            href={portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white/60 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-teal-600 sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-teal-300"
          >
            Portfolio
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
