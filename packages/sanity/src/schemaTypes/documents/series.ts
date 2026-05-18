import { defineField, defineType } from 'sanity'
import { FolderBookmark } from 'lucide-react'

export const series = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: FolderBookmark,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      description: 'e.g. "Spring 2025"',
    }),
    defineField({
      name: 'dateRange',
      title: 'Date range',
      type: 'object',
      fields: [
        defineField({ name: 'start', title: 'Start', type: 'date' }),
        defineField({ name: 'end', title: 'End', type: 'date' }),
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
