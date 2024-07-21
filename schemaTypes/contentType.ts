import { defineField, defineType } from "sanity";

const sectionIds = {
    home: 'homePage',
    about: 'aboutPage',
    services: 'servicesPage',
    contact: 'contactPage',
    verse: 'versePage',
    verseAuthors: 'verse-Page-authors',
    others: 'othersPage',
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
            // validation: Rule => Rule.required(),
            options: {
                list: sectionIdOptions, // Correctly formatted options
            },
        }),
        defineField({
            name: 'sectionIdCustom',
            title: 'Section ID Custom',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'reference', to: [
                    { type: 'mediaItemType' },
                    { type: 'cardType' },
                ] },
                { type: 'block' },
                { type: 'image' },
            ],
        }),
    ]
})