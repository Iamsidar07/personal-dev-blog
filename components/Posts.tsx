import { Post, Tag } from '@/types'
import Order from './Order'
import Search from './Search'
import Tags from './Tags'
import PostCard from './PostCard'
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
                posts?.map((post) => <PostCard key={post._id} post={post} />)
            }

        </section>
    )
}

export default Posts