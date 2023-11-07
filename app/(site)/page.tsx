import { getPosts } from "@/sanity/actions";
import { Post } from "@/types";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils";

interface HomeProps {
  searchParams: {
    order?: string;
    query?: string;
    category?: string;
    tag?: string;
  };
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
  return (
    <main className="max-w-7xl mx-auto min-h-screen">
      {posts?.length > 0 ? (
        <div className="flex flex-col gap-5 px-5">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-[60%]">
              <PostCard key={posts[0]._id} post={posts[0]} />
            </div>
            <div className="flex flex-col lg:w-[40%] px-5">
              {posts.slice(0, 3)?.map((post, i) => (
                <article
                  key={post._id}
                  className="py-4 border-b dark:border-gray-800 last:border-none"
                >
                  <div className="flex flex-col sm:flex-row flex-nowrap -mx-3 sm:space-x-5">
                    <div className="w-full sm:w-auto">
                      <Link href={`/post/${post.slug}`}>
                        <Image
                          src={post.mainImage}
                          alt={post.title}
                          width={168}
                          height={168}
                          className="object-cover rounded-lg w-full h-[235px] sm:h-auto"
                        />
                      </Link>
                    </div>
                    <div className="sm:w-[60%] sm:ml-1">
                      <div className="mt-1 sm:mt-0 sm:mb-1">
                        <Link href={`?category=${post.category}`}>
                          <span className="bg-gradient-to-r from-purple-600 to-red-600 inline-block text-transparent bg-clip-text font-bold">
                            {post.category}
                          </span>
                        </Link>
                      </div>
                      <h3 className="text-xl font-bold hover:text-blue-700 hover:underline hover:underline-offset-1 mb-3">
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-zinc-400">
                        {post.description}
                      </p>
                      <div className="mt-3">
                        <div className="flex flex-col items-start">
                          <div className="flex flex-col items-start flex-wrap -mt-1">
                            <span className="font-bold text-base">
                              {post.author.name}
                            </span>
                            <time
                              dateTime={new Date(post.publishedAt).toString()}
                              className="font-mono ml-1 mt-1 text-sm text-gray-600 dark:text-zinc-400"
                            >
                              {formatDate(new Date(post.publishedAt))}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 sm:border-t dark:border-gray-800">
            {posts.slice(2, 4).map((post, i) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <section className="w-full p-6 flex-1">
          <h1 className="text-center">No posts</h1>
        </section>
      )}
    </main>
  );
}
