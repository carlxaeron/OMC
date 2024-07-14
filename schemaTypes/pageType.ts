import { defineType } from "sanity";

export const pageType = defineType({
    name: 'pageType',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'contents',
            title: 'Contents',
            type: 'array',
            of: [
                {
                    name: 'content',
                    title: 'Content',
                    type: 'reference',
                    to: [{ type: 'contentType' }],
                },
            ],
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {hotspot: true},
        }
    ],
})