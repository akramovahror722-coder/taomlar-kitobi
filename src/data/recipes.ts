import type { Localized } from '../lib/types'

export type RecipeCategory = 'uzbek' | 'soup' | 'main' | 'bread' | 'snack' | 'dessert' | 'drink'

export interface Ingredient {
  amount: number
  unit: string
  name: Localized
}

export interface Recipe {
  id: string
  title: Localized
  category: RecipeCategory
  difficulty: 1 | 2 | 3
  minutes: number
  servings: number
  calories: number
  emoji: string
  summary: Localized
  ingredients: Ingredient[]
  steps: Localized[]
}

export const recipeCategories: { id: RecipeCategory; label: Localized }[] = [
  { id: 'uzbek', label: { uz: 'O‘zbek taomlari', en: 'Uzbek dishes', ru: 'Узбекские блюда' } },
  { id: 'soup', label: { uz: 'Sho‘rba', en: 'Soups', ru: 'Супы' } },
  { id: 'main', label: { uz: 'Asosiy taom', en: 'Main course', ru: 'Основное блюдо' } },
  { id: 'bread', label: { uz: 'Non va krux', en: 'Bread & pastry', ru: 'Хлеб и выпечка' } },
  { id: 'snack', label: { uz: 'Garnir va gazak', en: 'Snacks', ru: 'Закуски' } },
  { id: 'dessert', label: { uz: 'Shirinlik', en: 'Desserts', ru: 'Десерты' } },
  { id: 'drink', label: { uz: 'Ichimlik', en: 'Drinks', ru: 'Напитки' } },
]

export const difficultyLabels: Localized[] = [
  { uz: 'Oson', en: 'Easy', ru: 'Легко' },
  { uz: 'O‘rta', en: 'Medium', ru: 'Средне' },
  { uz: 'Qiyin', en: 'Hard', ru: 'Сложно' },
]

export const recipes: Recipe[] = [
  {
    id: 'plov',
    title: { uz: 'Toshli palov', en: 'Tashkent-style plov', ru: 'Плов в стиле Ташкента' },
    category: 'uzbek',
    difficulty: 3,
    minutes: 90,
    servings: 6,
    calories: 620,
    emoji: '🍚',
    summary: {
      uz: 'Qovurilgan go‘sht, mayin va sarimsoq bilan to‘yimli o‘zbek palovi.',
      en: 'A hearty Uzbek plov with fried meat, butter and garlic.',
      ru: 'Сытный узбекский плов с обжаренным мясом, маслом и чесноком.',
    },
    ingredients: [
      { amount: 700, unit: 'g', name: { uz: 'qo‘y go‘shti (guvoh)', en: 'lamb shoulder', ru: 'баранина (лопатка)' } },
      { amount: 2, unit: 'dona', name: { uz: 'piyoz', en: 'onion', ru: 'лук' } },
      { amount: 2, unit: 'dona', name: { uz: 'sabzi', en: 'carrots', ru: 'морковь' } },
      { amount: 400, unit: 'g', name: { uz: 'devzira guruch', en: 'devzira rice', ru: 'рис девзира' } },
      { amount: 80, unit: 'g', name: { uz: 'sariyog‘', en: 'butter', ru: 'сливочное масло' } },
      { amount: 2, unit: 'dona', name: { uz: 'sarimsoq boshi', en: 'garlic heads', ru: 'головки чеснока' } },
      { amount: 1, unit: 'dona', name: { uz: 'qalampir podasi', en: 'peppercorn', ru: 'перец горошком' } },
      { amount: 200, unit: 'ml', name: { uz: 'kungaboqar yog‘i', en: 'sunflower oil', ru: 'подсолнечное масло' } },
      { amount: 1200, unit: 'ml', name: { uz: 'qaynoq suv', en: 'boiling water', ru: 'кипяток' } },
    ],
    steps: [
      { uz: 'Go‘shtni bo‘laklarga kesib, quruq yog‘da chetlarini oltiring.', en: 'Cut the meat into large pieces and fry the edges in oil.', ru: 'Нарежьте мясо крупными кусками и обжарьте края в масле.' },
      { uz: 'Piyozni maydalang, qizarguncha qovuring va sarimsoq qo‘shing.', en: 'Add sliced onion, fry until golden, then add the garlic.', ru: 'Добавьте нарезанный лук, жарьте до золотистого цвета и добавьте чеснок.' },
      { uz: 'Sabzini qovurib, 2/3 qismini ajratib oling.', en: 'Fry the carrots, then set aside two thirds of them.', ru: 'Обжарьте морковь и отложите две трети.' },
      { uz: 'Guruchni yuvib, qovurilgan go‘sht ustiga qo‘ying va qaynoq suv quying.', en: 'Rinse the rice, spread it over the meat and add boiling water.', ru: 'Промойте рис, выложите на мясо и влейте кипяток.' },
      { uz: 'Qopqoqni yopib, past olovda 25 daqiqa pishiring, keyin sabzini ustiga yoying.', en: 'Cover, cook on low heat for 25 minutes, then spread the reserved carrot over the top.', ru: 'Накройте крышкой и готовьте на слабом огне 25 минут, затем выложите морковь сверху.' },
      { uz: 'Yana 15 daqiqa damlab, qaynoq suv sepib, yopib qo‘ying va 10 daqiqa dam oling.', en: 'Add 15 more minutes, pour over hot water, cover again and rest for 10 minutes.', ru: 'Добавьте ещё 15 минут, полейте кипятком, накройте и дайте настояться 10 минут.' },
      { uz: 'Tayyor palovni kosada uzatib, ustiga kuygan go‘sht va qalampir qo‘ying.', en: 'Serve the plov in a wide dish with the fried meat and pepper on top.', ru: 'Подайте плов на большом блюде, сверху — обжаренное мясо и перец.' },
    ],
  },
  {
    id: 'lagmon',
    title: { uz: 'Lag‘mon', en: 'Lagmon noodles', ru: 'Лагман' },
    category: 'uzbek',
    difficulty: 2,
    minutes: 60,
    servings: 4,
    calories: 480,
    emoji: '🍜',
    summary: {
      uz: 'Yangi tug‘ilgan xamir, qovurilgan go‘sht va shirin-savratiy sous.',
      en: 'Fresh handmade noodles with fried meat and a sweet-sour sauce.',
      ru: 'Свежая домашняя лапша с обжаренным мясом и кисло-сладким соусом.',
    },
    ingredients: [
      { amount: 400, unit: 'g', name: { uz: 'un', en: 'flour', ru: 'мука' } },
      { amount: 2, unit: 'dona', name: { uz: 'tuxum', en: 'eggs', ru: 'яйца' } },
      { amount: 100, unit: 'ml', name: { uz: 'suv', en: 'water', ru: 'вода' } },
      { amount: 400, unit: 'g', name: { uz: 'mol go‘shti', en: 'beef', ru: 'говядина' } },
      { amount: 2, unit: 'dona', name: { uz: 'piyoz', en: 'onion', ru: 'лук' } },
      { amount: 2, unit: 'dona', name: { uz: 'pomidor', en: 'tomatoes', ru: 'помидоры' } },
      { amount: 2, unit: 'dona', name: { uz: 'bulg‘or qalampiri', en: 'bell peppers', ru: 'болгарский перец' } },
      { amount: 120, unit: 'ml', name: { uz: 'kungaboqar yog‘i', en: 'sunflower oil', ru: 'подсолнечное масло' } },
      { amount: 2, unit: 'dona', name: { uz: 'sarimsoq', en: 'garlic', ru: 'чеснок' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'qora qalampir', en: 'black pepper', ru: 'чёрный перец' } },
    ],
    steps: [
      { uz: 'Un, tuxum va suvni aralashtirib, yopiq qopqoq ostida 30 daqiqa turib xamir tayyorlang.', en: 'Mix flour, eggs and water, cover and let the dough rest for 30 minutes.', ru: 'Смешайте муку, яйца и воду, накройте и дайте тесту отдохнуть 30 минут.' },
      { uz: 'Xamirni yaxshi yorib, ingichka rulonlar qilib, 2 mm qalinlikda kesing.', en: 'Knead well, roll into thin ropes and cut into 2 mm wide strips.', ru: 'Хорошо вымесите, раскатайте в тонкие жгуты и нарежьте полосками 2 мм.' },
      { uz: 'Go‘shtni kubik qilib, yog‘da chetlarini olting, piyoz va sabzi qo‘shing.', en: 'Fry the beef cubes, then add onion and vegetables.', ru: 'Обжарьте кубики мяса, добавьте лук и овощи.' },
      { uz: 'Pomidorni qo‘shib, 10 daqiqa qovurib, suv va ziravorlar qo‘shing.', en: 'Add tomatoes, simmer for 10 minutes, then add water and spices.', ru: 'Добавьте помидоры, потушите 10 минут, влейте воду и специи.' },
      { uz: 'Lag‘monni qaynoq suvda 3 daqiqa pishirib, sous bilan aralashtiring.', en: 'Cook the noodles in boiling water for 3 minutes and mix with the sauce.', ru: 'Отварите лапшу в кипятке 3 минуты и смешайте с соусом.' },
      { uz: 'Ustiga ko‘kat va qalampir sepib, darhol issiq holda xizmat qiling.', en: 'Top with herbs and pepper and serve immediately.', ru: 'Посыпьте зеленью и перцем и подавайте сразу.' },
    ],
  },
  {
    id: 'shorba',
    title: { uz: 'Mastava shorba', en: 'Mastava soup', ru: 'Суп мастава' },
    category: 'soup',
    difficulty: 1,
    minutes: 45,
    servings: 4,
    calories: 310,
    emoji: '🍲',
    summary: {
      uz: 'Yangi sabzavotlar va qovurilgan go‘shtdan yengil, issiq shorba.',
      en: 'A light and warming soup with fresh vegetables and fried meat.',
      ru: 'Лёгкий тёплый суп со свежими овощами и обжаренным мясом.',
    },
    ingredients: [
      { amount: 300, unit: 'g', name: { uz: 'mol go‘shti', en: 'beef', ru: 'говядина' } },
      { amount: 300, unit: 'g', name: { uz: 'kartofel', en: 'potatoes', ru: 'картофель' } },
      { amount: 200, unit: 'g', name: { uz: 'sabzavot aralashmasi', en: 'mixed vegetables', ru: 'овощная смесь' } },
      { amount: 1, unit: 'dona', name: { uz: 'piyoz', en: 'onion', ru: 'лук' } },
      { amount: 2, unit: 'dona', name: { uz: 'pomidor', en: 'tomatoes', ru: 'помидоры' } },
      { amount: 1500, unit: 'ml', name: { uz: 'suv', en: 'water', ru: 'вода' } },
      { amount: 80, unit: 'g', name: { uz: 'kungaboqar yog‘i', en: 'sunflower oil', ru: 'подсолнечное масло' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'qora qalampir', en: 'black pepper', ru: 'чёрный перец' } },
    ],
    steps: [
      { uz: 'Go‘shtni maydalab, yog‘da chetlarini oltiring.', en: 'Slice the meat and fry the edges in oil.', ru: 'Нарежьте мясо и обжарьте края в масле.' },
      { uz: 'Piyoz va pomidor qo‘shib, yumshoq bo‘lguncha qovuring.', en: 'Add onion and tomatoes, cook until soft.', ru: 'Добавьте лук и помидоры, готовьте до мягкости.' },
      { uz: 'Kartofel va sabzavotni qo‘shib, 1000 ml suv quyib, 20 daqiqa qaynatib qo‘ying.', en: 'Add potatoes and vegetables, pour in 1 litre of water and simmer for 20 minutes.', ru: 'Добавьте картофель и овощи, влейте 1 литр воды и варите 20 минут.' },
      { uz: 'Qolgan suvni qo‘shing, tuz va qalampir berib, 5 daqiqa damlatib qo‘ying.', en: 'Add the remaining water, season with salt and pepper and simmer for 5 more minutes.', ru: 'Влейте оставшуюся воду, посолите, поперчите и варите ещё 5 минут.' },
    ],
  },
  {
    id: 'manti',
    title: { uz: 'Manti', en: 'Steamed dumplings', ru: 'Манты' },
    category: 'uzbek',
    difficulty: 2,
    minutes: 70,
    servings: 4,
    calories: 450,
    emoji: '🥟',
    summary: {
      uz: 'Mol go‘shti va qovurilgan piyozdan xamirli manti.',
      en: 'Handmade dumplings with beef and fried onion filling.',
      ru: 'Ручные пельмени с мясом и обжаренным луком.',
    },
    ingredients: [
      { amount: 400, unit: 'g', name: { uz: 'un', en: 'flour', ru: 'мука' } },
      { amount: 250, unit: 'ml', name: { uz: 'suv', en: 'water', ru: 'вода' } },
      { amount: 500, unit: 'g', name: { uz: 'mol go‘shti', en: 'beef', ru: 'говядина' } },
      { amount: 3, unit: 'dona', name: { uz: 'piyoz', en: 'onion', ru: 'лук' } },
      { amount: 100, unit: 'g', name: { uz: 'sariyog‘', en: 'butter', ru: 'сливочное масло' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'qora qalampir', en: 'black pepper', ru: 'чёрный перец' } },
      { amount: 1, unit: 'dona', name: { uz: 'sabzi', en: 'carrot', ru: 'морковь' } },
    ],
    steps: [
      { uz: 'Un va suvni aralashtirib, yopiq holda 40 daqiqa turgan xamir qoring.', en: 'Mix flour and water and let the dough rest covered for 40 minutes.', ru: 'Смешайте муку с водой и дайте тесту настояться 40 минут под крышкой.' },
      { uz: 'Go‘shtni maydalang, piyozni sariyog‘da qovurib, aralashtiring.', en: 'Mince the meat, fry the onion in butter and mix everything together.', ru: 'Измельчите мясо, обжарьте лук на сливочном масле и смешайте.' },
      { uz: 'Xamirni yupqa qilib kesib, har biriga 1 choy qoshiq to‘ldirma qo‘ying.', en: 'Roll the dough thin, cut circles and add a spoonful of filling to each.', ru: 'Раскатайте тесто, нарежьте кружками и в каждый положите ложку начинки.' },
      { uz: 'Mantilarni yopib, yog‘langan bug‘latkida 25 daqiqa pishiring.', en: 'Seal the dumplings and steam for 25 minutes in a greased steamer.', ru: 'Залепите манты и готовьте на пару 25 минут в смазанной пароварке.' },
      { uz: 'Sariyog‘ni eritib, qalampir va sarimsoq qo‘shib, ustiga quying.', en: 'Melt the remaining butter with pepper and garlic and pour it over.', ru: 'Растопьте оставшееся масло с перцем и чесноком и полейте сверху.' },
    ],
  },
  {
    id: 'non',
    title: { uz: 'O‘zbek tandiri noni', en: 'Tandoor bread', ru: 'Тандырный хлеб' },
    category: 'bread',
    difficulty: 2,
    minutes: 80,
    servings: 6,
    calories: 260,
    emoji: '🫓',
    summary: {
      uz: 'Yumshoq, yupqa va chekkasi qorayigan qo‘lda yopilgan non.',
      en: 'Soft, thin bread baked in a tandoor with crisp charred edges.',
      ru: 'Мягкий тонкий хлеб из тандыра с подрумяненными краями.',
    },
    ingredients: [
      { amount: 1000, unit: 'g', name: { uz: 'un', en: 'flour', ru: 'мука' } },
      { amount: 550, unit: 'ml', name: { uz: 'iliq suv', en: 'warm water', ru: 'тёплая вода' } },
      { amount: 10, unit: 'g', name: { uz: 'acha', en: 'yeast', ru: 'дрожжи' } },
      { amount: 12, unit: 'g', name: { uz: 'tuz', en: 'salt', ru: 'соль' } },
      { amount: 2, unit: 'dona', name: { uz: 'tuxum', en: 'eggs', ru: 'яйца' } },
      { amount: 50, unit: 'g', name: { uz: 'sariyog‘', en: 'butter', ru: 'сливочное масло' } },
    ],
    steps: [
      { uz: 'Achani iliq suvda eritib, un, tuz va tuxumni qo‘shib, xamir qoriboring.', en: 'Dissolve the yeast in warm water, add flour, salt and eggs and knead the dough.', ru: 'Растворите дрожжи в тёплой воде, добавьте муку, соль и яйца, замесите тесто.' },
      { uz: 'Xamirni 60 daqiqa yopib qo‘yib, ko‘tarilishiga qo‘ying.', en: 'Cover the dough and let it rise for 60 minutes.', ru: 'Накройте тесто и дайте ему подойти 60 минут.' },
      { uz: 'Xamirni bo‘laklarga bo‘lib, har birini yupqa qilib yopishga tayyorlang.', en: 'Divide the dough, roll each piece thin and shape it for baking.', ru: 'Разделите тесто на части, раскатайте каждую тонко и придайте форму для выпечки.' },
      { uz: 'Tandirdan chiqargandan so‘ng ustiga sariyog‘ surib, darhol yopib qo‘ying.', en: 'Brush the bread with butter as soon as it comes out and close it.', ru: 'Смажьте хлеб маслом сразу после выпечки и закройте его.' },
    ],
  },
  {
    id: 'kabob',
    title: { uz: 'Toshli kabob', en: 'Tashkent-style kebab', ru: 'Шашлык в стиле Ташкента' },
    category: 'main',
    difficulty: 2,
    minutes: 50,
    servings: 4,
    calories: 520,
    emoji: '🍢',
    summary: {
      uz: 'Ziravorli go‘sht, piyoz va qalampirdan tayyorlangan kabob.',
      en: 'Spiced beef kebabs with onion and pepper.',
      ru: 'Шашлык из пряной говядины с луком и перцем.',
    },
    ingredients: [
      { amount: 700, unit: 'g', name: { uz: 'mol go‘shti', en: 'beef', ru: 'говядина' } },
      { amount: 2, unit: 'dona', name: { uz: 'piyoz', en: 'onion', ru: 'лук' } },
      { amount: 100, unit: 'ml', name: { uz: 'kungaboqar yog‘i', en: 'sunflower oil', ru: 'подсолнечное масло' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'qora qalampir', en: 'black pepper', ru: 'чёрный перец' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'qalampir podasi', en: 'peppercorn', ru: 'перец горошком' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'za’fran yoki kashnich', en: 'saffron or coriander', ru: 'шафран или кинза' } },
      { amount: 2, unit: 'dona', name: { uz: 'bulg‘or qalampiri', en: 'bell peppers', ru: 'болгарский перец' } },
    ],
    steps: [
      { uz: 'Go‘shtni kubik qilib, piyoz, yog‘ va ziravorlar bilan 2 soat marinlab qo‘ying.', en: 'Cut the beef into cubes and marinate it with onion, oil and spices for 2 hours.', ru: 'Нарежьте мясо кубиками и маринуйте с луком, маслом и специями 2 часа.' },
      { uz: 'Tayoqlarga navbat bilan go‘sht va qalampirni terib, o‘rtacha olovda pishiring.', en: 'Thread the meat and peppers onto skewers and grill over medium heat.', ru: 'Наденьте мясо и перец на шпажки и готовьте на среднем огне.' },
      { uz: 'Har ikki yonini teng qizartiring va tayyor bo‘lgach tuz sepib, damlatib qo‘ying.', en: 'Turn the skewers to cook both sides evenly, season with salt and rest.', ru: 'Переверните шпажки, посолите и дайте настояться.' },
    ],
  },
  {
    id: 'xumus',
    title: { uz: 'Xumus', en: 'Hummus with warm bread', ru: 'Хумус с тёплым хлебом' },
    category: 'snack',
    difficulty: 1,
    minutes: 15,
    servings: 4,
    calories: 240,
    emoji: '🫓',
    summary: {
      uz: 'No‘xat pyuresi, zaytun moyi va limon sharbati.',
      en: 'Chickpea purée with olive oil and lemon juice.',
      ru: 'Пюре из нута с оливковым маслом и лимонным соком.',
    },
    ingredients: [
      { amount: 400, unit: 'g', name: { uz: 'konservalangan no‘xat', en: 'canned chickpeas', ru: 'консервированный нут' } },
      { amount: 3, unit: 'dona', name: { uz: 'sarimsoq', en: 'garlic', ru: 'чеснок' } },
      { amount: 80, unit: 'ml', name: { uz: 'zaytun yog‘i', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 2, unit: 'dona', name: { uz: 'limon', en: 'lemons', ru: 'лимона' } },
      { amount: 2, unit: 'dona', name: { uz: 'kashnich', en: 'coriander', ru: 'кинза' } },
      { amount: 200, unit: 'g', name: { uz: 'issiq non', en: 'warm bread', ru: 'тёплый хлеб' } },
    ],
    steps: [
      { uz: 'No‘xatni ajratib, sarimsoq va yog‘ bilan blenderda pyure qiling.', en: 'Drain the chickpeas and blend them with garlic and oil until smooth.', ru: 'Отбросьте нут и измельчите его с чесноком и маслом до однородности.' },
      { uz: 'Limon sharbati va kashnich qo‘shib, yana ozgina aralashtiring.', en: 'Add lemon juice and coriander and mix once more.', ru: 'Добавьте лимонный сок и кинзу и снова перемешайте.' },
      { uz: 'Uning ustiga zaytun moyi quyib, non bilan xizmat qiling.', en: 'Drizzle olive oil on top and serve with bread.', ru: 'Полейте оливковым маслом и подайте с хлебом.' },
    ],
  },
  {
    id: 'pasta',
    title: { uz: 'Kremli pasta', en: 'Creamy pasta', ru: 'Паста в сливочном соусе' },
    category: 'main',
    difficulty: 1,
    minutes: 25,
    servings: 4,
    calories: 560,
    emoji: '🍝',
    summary: {
      uz: 'Sutli sous, parmezan va ko‘katlar bilan issiq pasta.',
      en: 'Hot pasta with a milk sauce, parmesan and herbs.',
      ru: 'Горячая паста в сливочном соусе с пармезаном и зеленью.',
    },
    ingredients: [
      { amount: 400, unit: 'g', name: { uz: 'pasta', en: 'pasta', ru: 'паста' } },
      { amount: 300, unit: 'ml', name: { uz: 'sut', en: 'milk', ru: 'молоко' } },
      { amount: 60, unit: 'g', name: { uz: 'sariyog‘', en: 'butter', ru: 'сливочное масло' } },
      { amount: 80, unit: 'g', name: { uz: 'parmezan pishig‘i', en: 'grated parmesan', ru: 'тёртый пармезан' } },
      { amount: 2, unit: 'dona', name: { uz: 'sarimsoq', en: 'garlic', ru: 'чеснок' } },
      { amount: 100, unit: 'g', name: { uz: 'cherri pomidor', en: 'cherry tomatoes', ru: 'черри' } },
      { amount: 1, unit: 'dona', name: { uz: 'kashnich', en: 'coriander', ru: 'кинза' } },
    ],
    steps: [
      { uz: 'Pastani tuzlangan qaynoq suvda 9 daqiqa qaynatib, suzib oling.', en: 'Boil the pasta in salted water for 9 minutes and drain.', ru: 'Отварите пасту в подсоленной воде 9 минут и откиньте.' },
      { uz: 'Sariyog‘da sarimsoqni qovuring, sutni quying va 3 daqiqa qaynatib qo‘ying.', en: 'Fry the garlic in butter, add milk and simmer for 3 minutes.', ru: 'Обжарьте чеснок на масле, влейте молоко и варите 3 минуты.' },
      { uz: 'Parmezan va pomidorni qo‘shib, pasta ustiga quying va aralashtiring.', en: 'Add parmesan and tomatoes, pour over the pasta and mix.', ru: 'Добавьте пармезан и черри, полейте соусом поверх пасты и перемешайте.' },
      { uz: 'Kashnich sepib, darhol xizmat qiling.', en: 'Top with coriander and serve immediately.', ru: 'Посыпьте кинзой и подавайте сразу.' },
    ],
  },
  {
    id: 'sushi',
    title: { uz: 'Uy sushi', en: 'Homemade sushi', ru: 'Домашние суши' },
    category: 'main',
    difficulty: 3,
    minutes: 50,
    servings: 4,
    calories: 390,
    emoji: '🍣',
    summary: {
      uz: 'Guruch, nori va baliq bilan yopilgan oddiy sushi roll.',
      en: 'Simple sushi rolls made with rice, nori and fish.',
      ru: 'Простые роллы с рисом, нори и рыбой.',
    },
    ingredients: [
      { amount: 300, unit: 'g', name: { uz: 'sushi guruchi', en: 'sushi rice', ru: 'рис для суши' } },
      { amount: 4, unit: 'varaq', name: { uz: 'nori', en: 'nori sheets', ru: 'листы нори' } },
      { amount: 250, unit: 'g', name: { uz: 'baliq (salmon)', en: 'salmon', ru: 'рыба (лосось)' } },
      { amount: 1, unit: 'dona', name: { uz: 'bodring', en: 'cucumber', ru: 'огурец' } },
      { amount: 3, unit: 'dona', name: { uz: 'avokado', en: 'avocado', ru: 'авокадо' } },
      { amount: 30, unit: 'ml', name: { uz: 'soya sousi', en: 'soy sauce', ru: 'соевый соус' } },
      { amount: 20, unit: 'g', name: { uz: 'wasabi', en: 'wasabi', ru: 'васаби' } },
    ],
    steps: [
      { uz: 'Guruchni yuvib, sirka va tuz bilan aralashtiring va sovutib qo‘ying.', en: 'Rinse the rice, mix with vinegar and salt and let it cool.', ru: 'Промойте рис, смешайте с уксусом и солью и дайте остыть.' },
      { uz: 'Nori ustiga guruchni yupqa yoyib, baliq, bodring va avokado joylashtiring.', en: 'Spread the rice on the nori, then add fish, cucumber and avocado.', ru: 'Разложите рис на нори и выложите рыбу, огурец и авокадо.' },
      { uz: 'Mats bilan mahkam o‘rab, 8 bo‘lakka kesing.', en: 'Roll tightly with a mat and cut into 8 pieces.', ru: 'Плотно заверните в мате и нарежьте на 8 кусков.' },
      { uz: 'Soya sousi va wasabi bilan xizmat qiling.', en: 'Serve with soy sauce and wasabi.', ru: 'Подайте с соевым соусом и васаби.' },
    ],
  },
  {
    id: 'tort',
    title: { uz: 'Shokoladli tort', en: 'Chocolate cake', ru: 'Шоколадный торт' },
    category: 'dessert',
    difficulty: 2,
    minutes: 60,
    servings: 8,
    calories: 430,
    emoji: '🍰',
    summary: {
      uz: 'Yumshoq shokoladli keks va siyq kremli qatlamlar.',
      en: 'Soft chocolate sponge with a sour-cream frosting.',
      ru: 'Мягкий шоколадный бисквит со сметанным кремом.',
    },
    ingredients: [
      { amount: 200, unit: 'g', name: { uz: 'un', en: 'flour', ru: 'мука' } },
      { amount: 150, unit: 'g', name: { uz: 'shakar', en: 'sugar', ru: 'сахар' } },
      { amount: 100, unit: 'g', name: { uz: 'kakao', en: 'cocoa powder', ru: 'какао-порошок' } },
      { amount: 3, unit: 'dona', name: { uz: 'tuxum', en: 'eggs', ru: 'яйца' } },
      { amount: 120, unit: 'ml', name: { uz: 'suyut', en: 'buttermilk', ru: 'пахта' } },
      { amount: 100, unit: 'g', name: { uz: 'sariyog‘', en: 'butter', ru: 'сливочное масло' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'xamir achiqligi', en: 'baking soda', ru: 'разрыхлитель' } },
      { amount: 200, unit: 'g', name: { uz: 'qaymoq', en: 'sour cream', ru: 'сметана' } },
      { amount: 100, unit: 'g', name: { uz: 'shokolad', en: 'chocolate', ru: 'шоколад' } },
    ],
    steps: [
      { uz: 'Quruq mahsulotlarni aralashtirib, keyin tuxum, sut va eritilgan sariyog‘ni qo‘shing.', en: 'Mix the dry ingredients, then add eggs, buttermilk and melted butter.', ru: 'Смешайте сухие ингредиенты, затем добавьте яйца, пахту и растопленное масло.' },
      { uz: 'Xamirni aralashtirib, 180°C da 30 daqiqa pishiring.', en: 'Mix the batter and bake for 30 minutes at 180°C.', ru: 'Смешайте тесто и выпекайте 30 минут при 180°C.' },
      { uz: 'Keksni to‘liq sovutib, uch qatlamga kesing.', en: 'Let the sponge cool completely and cut it into three layers.', ru: 'Дайте коржу полностью остыть и разрежьте на три слоя.' },
      { uz: 'Kremni tayyorlab, ketma-ket qatlamlarga suring va sovutib qo‘ying.', en: 'Prepare the frosting, spread it between the layers and chill.', ru: 'Приготовьте крем, промажьте слои и охладите.' },
    ],
  },
  {
    id: 'smoothie',
    title: { uz: 'Ertalabki meva smuzisi', en: 'Morning fruit smoothie', ru: 'Утренний фруктовый смузи' },
    category: 'drink',
    difficulty: 1,
    minutes: 10,
    servings: 2,
    calories: 210,
    emoji: '🥤',
    summary: {
      uz: 'Banan, shpinat va mango bilan tetiklantiruvchi ichimlik.',
      en: 'Banana, spinach and mango smoothie.',
      ru: 'Смузи с бананом, шпинатом и манго.',
    },
    ingredients: [
      { amount: 2, unit: 'dona', name: { uz: 'banan', en: 'bananas', ru: 'банана' } },
      { amount: 150, unit: 'g', name: { uz: 'shpinat', en: 'spinach', ru: 'шпинат' } },
      { amount: 200, unit: 'g', name: { uz: 'mango', en: 'mango', ru: 'манго' } },
      { amount: 250, unit: 'ml', name: { uz: 'yog‘siz sut', en: 'milk', ru: 'молоко' } },
      { amount: 1, unit: 'choy qoshiq', name: { uz: 'asal', en: 'honey', ru: 'мёд' } },
    ],
    steps: [
      { uz: 'Banan va shpinatni muz bilan blenderda maydalang.', en: 'Blend the banana and spinach with ice.', ru: 'Измельчите банан и шпинат со льдом.' },
      { uz: 'Mango, sut va asalni qo‘shib, yana aralashtiring.', en: 'Add mango, milk and honey and blend again.', ru: 'Добавьте манго, молоко и мёд и снова взбейте.' },
      { uz: 'Shisha idishga quyib, darhol ichishga bering.', en: 'Pour into a glass and serve immediately.', ru: 'Перелейте в стакан и подавайте сразу.' },
    ],
  },
]
