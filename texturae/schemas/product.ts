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
            type: 'array',
            of: [{type: 'object',
                fields: [
                    {name: 'color', title: 'Couleur', type: 'object',
                        fields: [
                            {name: 'en', type: 'string', title: 'EN'},
                            {name: 'fr', type: 'string', title: 'FR'}
                        ]
                    }
                ]
            }]
        }
      ),

    ]
});