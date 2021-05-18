import { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Prism from 'prismjs';
import { code } from '../../constants/isr-4';

function Isr4() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test #4</title>
      </Head>
      <h1>ISR Test #4</h1>
      <p>This test supports a hyopthetical number of dynamic paths. The path param is <code>id</code>, and we're supporting IDs 1 - 5. IDs 1 - 5 will be returned from getStaticPaths. We've set <code>fallback: false</code> in getStaticPaths, meaning that any other id should result in a 404.</p>
      <ul>
        {new Array(8).fill().map((_, index) => {
          const id = index + 1;
          return (
            <li key={`isr-4-link-${id}`}>
              <Link href={`/isr-4/${id}`}>
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

export default Isr4
