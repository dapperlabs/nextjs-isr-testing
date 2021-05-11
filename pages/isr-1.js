import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import { counter } from '../utils/counter';
import { code, results } from '../constants/isr-1';

function Isr1({ count }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>ISR Test #1</h1>
      <p>A simple counter based test. When the count hits 5, then getStaticProps throws an error that is not caught.</p>
      <h2>Count</h2>
      <p>{count}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Console</h2>
      <pre>
        <code className="language-shell">{results}</code>
      </pre>
      <h2>Visual</h2>
      <p>No hiccups. User always sees the page. Will see stale count variable if getStaticProps errors, but the page will not break.</p>
    </div>
  );
}

export async function getStaticProps() {
  const count = counter();

  console.log('getStaticProps running', count);

  if (count === 5) throw new Error('Failed to get static props');

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}

export default Isr1
