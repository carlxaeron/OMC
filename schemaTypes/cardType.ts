import { defineType } from "sanity";

export const cardType = defineType({
    name: 'cardType',
    title: 'Card',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'reference',
            to: [{ type: 'mediaItemType' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Title of the Image',
        }
    ],
});