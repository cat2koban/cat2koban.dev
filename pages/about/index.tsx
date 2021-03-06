import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'
import 'remixicon/fonts/remixicon.css'

export default function About(){
  return (
    <Layout>
      <Container>
        <Head>
          <title>about | cat2koban.dev</title>
        </Head>
        <div className="max-w-2xl mx-auto">
          <div className="font-bold text-3xl mb-8">
            <i className="ri-user-line"></i>
            <span className="align-top ml-2">
              About
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