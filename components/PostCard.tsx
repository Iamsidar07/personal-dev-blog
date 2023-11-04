import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatDate } from "@/utils";
dayjs.extend(relativeTime);
interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="w-full lg:max-w-[698px]">
      <article className="py-4 flex flex-col">
        <Link href={`/post/${post.slug}`} className="mb-3 w-full rounded-lg h-[235px] sm:h-[330px] lg:h-[370px] block relative overflow-hidden rounded-t-lg">
          <Image
            src={post.mainImage}
            alt={post.title}
            width={800}
            height={425}
            className="object-cover rounded-lg hover:scale-105 duration-700 ease-linear absolute top-0 left-0 h-full block w-full"
          />
        </Link>
        <div className="mb-1">
          <Link href={`?category=${post.category}`}>
            <p className="bg-gradient-to-r from-purple-600 to-red-600 inline-block text-transparent bg-clip-text font-bold">{post.category}</p>
          </Link>
        </div>
        <h3 className="text-4xl font-bold hover:text-blue-700 hover:underline hover:underline-offset-1 mb-3">
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-base text-gray-600 dark:text-zinc-400">
          {post.description}
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-3">
            <Image src={post.author.image} alt={post.author.name} width={40} height={40} className="rounded-full object-cover" />
            <div className="flex items-center gap-1.5">
              <span className="font-bold">{post.author.name}</span>
              <time dateTime={new Date(post.publishedAt).toString()} className="font-mono ml-1 mt-1 text-sm text-gray-600 dark:text-zinc-400">
                {formatDate(new Date(post.publishedAt))}
              </time>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostCard;
