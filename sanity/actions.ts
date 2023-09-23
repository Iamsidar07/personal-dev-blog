import { groq } from "next-sanity";
import { client } from "./lib/client";
import { PrepareQuery } from "./utils";

interface GetPostsParams {
    postId?: string,
    query?: string,
    order?: string,
    tag?: string,
    category?: string
}

export async function getPosts({ postId, query, order, category, tag }: GetPostsParams) {
    try {
        const posts = await client.fetch(groq`${PrepareQuery({
            type: "post",
            query,
            category,
            tag,
            id: postId
        })}{
            _id,
            title,
            "slug": slug.current,
            "author": author->{name,"image": image.asset->url},
            "mainImage": mainImage.asset->url,
            "categories": categories[]->title,
            "tags": tags[]->title,
            publishedAt,
            body
        }${postId ? "[0]" : "[0...100]"}`);
        return posts;
    } catch (error: any) {
        console.log("ERROR: while querying data.", error)
    }
}

export async function getCategories() {
    try {
        const categories = await client.fetch(groq`*[_type=="category"]{
            _id,
            title,
            description
        }`);
        return categories;
    } catch (error: any) {
        console.log('SOMETHING WENT WRONG!!', error.message)
    }
}

export async function getTags() {
    try {
        const tags = await client.fetch(groq`*[_type=="tag"]{
            _id,
            title
        }`);
        return tags;
    } catch (error: any) {
        console.log('SOMETHING WENT WRONG!!', error.message);
    }
}

export async function getProfile() {
    try {
        const profile = await client.fetch(groq`*[_type=="profile"]{
            _id,
            name,
            "image":image.asset->url,
            bio,
            role,
            socialLinks,
        }[0]`);
        return profile;
    } catch (error: any) {
        console.log('SOMETHING WENT WRONG!!', error.message);
    }
}
