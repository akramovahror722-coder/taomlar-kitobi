import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  Check,
  ChefHat,
  Clock,
  Flame,
  Heart,
  Minus,
  Plus,
  Search,
  Users,
} from 'lucide-react'
import { useLang } from '../lib/lang'
import { localize } from '../lib/locale'
import { useLocalStorage } from '../lib/storage'
import {
  difficultyLabels,
  recipeCategories,
  recipes,
  type Recipe,
  type RecipeCategory,
} from '../data/recipes'

const copy = {
  search: {
    uz: 'Retsept yoki mahsulot qidirish...',
    en: 'Search a recipe or ingredient...',
    ru: 'Поиск рецепта или продукта...',
  },
  all: { uz: 'Hammasi', en: 'All', ru: 'Все' },
  found: { uz: 'retsept', en: 'recipes', ru: 'рецептов' },
  empty: {
    uz: 'Hech narsa topilmadi. Boshqa so‘z bilan urinib ko‘ring.',
    en: 'Nothing found. Try a different keyword.',
    ru: 'Ничего не найдено. Попробуйте другое слово.',
  },
  minutes: { uz: 'daqiqa', en: 'min', ru: 'мин' },
  servings: { uz: 'porsiya', en: 'servings', ru: 'порций' },
  ingredients: { uz: 'Mahsulotlar', en: 'Ingredients', ru: 'Ингредиенты' },
  steps: { uz: 'Tayyorlash bosqichlari', en: 'Cooking steps', ru: 'Шаги приготовления' },
  addFavorite: { uz: 'Sevimlilarga qo‘shish', en: 'Add to favourites', ru: 'В избранное' },
  removeFavorite: {
    uz: 'Sevimlilardan olib tashlash',
    en: 'Remove from favourites',
    ru: 'Убрать из избранного',
  },
  cooked: { uz: 'Tayyorladim', en: 'I cooked it', ru: 'Я приготовил' },
  cookedList: { uz: 'Tayyorlagan taomlar', en: 'Cooked dishes', ru: 'Приготовленные блюда' },
  back: { uz: 'Ro‘yxatga qaytish', en: 'Back to the list', ru: 'Назад к списку' },
  calories: { uz: 'kkal', en: 'kcal', ru: 'ккал' },
  clearHistory: { uz: 'Tarixni tozalash', en: 'Clear history', ru: 'Очистить историю' },
} as const

export function RecipesExplorer() {
  const { lang } = useLang()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'all' | RecipeCategory>('all')
  const [selected, setSelected] = useState<Recipe | null>(null)
  const [servings, setServings] = useState(4)
  const [favorites, setFavorites] = useLocalStorage<string[]>('taomlar-favorites', [])
  const [cooked, setCooked] = useLocalStorage<string[]>('taomlar-cooked', [])

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return recipes.filter((recipe) => {
      if (category !== 'all' && recipe.category !== category) return false
      if (!term) return true
      return (
        localize(recipe.title, lang).toLowerCase().includes(term) ||
        recipe.title.en.toLowerCase().includes(term) ||
        localize(recipe.summary, lang).toLowerCase().includes(term) ||
        recipe.ingredients.some((item) => localize(item.name, lang).toLowerCase().includes(term))
      )
    })
  }, [query, category, lang])

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const openRecipe = (recipe: Recipe) => {
    setSelected(recipe)
    setServings(recipe.servings)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (selected) {
    return (
      <RecipeDetail
        recipe={selected}
        servings={servings}
        setServings={setServings}
        favorite={favorites.includes(selected.id)}
        onFavorite={() => toggleFavorite(selected.id)}
        onCooked={() =>
          setCooked((current) =>
            current.includes(selected.id) ? current : [...current, selected.id],
          )
        }
        cooked={cooked.includes(selected.id)}
        onBack={() => setSelected(null)}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="card-surface p-5">
        <div className="flex flex-col gap-4">
          <label className="relative block w-full">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={localize(copy.search, lang)}
              aria-label={localize(copy.search, lang)}
              className="w-full rounded-xl border border-slate-300 bg-white/70 py-2.5 pr-4 pl-10 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 ring-inset transition-colors ${
                category === 'all'
                  ? 'bg-orange-500 text-white ring-orange-500'
                  : 'bg-white/60 text-slate-600 ring-slate-300 hover:text-orange-600 dark:bg-white/5 dark:text-slate-300 dark:ring-white/15'
              }`}
            >
              {localize(copy.all, lang)}
            </button>
            {recipeCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 ring-inset transition-colors ${
                  category === item.id
                    ? 'bg-orange-500 text-white ring-orange-500'
                    : 'bg-white/60 text-slate-600 ring-slate-300 hover:text-orange-600 dark:bg-white/5 dark:text-slate-300 dark:ring-white/15'
                }`}
              >
                {localize(item.label, lang)}
              </button>
            ))}
            <span className="ml-auto chip bg-orange-500/10 text-orange-600 ring-orange-500/20 dark:text-orange-300">
              {filtered.length} {localize(copy.found, lang)}
            </span>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card-surface px-6 py-16 text-center text-sm text-slate-500">
          {localize(copy.empty, lang)}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => (
            <article
              key={recipe.id}
              role="button"
              tabIndex={0}
              onClick={() => openRecipe(recipe)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openRecipe(recipe)
                }
              }}
              className="card-surface card-hover flex h-full cursor-pointer flex-col p-5 text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-orange-500/10 text-2xl">
                  {recipe.emoji}
                </span>
                <button
                  type="button"
                  aria-label={localize(copy.addFavorite, lang)}
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleFavorite(recipe.id)
                  }}
                  className={`rounded-lg p-2 transition-colors ${
                    favorites.includes(recipe.id)
                      ? 'text-rose-500'
                      : 'text-slate-300 hover:text-rose-400 dark:text-slate-600'
                  }`}
                >
                  <Heart
                    className="size-4"
                    fill={favorites.includes(recipe.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <h3 className="mt-4 text-base font-bold">{localize(recipe.title, lang)}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {localize(recipe.summary, lang)}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200/70 pt-3 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {recipe.minutes} {localize(copy.minutes, lang)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Flame className="size-3.5" />
                  {recipe.calories} {localize(copy.calories, lang)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <ChefHat className="size-3.5" />
                  {localize(difficultyLabels[recipe.difficulty - 1], lang)}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {(favorites.length > 0 || cooked.length > 0) && (
        <div className="card-surface p-5">
          <h3 className="flex items-center gap-2 text-sm font-bold">
            <ChefHat className="size-4 text-orange-500" />
            {localize(copy.cookedList, lang)}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cooked.map((id) => {
              const recipe = recipes.find((item) => item.id === id)
              if (!recipe) return null
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => openRecipe(recipe)}
                  className="chip bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-300"
                >
                  <Check className="size-3" />
                  {localize(recipe.title, lang)}
                </button>
              )
            })}
            {cooked.length > 0 && (
              <button
                type="button"
                onClick={() => setCooked([])}
                className="chip bg-slate-500/10 text-slate-500 ring-slate-500/20 hover:text-rose-500"
              >
                {localize(copy.clearHistory, lang)}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function RecipeDetail({
  recipe,
  servings,
  setServings,
  favorite,
  onFavorite,
  onCooked,
  cooked,
  onBack,
}: {
  recipe: Recipe
  servings: number
  setServings: (value: number) => void
  favorite: boolean
  onFavorite: () => void
  onCooked: () => void
  cooked: boolean
  onBack: () => void
}) {
  const { lang } = useLang()
  const ratio = servings / recipe.servings

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-orange-600 dark:text-slate-400"
      >
        <ArrowLeft className="size-4" />
        {localize(copy.back, lang)}
      </button>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="card-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-orange-500/10 text-4xl">
              {recipe.emoji}
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                {localize(recipe.title, lang)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {localize(recipe.summary, lang)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip bg-orange-500/10 text-orange-600 ring-orange-500/20 dark:text-orange-300">
                  {localize(
                    recipeCategories.find((item) => item.id === recipe.category)?.label ??
                      recipeCategories[0].label,
                    lang,
                  )}
                </span>
                <span className="chip bg-slate-500/10 text-slate-500 ring-slate-500/20 dark:text-slate-400">
                  {localize(difficultyLabels[recipe.difficulty - 1], lang)}
                </span>
                <span className="chip bg-slate-500/10 text-slate-500 ring-slate-500/20 dark:text-slate-400">
                  <Clock className="size-3" />
                  {recipe.minutes} {localize(copy.minutes, lang)}
                </span>
              </div>
            </div>
          </div>

          <h3 className="mt-8 flex items-center gap-2 text-base font-bold">
            <ChefHat className="size-4 text-orange-500" />
            {localize(copy.steps, lang)}
          </h3>
          <ol className="mt-4 space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={step.en} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-orange-500/10 font-mono text-xs font-bold text-orange-600 dark:text-orange-300">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {localize(step, lang)}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-5">
          <div className="card-surface p-6">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <Users className="size-4 text-orange-500" />
                {localize(copy.servings, lang)}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  aria-label="minus"
                  className="grid size-8 place-items-center rounded-lg border border-slate-300 text-slate-600 transition-colors hover:border-orange-400 hover:text-orange-600 dark:border-white/15 dark:text-slate-300"
                >
                  <Minus className="size-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-bold">{servings}</span>
                <button
                  type="button"
                  onClick={() => setServings(Math.min(20, servings + 1))}
                  aria-label="plus"
                  className="grid size-8 place-items-center rounded-lg border border-slate-300 text-slate-600 transition-colors hover:border-orange-400 hover:text-orange-600 dark:border-white/15 dark:text-slate-300"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            </div>

            <h3 className="mt-6 text-sm font-bold">{localize(copy.ingredients, lang)}</h3>
            <ul className="mt-3 space-y-2">
              {recipe.ingredients.map((item) => (
                <li
                  key={item.name.en}
                  className="flex items-center justify-between gap-3 border-b border-slate-200/60 pb-2 text-sm last:border-0 dark:border-white/10"
                >
                  <span className="text-slate-600 dark:text-slate-300">
                    {localize(item.name, lang)}
                  </span>
                  <span className="shrink-0 font-mono text-xs font-semibold text-orange-600 dark:text-orange-300">
                    {formatAmount(item.amount * ratio)} {item.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface space-y-2.5 p-5">
            <button
              type="button"
              onClick={onFavorite}
              className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                favorite
                  ? 'bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 dark:text-rose-300'
                  : 'bg-slate-500/10 text-slate-600 hover:bg-slate-500/20 dark:text-slate-300'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Heart className="size-4" fill={favorite ? 'currentColor' : 'none'} />
                {localize(favorite ? copy.removeFavorite : copy.addFavorite, lang)}
              </span>
            </button>
            <button
              type="button"
              onClick={onCooked}
              className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                cooked
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Check className="size-4" />
                {localize(copy.cooked, lang)}
              </span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

function formatAmount(value: number) {
  if (value >= 100) return String(Math.round(value))
  return String(Math.round(value * 10) / 10)
}
