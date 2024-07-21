import { defineType } from "sanity";

let doc = {};

const helpers = {
    isHome: (document: { _id: string | string[]; }) => { doc = document; return document?._id && document._id.indexOf('homePage') >= 0 ? true : false },
}

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
            readOnly: ({document}) => { return document && helpers.isHome(document) || false },
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
    ],
})