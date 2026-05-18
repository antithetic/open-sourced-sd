import { defineField, defineType } from 'sanity'
import { CircleUser } from 'lucide-react'

export const speaker = defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon: CircleUser,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'affiliation',
      media: 'photo',
    },
  },
})
