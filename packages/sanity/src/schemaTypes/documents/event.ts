import { defineField, defineType } from 'sanity'
import { Calendar1 } from 'lucide-react'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: Calendar1,
  fields: [
    // ── Core identity ────────────────────────────────────────────
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
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Live', value: 'live' },
          { title: 'Archived', value: 'archived' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    // ── Date & time ──────────────────────────────────────────────
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startTime',
      title: 'Start time',
      type: 'string',
      description: 'e.g. 18:30',
      validation: (Rule) =>
        Rule.regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
          name: 'time',
          invert: false,
        }).warning('Use HH:MM format (24-hour).'),
    }),

    defineField({
      name: 'endTime',
      title: 'End time',
      type: 'string',
      description: 'e.g. 21:00',
    }),

    defineField({
      name: 'series',
      title: 'Series',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'series' }] }],
    }),

    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'venue' }] }],
      validation: (Rule) => Rule.required().min(1),
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
