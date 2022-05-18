import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import LinkTag from '../../components/link-tag'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import markdownToHtml from 'zenn-markdown-html'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 max-w-2xl mx-auto">
              <Head>
                <title>
                  {post.title} | cat2koban.dev 
                </title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              {Array.isArray(post.tags) ? (
                post.tags.map((tag) => (
                  <LinkTag name={tag} href={`/tags/${tag}`}></LinkTag>
                ))
              ) : (
                <LinkTag name={post.tags} href={`/tags/${post.tags}`}></LinkTag>
              )}
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts: PostType[] = await getAllPosts(['slug'])

  return {
    paths: posts.map((post: PostType) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
