import { client } from './sanityClient';

const items = require('./data.json')

export async function importData() {
  for (const item of items.items) {
    const { id, name,name_fr, category, category_fr,gender, gender_fr, price, description, description_fr, defaultImg, sizes, colors, colors_fr, materials, materials_fr, patterns, patterns_fr } = item;

    const doc = {
      _type: 'product',
      _id: id,
      name: { en: name, fr: name_fr },
      category: { en: category, fr: category_fr },
      gender: { en: gender, fr: gender_fr },
      price,
      description: { en: description, fr: description_fr },
      defaultImg,
      sizes,
      colors: { en: colors, fr: colors_fr },
      materials: { en: materials, fr: materials_fr },
      patterns: { en: patterns, fr: patterns_fr }
    }

    try {
      await client.createOrReplace(doc)
      console.log(`Item "${name}" imported successfully`)
    } catch (error) {
      console.error(`Error importing item "${name}":`, error.message)
    }
  }
}

export async function createCategory() {
  for (const item of items.items) {
    const {id, category, category_fr,gender, gender_fr, colors, colors_fr, materials, materials_fr, patterns, patterns_fr, fits,fits_fr, styles, styles_fr } = item;

    const doc = {
      _type: 'category',
      _id: id,
      category: { en: category, fr: category_fr },
      gender: { en: gender, fr: gender_fr },
      colors: { en: colors, fr: colors_fr },
      materials: { en: materials, fr: materials_fr },
      patterns: { en: patterns, fr: patterns_fr },
      fits: { en: fits, fr: fits_fr },
      styles: { en: styles, fr: styles_fr }
    }

    try {
      await client.createOrReplace(doc)
      console.log(`Item "${category}" imported successfully`)
    } catch (error) {
      console.error(`Error importing item "${category}":`, error.message)
    }
  }
}