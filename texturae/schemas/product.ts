import { defineType, defineField } from "sanity";

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Nom',
        type: 'object',
        fields: [
            {name: 'en', type: 'string', title: 'EN'},
            {name: 'fr', type: 'string', title: 'FR'}
        ]
      }),
      defineField(
        {
            name: 'category',
            title: 'Categorie',
            type: 'object',
            fields: [
                {name: 'en', type: 'string', title: 'EN'},
                {name: 'fr', type: 'string', title: 'FR'}
            ]
        }
      ),
      defineField(
        {
            name: 'gender',
            title: 'Genre',
            type: 'object',
            fields: [
                {name: 'en', type: 'string', title: 'EN'},
                {name: 'fr', type: 'string', title: 'FR'}
            ]
        }
      ),
      defineField(
        {
            name: 'price',
            title: 'Prix',
            type: 'number',
        }
      ),
      defineField(
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {name: 'en', type: 'string', title: 'EN'},
                {name: 'fr', type: 'string', title: 'FR'}
            ]
        }
      ),
      {
        title: 'Images Personalisées',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      defineField(
        {
            name: 'image_url',
            title: 'Image',
            type: 'string',
        }
      ),
      defineField(
        {
            name: 'sizes',
            title: 'Tailles',
            type: 'array',
            of: [{type: 'string'}]
        }
      ),
      defineField(
        {
            name: 'colors',
            title: 'Couleurs',
            type: 'object',
            fields: [
              {name: 'en', type: 'array', of: [{type: 'string'}], title: 'EN'},
              {name: 'fr', type: 'array', of: [{type: 'string'}], title: 'FR'},
            ]
        }
      ),
      defineField(
        {
            name: 'materials',
            title: 'Matériels',
            type: 'object',
            fields: [
              {name: 'en', type: 'array', of: [{type: 'string'}], title: 'EN'},
              {name: 'fr', type: 'array', of: [{type: 'string'}], title: 'FR'},
            ]
        }
      ),
      defineField(
        {
            name: 'patterns',
            title: 'modèles',
            type: 'object',
            fields: [
              {name: 'en', type: 'array', of: [{type: 'string'}], title: 'EN'},
              {name: 'fr', type: 'array', of: [{type: 'string'}], title: 'FR'},
            ]
        }
      ),

    ]
});