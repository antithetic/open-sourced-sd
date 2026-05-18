import { defineField, defineType } from 'sanity'
import { ScrollText } from 'lucide-react'

export const lecture = defineType({
  name: 'lecture',
  title: 'Lecture',
  type: 'document',
  icon: ScrollText,
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
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{ type: 'speaker' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resource',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'file', title: 'File', type: 'file' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      speaker: 'speaker.name',
      media: 'speaker.photo',
    },
    prepare({ title, speaker, media }) {
      return {
        title,
        subtitle: speaker,
        media,
      }
    },
  },
})
