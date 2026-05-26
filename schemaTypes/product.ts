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
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required().error('A categoria é obrigatória.'),
    }),
    defineField({
      name: 'observation',
      title: 'Observação (Ex: Para a vida toda)',
      type: 'string',
    }),
    defineField({
      name: 'installments',
      title: 'Texto de Parcelamento (Ex: 10x de)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Foto Principal do Produto',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria de Fotos (Opcional)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    })
  ]
})