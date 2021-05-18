import { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Prism from 'prismjs';
import { code } from '../../constants/isr-6';

function Isr6() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test #6</title>
      </Head>
      <h1>ISR Test #6</h1>
      <p>This test supports a hyopthetical number of dynamic paths. The path param is <code>id</code>, and we're supporting IDs 1 - 5. IDs 1 - 5 will be returned from getStaticPaths. We've set <code>fallback: 'blocking'</code> in getStaticPaths, meaning that any other id should build on demand. This time though, the page will wait for getStaticProps to run and generate the HTML before serving up the page. This is identical to SSR. Future requests will be cached.</p>
      <ul>
        {new Array(8).fill().map((_, index) => {
          const id = index + 1;
          return (
            <li key={`isr-6-link-${id}`}>
              <Link href={`/isr-6/${id}`}>
                <a>ID #{id}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Local production build:</h2>
      <h2>Vercel deployments:</h2>
    </div>
  );
}

export default Isr6
