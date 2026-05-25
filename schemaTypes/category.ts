import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome da Categoria',
      type: 'string',
      validation: (rule) => rule.required().error('O nome da categoria é obrigatório.'),
    }),
  ],
})
