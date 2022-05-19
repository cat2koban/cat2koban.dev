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
        <h3 className="text-xl mb-8">
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <a className="hover:underline hover:text-sky-600">{post.title}</a>
          </Link>
          <br />
          <div className="inline-block mb-2">
            <small className="align-middle w-24 mr-3">
              <TitleDateFormat date={post.date} />
            </small>
          </div>
          <div className="inline-block">
            {post.tags.map((tag) => (
              <div className="inline-block">
                <LinkTag name={tag} href={`/tags/${tag}`}></LinkTag>
              </div>
            ))}
          </div>
        </h3>
      ))}
    </div>
  )
}

export default PostLists
