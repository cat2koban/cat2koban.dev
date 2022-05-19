import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'
import 'remixicon/fonts/remixicon.css'

export default function Projects(){
  return (
    <Layout>
      <Container>
        <Head>
          <title>projects | cat2koban.dev</title>
        </Head>
        <div className="max-w-2xl mx-auto">
          <div className="font-bold text-3xl mb-8">
            <i className="ri-tools-fill"></i>
            <span className="align-top ml-2">
              Projects
            </span>
          </div>
          <span>
              じゅんびちゅう
          </span>
       </div>
      </Container>
    </Layout>
  )
}