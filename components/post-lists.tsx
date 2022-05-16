import Post from '../types/post'
import Link from 'next/link'
import { DateFormatter } from './date-formatter'
import LinkTag from '../components/link-tag'

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
          <div className="mb-8 mt-1">
            <small className="flex-initial align-middle w-24 mr-3">
              <DateFormatter date={post.date} />
            </small>
            {post.tags.map((tag) => (
              <LinkTag name={tag} href={`/tags/${tag}`}></LinkTag>
            ))}
          </div>
        </h3>
      ))}
    </div>
  )
}

export default PostLists
