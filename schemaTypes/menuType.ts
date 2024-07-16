import { defineType } from "sanity";

export const menuType = defineType({
    name: 'menuType',
    title: 'Menu List',
    type: 'document',
    fields: [
        {
            type: "reference",
            name: "Page",
            title: "Page",
            to: { type: "pageType" },
        },
        {
            type: "number",
            name: "order",
        }
    ],
});