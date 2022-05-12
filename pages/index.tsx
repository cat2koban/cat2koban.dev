import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import PostLists from '../components/post-lists'
import Header from '../components/header'
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
          <Header />
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
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
