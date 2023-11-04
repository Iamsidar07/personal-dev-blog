import { RichTextComponents } from "@/components";
import { getPosts } from "@/sanity/actions";
import { Post } from "@/types";
import { formatDate } from "@/utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


const options = { year: 'numeric', month: 'long', day: 'numeric' };



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

const PostPage = async ({ params }: PostPageProps) => {
  const post: Post = await getPosts({
    query: "",
    slug: params.slug ? params.slug : "",
  });

  return (
    <main className="flex flex-col min-h-screen">
      {post && (
        <div >
          <section className="block text-zinc-100 bg-slate-100 dark:bg-zinc-800 w-full relative px-5 z-0">
            <div className="pt-1 max-w-7xl mx-auto px-5 sm:px-10">
              <div className="-mx-6 pt-1">
                <div className="mt-5 sm:mt-10 mb-6 sm:mb-8">
                  <Link href={`/?category=${post.category}`}>
                    <p className="capitalize bg-gradient-to-r from-purple-600 to-red-600 inline-block text-transparent bg-clip-text font-bold mb-3">{post.category}</p>
                  </Link>
                  <h3 className="text-5xl font-bold mb-3 text-gray-800 dark:text-zinc-50">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-zinc-100">{post.description}</p>
                </div>
                <div className="-px-6">
                  <div className="relative -mb-12">
                    <svg aria-hidden="true" width="1032" height="548" className="w-full h-auto block pointer-events-none" ></svg>
                    <Image src={post.mainImage} alt={post.title} width={1600} height={850} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full bottom-0 bg-white dark:bg-zinc-900 h-20 -z-10 -mx-5"></div>
          </section>
          <section className="mt-24 max-w-7xl mx-auto px-5 sm:px-10">
            <div className="sm:-mx-5 mt-5 border-b-2 border-blue-400 pb-4">
              <div className="font-monu mb-4 text-gray-600 dark:text-zinc-400">Auhtor</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <Image src={post.author?.image} alt={post.author.name} width={40} height={40} className="rounded-full" />
                  <span className="font-bold text-base">{post.author.name}</span>
                </div>
                <time dateTime={new Date(post.publishedAt).toString()} className="font-mono flex-shrink-0 text-sm text-gray-600 dark:text-zinc-400 pl-6 border-l min-h-[28px] mt-2 dark:border-zinc-800">
                  {formatDate(new Date(post.publishedAt))}
                </time>
              </div>
            </div>
            <div className="mt-12 sm:-mx-5">
              <PortableText value={post.body} components={RichTextComponents} />
            </div>
            <div className="mt-6 sm:-mx-5">
              <p className="capitalize bg-gradient-to-r from-purple-600 to-red-600 inline-block text-transparent bg-clip-text font-bold mb-3">{post.tags}</p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default PostPage;
