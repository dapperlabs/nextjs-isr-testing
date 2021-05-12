import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import { code } from '../constants/isr-2';

function Isr2({ num }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test 2</title>
      </Head>
      <h1>ISR Test #2</h1>
      <p>Fetches a random number from an API. If it's &#60; 5, throws an error. Revalidates every 2 seconds.</p>
      <h2>Num</h2>
      <p>{num}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Local production build:</h2>
      <p>Shows the console message as outlined in the code. Logs the error when there is an error.</p>
      <h2>Vercel deployments:</h2>
      <p>Console seems erratic… can't seem to match the logs with what's showing up in the app. getStaticProps also seems to execute multiple times per page refresh…</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://random-data-api.com/api/number/random_number');
  const data = await res.json();
  const num = data.digit;

  console.log('isr-2 getStaticProps running, num:', num);

  if (num < 5) throw new Error('isr-2 Failed to get static props');

  return {
    props: {
      num,
    },
    revalidate: 2,
  }
}

export default Isr2
