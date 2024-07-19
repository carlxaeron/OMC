import { defineType } from "sanity";

export const settingsType = defineType({
    name: 'settingsType',
    title: 'Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
        },
        {
            name: 'siteKeywords',
            title: 'Site Keywords',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'siteLogo',
            title: 'Site Logo',
            type: 'image',
            options: {hotspot: true},
        },
        {
            name: 'siteFavicon',
            title: 'Site Favicon',
            type: 'image',
            options: {hotspot: true},
        },
        {
            name: 'siteUrl',
            title: 'Site URL',
            type: 'url',
        },
        {
            name: 'siteAuthor',
            title: 'Site Author',
            type: 'string',
        },
        {
            name: 'siteAuthorEmail',
            title: 'Site Author Email',
            type: 'email',
        },
        {
            name: 'siteAuthorPhone',
            title: 'Site Author Phone',
            type: 'string',
        },
        {
            name: 'siteAuthorAddress',
            title: 'Site Author Address',
            type: 'string',
        },
        {
            name: 'siteAuthorCity',
            title: 'Site Author City',
            type: 'string',
        },
        {
            name: 'siteAuthorState',
            title: 'Site Author State',
            type: 'string',
        },
        {
            name: 'siteAuthorZip',
            title: 'Site Author Zip',
            type: 'string',
        },
        {
            name: 'siteAuthorCountry',
            title: 'Site Author Country',
            type: 'string',
        },
        {
            name: 'siteSocialMedia',
            title: 'Site Social Media',
            type: 'array',
            of: [
                {
                    name: 'socialMedia',
                    title: 'Social Media',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
});