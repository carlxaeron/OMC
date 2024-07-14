import { defineType } from "sanity";

export const blockContent = defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [],
            marks: {
                decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
                annotations: [],
            },
        },
        // You can add other types like images or links here
    ],
})