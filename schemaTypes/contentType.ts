import { defineField, defineType } from "sanity";

const sectionIds = {
    home: 'homePage',
    about: 'aboutPage',
    services: 'servicesPage',
    contact: 'contactPage',
}

const sectionIdOptions = Object.values(sectionIds);

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
            name: 'sectionId',
            title: 'Section ID',
            type: 'string', // Corrected type
            validation: Rule => Rule.required(),
            options: {
                list: sectionIdOptions, // Correctly formatted options
            },
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'reference', to: { type: 'mediaItemType' } },
                { type: 'block' },
                { type: 'image' },
            ],
        }),
    ]
})