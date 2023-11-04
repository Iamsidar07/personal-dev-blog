import { groq } from "next-sanity";
import { client } from "./lib/client";
import { prepareQuery } from "./utils";

interface GetPostsParams {
  postId?: string;
  query?: string;
  order?: string;
  tag?: string;
  category?: string;
  slug?: string
}

export async function getPosts({
  postId,
  query,
  order,
  category,
  tag,
  slug
}: GetPostsParams) {
  try {
    const posts = await client.fetch(groq`${prepareQuery({
      type: "post",
      query,
      category,
      tag,
      slug,
      id: postId,
    })}{
            _id,
            title,
            "slug": slug.current,
            "author": author->{name,"image": image.asset->url},
            "mainImage": mainImage.asset->url,
            "category": category,
            "tags": tags,
            publishedAt,
            description,
            body
        }${slug ? "[0]" : "[0...23]"}`);
    return posts;
  } catch (error: any) {
    console.log("ERROR: while querying data.", error);
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
    console.log("SOMETHING WENT WRONG!!", error.message);
  }
}
