import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import { code, localResults, vercelResults } from '../constants/isr-2';

function Isr2({ num }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>ISR Test #2</h1>
      <p>A simple number based test. Fetches a random number from an API. If it's {`<=`} 5, throws an error.</p>
      <h2>Num</h2>
      <p>{num}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Console</h2>
      <h3>Local production build:</h3>
      <p>Shows the console message as outlined in the code. Logs the error when there is an error.</p>
      <h3>Vercel deployments:</h3>
      <p></p>
      <h2>Visual</h2>
      <h3>Local production build:</h3>
      <p>No hiccups. User always sees the page and num variable. Even on the try that errors, the page will not break.</p>
      <h3>Vercel deployments:</h3>
      <p>Same as above, but user sees num going from 1 to 4, then back to 1.</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://random-data-api.com/api/number/random_number');
  const data = await res.json();
  const num = data.digit;

  console.log('isr-2 getStaticProps running, num:', num);

  if (num <= 5) throw new Error('Failed to get static props');

  return {
    props: {
      num,
    },
    revalidate: 2,
  }
}

export default Isr2
