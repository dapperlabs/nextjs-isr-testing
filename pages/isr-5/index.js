import { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Prism from 'prismjs';
import { code } from '../../constants/isr-5';

function Isr5() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test #5</title>
      </Head>
      <h1>ISR Test #5</h1>
      <p>This test supports a hyopthetical number of dynamic paths. The path param is <code>id</code>, and we're supporting IDs 1 - 5. IDs 1 - 5 will be returned from getStaticPaths. We've set <code>fallback: true</code> in getStaticPaths, meaning that any other id should build on demand in the background. This happens by getStaticProps running in the background, while the user immediately transitions routes during a client side transition. The prop <code>router.isFallback</code> on the next router should be <code>true</code> during this transition, allowing us to show loading states.</p>
      <p>We're not validating against ids in getStaticProps, so theoretically, any id should work.</p>
      <ul>
        {new Array(8).fill().map((_, index) => {
          const id = index + 1;
          return (
            <li key={`isr-5-link-${id}`}>
              <Link href={`/isr-5/${id}`}>
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

export default Isr5
