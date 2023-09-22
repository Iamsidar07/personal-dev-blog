import { Post, Tag } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Order from './Order'
import Search from './Search'
import Tags from './Tags'
import { formateDate } from '@/utils'
interface PostsProps {
    posts: Post[],
    tags: Tag[]
}
const Posts = ({ posts, tags }: PostsProps) => {
    return (
        <section className='flex flex-col h-fit w-full flex-1 sm:px-1.5 relative'>
            <div className='flex items-stretch justify-between mb-2 gap-2'>
                <Tags options={tags} />
                <Search />
                <Order />
            </div>
            {
                posts.map((post) => <div key={post._id} className='bg-zinc-50  ring-white dark:bg-zinc-700 rounded-2xl w-full h-full  bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90 group '>
                    <Link href={`/post/${post.slug}?post_id=${post._id}`}>
                        <div className='relative w-full h-64 sm:h-72 overflow-hidden rounded-t-2xl'>
                            <Image
                                src={post.mainImage}
                                alt={post.title}
                                fill
                                className='rounded-t-2xl absolute inset-0 hover:scale-125 duration-300 '
                            />
                            <div className='flex items-center gap-2 absolute top-4 left-4'>
                                <span className='px-7 py-1 bg-purple-300 rounded-2xl'>{post.categories[0]}</span>
                            </div>
                        </div>
                        <div className='px-2.5 py-3 rounded-b-2xl flex flex-col gap-2 bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90'>
                            <h2 className='text-xl lg:text-3xl pt-4 font-bold group-hover:text-teal-500 duration-200'>{post.title}</h2>
                            <p className='text-slate-800 dark:text-zinc-500'>{formateDate(post.publishedAt.toString())}</p>
                            <p className='flex items-center gap-2'>
                                {
                                    post.tags.map((tag, index) => <span key={index} className='text-zinc-900 dark:text-zinc-500 px-2.5 py-1 dark:bg-zinc-800/10 rounded-full ring-1 ring-white/90 border dark:border-none dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/5 text-xs'>{tag}</span>)
                                }
                            </p>
                        </div>
                    </Link>
                </div>)
            }

        </section>
    )
}

export default Posts