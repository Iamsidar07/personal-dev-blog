import { PortableTextBlock } from "sanity"

export interface Author {
    _id: string,
    name: string,
    slug: string,
    image: string,
    bio: PortableTextBlock
}
export interface Category {
    _id: string,
    title: string,
    description: string
}

export interface Post {
    _id: string,
    title: string,
    slug: string,
    author: {
        name: string,
        image: string,
    },
    mainImage: string,
    category: string,
    tags: string,
    publishedAt: Date,
    description: string,
    body: PortableTextBlock
}

export interface Tag {
    _id: string,
    title: string
}

export interface Profile {
    _id: string,
    name: string,
    image: string,
    bio: PortableTextBlock,
    role: string,
    socialLinks: {
        github: string,
        twitter: string,
        instagram: string,
        linkedin: string
    }
}