import { defineType } from "sanity";
import * as icons from "@sanity/icons";
import { CustomField, CustomInput } from "../components/CustomField";

const iconsList = Object.keys(icons).map(iconName => ({
    title: iconName,
    value: iconName, // Assuming you have a way to render the icon based on its name
  }));

export const menuType = defineType({
    name: 'menuType',
    title: 'Menu List',
    type: 'document',
    fields: [
        {
            type: "string",
            name: "title",
            title: "Title",
        },
        {
            type: "reference",
            name: "Page",
            title: "Page",
            to: { type: "pageType" },
        },
        {
            type: "number",
            name: "order",
        },
        {
            type: "string",
            name: "icon",
            title: "Icon",
            components: {
                field: CustomField,
                input: CustomInput,
            },
            options: {
                list: iconsList,
            },
            validation(rule) {
                return rule.required();
            },
        }
    ],
});