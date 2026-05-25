import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
      validation: (rule) => rule.required().error('O nome é obrigatório.'),
    }),
    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Foto do Produto',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ]
})