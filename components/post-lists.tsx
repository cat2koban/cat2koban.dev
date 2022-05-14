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
        <h3 className="text-xl mb-8">
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <a className="hover:underline text-sky-600">{post.title}</a>
          </Link>
          <br />
          <div className="flex mb-8">
            <small className="flex-initial w-24">
              <DateFormatter date={post.date} />
            </small>
            <div className="flex">
              {Array.isArray(post.tags) ? (
                post.tags.map((tag) => (
                  <span className="mr-2 font-light">
                    #{tag}
                  </span>
                ))
              ) : (
                <span className="mr-2">{post.tags}</span>
              )}
            </div>
          </div>
        </h3>
      ))}
    </div>
  )
}

export default PostLists
