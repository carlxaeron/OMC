import { defineField, defineType } from "sanity";

export const mediaItemType = defineType({
    name: 'mediaItemType',
    title: 'Media Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'media',
            title: 'Media',
            type: 'image', // Use 'file' type for non-image media like videos or documents
            options: {
                hotspot: true, // Enables image cropping
            },
        }),
    ],
});