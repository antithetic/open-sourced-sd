import { defineField, defineType } from 'sanity'
import { Tag } from 'lucide-react'

export const topic = defineType({
  name: 'topic',
  title: 'Topic',
  type: 'document',
  icon: Tag,
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
    }),
    defineField({
      name: 'parentTopic',
      title: 'Parent topic',
      type: 'reference',
      to: [{ type: 'topic' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      parent: 'parentTopic.title',
    },
    prepare({ title, parent }) {
      return {
        title,
        subtitle: parent ? `↳ ${parent}` : undefined,
      }
    },
  },
})
