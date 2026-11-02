import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job Openings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full Time', value: 'full-time'},
          {title: 'Part Time', value: 'part-time'},
          {title: 'Contract', value: 'contract'},
          {title: 'Internship', value: 'internship'},
        ],
      },
    }),

    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 8,
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'open',
      options: {
        list: [
          {title: 'Open', value: 'open'},
          {title: 'Closed', value: 'closed'},
        ],
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})