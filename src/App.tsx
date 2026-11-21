import { BookOpen, ChefHat, Globe2, Heart, Search, Users, UtensilsCrossed } from 'lucide-react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { RecipesExplorer } from './components/RecipesExplorer'
import { useLang } from './lib/lang'
import { localize } from './lib/locale'
import type { Localized } from './lib/types'

const hero = {
  kicker: { uz: 'Retseptlar qo‘llanmasi', en: 'Recipe handbook', ru: 'Справочник рецептов' },
  title: { uz: 'Taomlar Kitobi', en: 'Taomlar Kitobi', ru: 'Taomlar Kitobi' },
  subtitle: {
    uz: "O‘zbek va lenta taomlarining 12 ta retsepti: mahsulotlar, porsiya, qiyinchilik va bosqichma-bosqich ko‘rsatma.",
    en: '12 recipes from Uzbek and world cuisine: ingredients, servings, difficulty and step-by-step guides.',
    ru: '12 рецептов узбекской и мировой кухни: продукты, порции, сложность и пошаговые инструкции.',
  },
} satisfies Record<string, Localized>

const features: { icon: typeof ChefHat; title: Localized; text: Localized }[] = [
  {
    icon: Search,
    title: { uz: 'Kategoriya filtrlari', en: 'Category filters', ru: 'Фильтры по категориям' },
    text: {
      uz: "7 kategoriya va qidiruv bilan kerakli retseptni bir zumda toping.",
      en: 'Find the right recipe instantly with 7 categories and search.',
      ru: 'Найдите нужный рецепт мгновенно с 7 категориями и поиском.',
    },
  },
  {
    icon: Users,
    title: { uz: 'Porsiya hisoblash', en: 'Serving calculator', ru: 'Расчёт порций' },
    text: {
      uz: "Porsiya sonini o‘zgartirsangiz, mahsulot miqdori avtomatik qayta hisoblanadi.",
      en: 'Change the servings and ingredient amounts are recalculated automatically.',
      ru: 'Измените число порций — количество продуктов пересчитается автоматически.',
    },
  },
  {
    icon: Heart,
    title: { uz: 'Sevimlilar', en: 'Favourites', ru: 'Избранное' },
    text: {
      uz: "Yoqtirgan retseptlaringizni saqlang va keyingi safar tezroq toping.",
      en: 'Save the recipes you love and find them faster next time.',
      ru: 'Сохраняйте любимые рецепты и находите их быстрее.',
    },
  },
  {
    icon: BookOpen,
    title: { uz: 'Tayyorlash tarixi', en: 'Cooking history', ru: 'История готовки' },
    text: {
      uz: "Tayyorlagan taomlaringiz ro‘yxati yuritiladi — oshxona daftari kabi.",
      en: 'A running list of dishes you have cooked, like a kitchen diary.',
      ru: 'Список приготовленных блюд, как кухонный дневник.',
    },
  },
]

const stats = [
  { value: '12', label: { uz: 'Retseptlar', en: 'Recipes', ru: 'Рецептов' } },
  { value: '7', label: { uz: 'Kategoriyalar', en: 'Categories', ru: 'Категорий' } },
  { value: '3', label: { uz: 'Tillar', en: 'Languages', ru: 'Языков' } },
] satisfies { value: string; label: Localized }[]

function ChefGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
      <path
        d="M7 20h10M6 16h12v4H6zM7.5 16c-2 0-3.5-1.6-3.5-3.6 0-1.6 1-2.9 2.5-3.3C6.2 7.4 7.6 5.8 9.6 5.8c1 0 1.9.3 2.6.9.7-.6 1.6-.9 2.6-.9 2 0 3.4 1.6 3.7 3.3 1.5.4 2.5 1.7 2.5 3.3 0 2-1.5 3.6-3.5 3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function App() {
  const { lang } = useLang()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader
        brand="Taomlar Kitobi"
        tagline={hero.kicker}
        accent="from-orange-500 to-red-400"
        icon={<ChefGlyph />}
      />

      <main>
        <section className="relative overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div
            className="pointer-events-none absolute -top-32 right-1/4 size-[28rem] rounded-full bg-orange-500/15 blur-3xl dark:bg-orange-500/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
          <div className="container-page relative">
            <div className="max-w-3xl page-enter">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-orange-600 uppercase dark:border-orange-400/20 dark:text-orange-300">
                <span className="size-1.5 rounded-full bg-orange-500" />
                {localize(hero.kicker, lang)}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
                {localize(hero.title, lang)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {localize(hero.subtitle, lang)}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { uz: 'Kategoriya filtrlari', en: 'Category filters', ru: 'Фильтры по категориям' },
                  { uz: 'Porsiya hisoblash', en: 'Serving calculator', ru: 'Расчёт порций' },
                  { uz: 'Sevimlilar', en: 'Favourites', ru: 'Избранное' },
                  { uz: 'Tayyorlash tarixi', en: 'Cooking history', ru: 'История готовки' },
                ].map((item) => (
                  <span
                    key={item.en}
                    className="chip bg-white/70 text-slate-600 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
                  >
                    <UtensilsCrossed className="size-3 text-orange-500" />
                    {localize(item, lang)}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label.en} className="card-surface px-4 py-3">
                    <p className="font-mono text-2xl font-extrabold text-orange-600 dark:text-orange-300">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      {localize(item.label, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">
            <RecipesExplorer />
          </div>
        </section>

        <section className="section-alt py-16 sm:py-20">
          <div className="container-page">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title.en} className="card-surface card-hover p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-400 text-white shadow-md">
                    <feature.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{localize(feature.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {localize(feature.text, lang)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <Globe2 className="size-4" />
              {localize(
                {
                  uz: "Interfeys o‘zbek, ingliz va rus tillarida ishlaydi.",
                  en: 'The interface works in Uzbek, English and Russian.',
                  ru: 'Интерфейс работает на узбекском, английском и русском.',
                },
                lang,
              )}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter
        brand="Taomlar Kitobi"
        note={{
          uz: 'O‘zbek va jahon oshxonasidan 12 ta bosqichli retsept.',
          en: '12 step-by-step recipes from Uzbek and world cuisine.',
          ru: '12 пошаговых рецептов узбекской и мировой кухни.',
        }}
        tech={['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage']}
        repoUrl="https://github.com/akramovahror722-coder/taomlar-kitobi"
        accentText="text-orange-600 dark:text-orange-300"
      />
    </div>
  )
}
