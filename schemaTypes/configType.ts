import { defineType } from "sanity";

export const configType = defineType({
    name: 'configType',
    title: 'Config',
    type: 'document',
    fields: [
        {
            name: 'mobileMenu',
            title: 'Mobile Menu',
            type: 'string',
            options: {
                list: [
                    { title: 'Top Bar', value: 'topBar' },
                    { title: 'Bottom Bar', value: 'bottomBar' },
                ],
                layout: 'radio', // Optional: to display as radio buttons
            },
            initialValue: 'topBar',
        },
        {
            name: 'sameAsDesktopMenu',
            title: 'Is the mobile menu the same as the desktop menu?',
            type: 'boolean',
            initialValue: true,
        }
    ]
})