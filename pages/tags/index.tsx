import Layout from '../../components/layout'
import { getAllTags } from '../../lib/api'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/header'
import Container from '../../components/container'
import TagType from '../../types/tag'
import LinkTag from '../../components/link-tag'

type Props = {
  allTags: TagType[]
}

export default function Tags({ allTags }: Props){
  return (
    <Layout>
      <Container>
        <Head>
          <title>tags|cat2koban.dev</title>
        </Head>
        <Header />
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl mb-8">Tags</h2>
          { allTags.map((tag) => (
            <LinkTag name={tag.name} href={tag.name}></LinkTag>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allTags = await getAllTags()
  return {
    props: { allTags },
  }
}