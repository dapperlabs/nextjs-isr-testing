import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import { code, localResults, vercelResults } from '../constants/isr-2';

let count = 0;

function Isr2({ count }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>ISR Test #2</h1>
      <p>A simple counter based test. When the count hits 5, then getStaticProps throws an error that is not caught.</p>
      <h2>Count</h2>
      <p>{count}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Console</h2>
      <h3>Local production build:</h3>
      <pre>
        <code className="language-shell">{localResults}</code>
      </pre>
      <h3>Vercel deployments:</h3>
      <p>getStaticProps runs and the count goes up in order. But when it hits count number 5, it errors, and then re-runs validation again automatically after what seems like the revalidation period of n seconds. However it doesn't continue incrementing from where it left off… it's almost like it bounces to a new instance and starts the whole thing over from count = 1.</p>
      <pre>
        <code className="language-shell">{vercelResults}</code>
      </pre>
      <h2>Visual</h2>
      <h3>Local production build:</h3>
      <p>No hiccups. User always sees the page and count variable. Even on the try that errors, the page will not break.</p>
      <h3>Vercel deployments:</h3>
      <p>Same as above, but user sees count going from 1 to 4, then back to 1.</p>
    </div>
  );
}

export async function getStaticProps() {
  count += 1;
  console.log('isr-2 getStaticProps running, count:', count);
  if (count === 5) throw new Error('Failed to get static props');

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}

export default Isr2
