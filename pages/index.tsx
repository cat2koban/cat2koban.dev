import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import PostLists from '../components/post-lists'
import Footer from '../components/footer'
import Container from '../components/container'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>cat2koban.dev</title>
        </Head>
        <Container>
          <PostLists posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
