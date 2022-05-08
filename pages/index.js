import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <small className={utilStyles.postDateText}>
                <Date dateString={date} />
              </small>
              <br />
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.postTitleText}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
