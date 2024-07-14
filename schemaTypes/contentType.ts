import { defineField, defineType } from "sanity";

export const contentType = defineType({
    name: 'content',
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
            // type: 'blockContent', // Change 'text' to 'blockContent' for WYSIWYG editor
            type: 'text', // Change 'text' to 'blockContent' for WYSIWYG editor
        }),
    ]
})

// export const blockContent = defineType({
//     name: 'blockContent',
//     title: 'Block Content',
//     type: 'array',
//     of: [
//         {
//             type: 'block',
//             styles: [{ title: 'Normal', value: 'normal' }],
//             lists: [],
//             marks: {
//                 decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
//                 annotations: [],
//             },
//         },
//         // You can add other types like images or links here
//     ],
// })