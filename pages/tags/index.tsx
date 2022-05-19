import Layout from '../../components/layout'
import { getAllTags } from '../../lib/api'
import Head from 'next/head'
import Container from '../../components/container'
import TagType from '../../types/tag'
import LinkTag from '../../components/link-tag'
import 'remixicon/fonts/remixicon.css'

type Props = {
  allTags: TagType[]
}

export default function Tags({ allTags }: Props){
  return (
    <Layout>
      <Container>
        <Head>
          <title>tags | cat2koban.dev</title>
        </Head>
        <div className="max-w-2xl mx-auto">
          <div className="font-bold text-3xl mb-8">
            <i className="ri-price-tag-3-fill"></i>            
            <span className="align-top ml-2">
              Tags
            </span>
          </div>
          { allTags.map((tag) => (
            <LinkTag name={tag.name} href={`/tags/${tag.name}`}></LinkTag>
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