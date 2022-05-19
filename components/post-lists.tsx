import Post from '../types/post'
import Link from 'next/link'
import { TitleDateFormat } from './date-format'
import LinkTag from '../components/link-tag'

type Props = {
  posts: Post[]
}

const PostLists = ({ posts }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post) => (
        <div className="text-xl mb-8">
          <div>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:underline hover:text-sky-600">{post.title}</a>
            </Link>
          </div>
          <div className="mb-2 inline-block">
            <small className="align-middle w-24 mr-3">
              <TitleDateFormat date={post.date} />
            </small>
          </div>
          {post.tags.map((tag) => (
            <div className="inline-block">
              <LinkTag name={tag} href={`/tags/${tag}`}></LinkTag>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PostLists
