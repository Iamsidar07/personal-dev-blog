import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            description: "Add your social media links:",
            fields: [
                {
                    name: "github",
                    title: "Github URL",
                    type: "url",
                    initialValue: "https://github.com/",
                },
                {
                    name: "linkedin",
                    title: "Linkedin URL",
                    type: "url",
                    initialValue: "https://linkedin.com/in/",
                }, {
                    name: "twitter",
                    title: "Twitter URL",
                    type: "url",
                    initialValue: "https://twitter.com/",
                },
                {
                    name: "instagram",
                    title: "Instagram URL",
                    type: "url",
                    initialValue: "https://instagram.com/",
                },
            ],
            options: {
                collapsed: false,
                collapsible: true,
                columns: 2,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
