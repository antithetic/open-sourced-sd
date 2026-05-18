import { defineField, defineType } from 'sanity'
import { Calendar1 } from 'lucide-react'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: Calendar1,
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
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'series' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'url', title: 'URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'lectures',
      title: 'Lecture lineup (in order)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lecture' }] }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'recordingUrl',
      title: 'Full event recording',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      series: 'series.title',
      media: 'coverImage',
    },
    prepare({ title, date, series, media }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : undefined
      return {
        title,
        subtitle: [series, formattedDate].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
