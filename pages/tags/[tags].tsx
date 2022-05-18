import Head from 'next/head'
import Link from "next/link"
import Container from "../../components/container"
import { TitleDateFormat } from "../../components/date-format"
import Header from "../../components/header"
import Layout from "../../components/layout"
import LinkTag from "../../components/link-tag"
import PostTitle from '../../components/post-title'
import { getAllTags, getAssociatedPosts, getPostBySlug } from "../../lib/api"
import PostType from "../../types/post"
import TagType from '../../types/tag'

type Props = {
  posts: PostType[]
  tag_name: string
}

export default function TagsPosts({ posts, tag_name }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{tag_name} | cat2koban.dev</title>
        </Head>
        <Container>
          <Header />
          <div className="max-w-2xl mx-auto">
            <div className="text-3xl mb-8">
              <span className="font-bold">
                Tag
              </span>
              <div className="inline-block text-2xl ml-3">
                <span>
                  #{tag_name}
                </span>
                (
                <span className="text-red-500">
                  {posts.length}
                </span>
                )
              </div>
            </div>
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
                    <LinkTag name={tag} href={`/tags/${tag}`}></LinkTag>
                  ))}
                </div>
              </h3>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const data = await getAllTags()

  const paths = data.map((tag: TagType) => {
    return `/tags/${tag.name}`;
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const tag = params.tags
  const postData = await getAssociatedPosts(tag, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ])

  return {
    props: {
      posts: [
        ...postData
      ],
      tag_name: tag
    },
  };
}
