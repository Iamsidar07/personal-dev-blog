import { RichTextComponents } from "@/components";
import { getPosts } from "@/sanity/actions";
import { Post } from "@/types";
import { relativeDate } from "@/utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";

interface PostPageProps {
  searchParams: { post_id: string };
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const title =
    slug.replaceAll("-", " ")[0].toUpperCase() +
    slug.replaceAll("-", " ").slice(1);
  return {
    title,
    description: `Showing article ${title}`,
    openGraph: {
      images: [
        "https://pbs.twimg.com/profile_images/1663775518427344897/x_E7ceTt_400x400.jpg",
      ],
    },
  };
}

const PostPage = async ({ searchParams }: PostPageProps) => {
  const { post_id } = searchParams;
  const post: Post = await getPosts({
    postId: post_id,
    query: "",
  });

  return (
    <main className="flex flex-col min-h-screen">
      {post && (
        <article>
          <Image
            src={post.mainImage}
            alt="Blog post image"
            width={1920}
            height={1080}
            className="h-72 object-cover "
          />
          <div className="px-4 py-3 md:p-6">
            <span className="px-6 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm">
              {post.categories[0]}
            </span>
            <section className="flex flex-col gap-2 my-4">
              <h1 className="text-2xl lg:text-6xl font-bold">{post.title}</h1>
              <div className="flex items-center gap-1.5">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                />
                <span className="text-slate-800 text-sm dark:text-zinc-500 pr-3 border-r-2 dark:border-r-zinc-600">
                  {post.author.name}
                </span>
                <span className="text-slate-800 text-sm dark:text-zinc-500">
                  {relativeDate(new Date(post.publishedAt))}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {post.tags.map((category) => (
                  <span
                    key={category}
                    className="text-zinc-900 dark:text-zinc-500 px-2.5 py-1 dark:bg-zinc-800/10 rounded-full ring-1 ring-white/10 border dark:border-none dark:ring-white/10 lg:shadow-lg lg:shadow-zinc-800/5 text-sm"
                  >
                    #{category}
                  </span>
                ))}
              </div>
            </section>
            <section className="mt-12 max-w-4xl mx-auto">
              <PortableText value={post.body} components={RichTextComponents} />
            </section>
          </div>
        </article>
      )}
    </main>
  );
};

export default PostPage;
