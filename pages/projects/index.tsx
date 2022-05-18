import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'

export default function Projects(){
  return (
    <Layout>
      <Container>
        <Head>
          <title>projects | cat2koban.dev</title>
        </Head>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl mb-8">Projects</h2>
          <span>
              じゅんびちゅう
          </span>
       </div>
      </Container>
    </Layout>
  )
}