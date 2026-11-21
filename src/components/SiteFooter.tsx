import { GitBranch, Heart } from 'lucide-react'
import { useLang } from '../lib/lang'
import { localize } from '../lib/locale'
import type { Localized } from '../lib/types'

interface SiteFooterProps {
  brand: string
  note?: Localized
  tech: string[]
  repoUrl: string
  accentText?: string
}

const builtBy: Localized = {
  uz: 'Akramov Axror tomonidan yaratilgan',
  en: 'Built by Akramov Axror',
  ru: 'Создано Akramov Axror',
}

export function SiteFooter({
  brand,
  note,
  tech,
  repoUrl,
  accentText = 'text-teal-600 dark:text-teal-300',
}: SiteFooterProps) {
  const { lang } = useLang()

  return (
    <footer className="border-t border-slate-200/70 bg-white/60 py-10 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-extrabold text-slate-900 dark:text-white">{brand}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {note ? localize(note, lang) : localize(builtBy, lang)}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span
                key={item}
                className="chip bg-slate-500/8 font-mono text-[10px] text-slate-500 ring-slate-500/15 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-slate-500 sm:items-end dark:text-slate-400">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <GitBranch className="size-3.5" />
            GitHub
          </a>
          <a
            href="https://akramovahror722-coder.github.io/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 font-semibold ${accentText}`}
          >
            <Heart className="size-3.5" />
            {localize({ uz: 'Portfolio', en: 'Portfolio', ru: 'Портфолио' }, lang)}
          </a>
        </div>
      </div>
    </footer>
  )
}
