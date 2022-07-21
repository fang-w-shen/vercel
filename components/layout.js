import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = `👋  I'm Fang`;
export const siteTitle = "FWS - Home";

export default function Layout({ children, home }) {
  useEffect(() => {
    var card = document.getElementById('card');
    card && document.getElementById('flip').addEventListener('click', function () {
      card.classList.toggle('flipped');
    }, false);

  })
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="FWS - Portfolio" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header + ` ${home ? styles.fullScreen : ""}`}>
        {home ? (
          <>

            <button id="flip">
              <div id="card">
                <div className="front">
                  <Image
                    priority
                    src="/images/icon.svg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                  />
                </div>

                <div className="back">
                  <Image
                    priority
                    src="/images/profile.svg"
                    height={144}
                    width={144}
                    alt={name}
                  />
                </div>

              </div>
            </button>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <button className="arrow bounce"></button>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {
        !home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )
      }

      <footer>
        <div>
          <a href="https://linkedin.com/in/fang-wen-shen">
            <Image
              priority
              src="/images/linkedin.svg"
              height={33}
              width={33}
              alt={name}
            />
          </a>
          <a href="https://github.com/fang-w-shen">
            <Image
              priority
              src="/images/github.svg"
              height={33}
              width={33}
              alt={name}
            />
          </a>
        </div>
        © {new Date().getFullYear()} <a href='https://github.com/fang-w-shen'>Fang-Wen Shen</a>
      </footer>
    </div >
  );
}
