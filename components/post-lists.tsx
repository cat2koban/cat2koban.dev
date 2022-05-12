import Post from '../types/post'
import Link from 'next/link'
import { DateFormatter } from './date-formatter'

type Props = {
  posts: Post[]
}

const PostLists = ({ posts }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post) => (
        <h3 className="text-3xl mb-8">
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <a className="hover:underline text-sky-600">{post.title}</a>
          </Link>
          <br />
          <small className="text-lg mb-8"><DateFormatter date={post.date} /></small>
        </h3>
      ))}
    </div>
  )
}

export default PostLists
