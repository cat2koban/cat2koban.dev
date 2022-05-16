import Layout from '../../components/layout'
import Head from 'next/head'
import Header from '../../components/header'
import Container from '../../components/container'

export default function About(){
  return (
    <Layout>
      <Container>
        <Head>
          <title>about|cat2koban.dev</title>
        </Head>
        <Header />
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl mb-8">About</h2>
          <span>
              じゅんびちゅう
          </span>
       </div>
      </Container>
    </Layout>
  )
}