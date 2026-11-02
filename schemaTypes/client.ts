
import { defineField, defineType } from 'sanity'

export const clientType = defineType({
  name: 'client',
  title: 'Client Logos',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.integer().min(0),
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'website',
    },
  },
})
