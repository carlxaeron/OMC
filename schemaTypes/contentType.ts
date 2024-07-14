import { defineField, defineType } from "sanity";

export const contentType = defineType({
    name: 'contentType',
    title: 'Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'reference', to: { type: 'mediaItemType' } },
                { type: 'block' },
            ],
        }),
    ]
})