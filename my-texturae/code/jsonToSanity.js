import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '1aldes3z',
  dataset: 'production',
  token: 'skwQvRbcm05ZgOi2HqhkujUlmlRS0tclEPYXTOrrRb0qWSy4QTH6XN6d4EK7vnRnZ6qFtwySjY4pEPRj8PUTRej7tlDvgfg4oKayQkTzrNdgFRC8KvPsAxGhBnik12h2fVGc8zfyRsJA8Rsky5uwtmG8Kulm8kVH0j8HzuakKNlW2ms5gA7G',
  useCdn: false
})

const items = require('./data.json')

export async function importData() {
  for (const item of items.items) {
    const { id, name, category, category_fr, price, description, description_fr, image_url, sizes, colors, colors_fr } = item

    const doc = {
      _type: 'product',
      _id: id,
      name: { en: name, fr: name },
      category: { en: category, fr: category_fr },
      price,
      description: { en: description, fr: description_fr },
      image_url,
      sizes,
      colors: colors.map((color, index) => ({
        color: { en: color, fr: colors_fr[index] }
      }))
    }

    try {
      await client.createOrReplace(doc)
      console.log(`Item "${name}" imported successfully`)
    } catch (error) {
      console.error(`Error importing item "${name}":`, error.message)
    }
  }
}