import { getCategories, getPosts, getProfile, getTags } from "@/sanity/actions"
import { Category, Post, Profile, Tag } from "@/types";
import { CategoryList } from "@/components";
import Posts from "@/components/Posts";
import ProfileComponent from "@/components/ProfileComponent";

interface HomeProps {
  searchParams: {
    order?: string,
    query?: string,
    category?: string,
    tag?: string,
  }
}

export const revalidate = 900; // 15 minutes -> 15x60=900 seconds


export default async function Home({ searchParams }: HomeProps) {
  const { order, tag, query, category } = searchParams;
  const posts: Post[] = await getPosts({
    query: query || "",
    postId: "",
    order: order ? `publishedAt ${order}` : "",
    category: category || "",
    tag: tag || "",
  });
  const categories: Category[] = await getCategories();
  const tags: Tag[] = await getTags();
  const profile: Profile = await getProfile();
  return (
    <main className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-stretch gap-1 lg:gap-2 justify-end  min-h-screen p-4 lg:p-6">
      <CategoryList categories={categories} />
      {
        posts?.length > 0 ? (
          <Posts posts={posts} tags={tags} />
        ) : (
          <section className="w-full p-6 flex-1">
            <h1 className="text-center">No posts</h1>
          </section>
        )
      }
      <ProfileComponent profile={profile} />
    </main>
  )
}