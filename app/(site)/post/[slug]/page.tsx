import { RichTextComponents } from "@/components";
import { getPosts } from "@/sanity/actions";
import { Post } from "@/types";
import { formateDate } from "@/utils";
import { PortableText } from "@portabletext/react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

interface PostPageProps {
  searchParams: { post_id: string },
  params: { slug: string }
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const previousImages = (await parent).openGraph?.images || []
  const title = slug.replaceAll("-", " ")
  return {
    title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

const PostPage = async ({ searchParams, params }: PostPageProps) => {
  const { post_id } = searchParams;
  const post: Post = await getPosts({
    postId: post_id,
    query: ""
  });

  return (
    <article className="p-2 lg:p-12">
      <span className="px-6 py-1.5 rounded-full bg-purple-500">{post.categories[0]}</span>
      <section className="flex flex-col gap-2 my-4">
        <h1 className="text-2xl lg:text-6xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-2 py-2">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <span className="text-slate-800 dark:text-zinc-500 pr-3 border-r-2 dark:border-r-zinc-600">{post.author.name}</span>
          <span className="text-slate-800 dark:text-zinc-500">{formateDate(post.publishedAt.toString())}</span>
        </div>
        <div className="flex items-center gap-2">
          {post.categories.map((category) => <span key={category} className='text-zinc-900 dark:text-zinc-500 px-2.5 py-1 dark:bg-zinc-800/10 rounded-full ring-1 ring-white/10 border dark:border-none dark:ring-white/10 lg:shadow-lg lg:shadow-zinc-800/5 text-xs'>{category}</span>)}
        </div>
        <Image
          src={post.mainImage}
          alt="Blog post image"
          width={1920}
          height={1080}
          className="w-full h-1/3 max-h-96 rounded-2xl my-4  object-cover aspect-video"
        />
      </section>
      <section>
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  )
}

export default PostPage