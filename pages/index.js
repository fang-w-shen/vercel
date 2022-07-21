import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import MonthDate from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/projects";
import utilStyles from "../styles/utils.module.css";
import MovingStars from '../utils/MovingStars';

export default function Home({ projects }) {
  useEffect(() => {
    MovingStars()
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.fullWidth}`}>
        <canvas id='canvas3'></canvas>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {projects.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/portfolio/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <MonthDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getSortedPostsData();
  return {
    props: {
      projects,
    },
  };
}
