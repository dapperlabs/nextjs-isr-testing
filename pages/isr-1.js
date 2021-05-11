import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import counter from '../utils/counter';
import { code, localResults, vercelResults } from '../constants/isr-1';

const isr1Counter = counter();

function Isr1({ count }) {

  return (
    <div>
      <h1>ISR Test #1</h1>
      <p>A simple counter based test. Just increments a counter and returns it.</p>
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
      <pre>
        <code className="language-shell">{vercelResults}</code>
      </pre>
      <h2>Visual</h2>
      <h3>Local production build:</h3>
      <p>No hiccups. User always sees the page and updated count.</p>
      <h3>Vercel deployments:</h3>
      <p>Same</p>
    </div>
  );
}

export async function getStaticProps() {
  const count = isr1Counter();
  console.log('isr-1 getStaticProps running, count:', count);

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}

export default Isr1
