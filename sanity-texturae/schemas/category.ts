import { defineType, defineField } from "sanity";

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      defineField(
        {
            name: 'category_en',
            title: 'Categorie EN',
            type: 'array',
        of: [{
          type: 'string',
          options: {
            hotspot: true
          }
        }]
        }
      ),
      defineField(
        {
            name: 'category_fr',
            title: 'Categorie FR',
            type: 'array',
        of: [{
          type: 'string',
          options: {
            hotspot: true
          }
        }]
        }
      )
    ]
});