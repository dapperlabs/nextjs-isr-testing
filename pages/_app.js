import 'prismjs/themes/prism.css';
import '../styles/globals.css'
import { Fragment } from 'react';
import Head from 'next/head'
import App from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>ISR Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/isr-1">
                  <a>ISR 1</a>
                </Link>
              </li>
              <li>
                <Link href="/isr-2">
                  <a>ISR 2</a>
                </Link>
              </li>
              <li>
                <Link href="/isr-3">
                  <a>ISR 3</a>
                </Link>
              </li>
              <li>
                <Link href="/isr-4">
                  <a>ISR 4</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Component {...pageProps} />
        <footer>
          <span>A <a href="https://www.dapperlabs.com/" target="_blank">dapperlabs.com</a> experiment</span>
        </footer>
      </div>
    </Fragment>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp
