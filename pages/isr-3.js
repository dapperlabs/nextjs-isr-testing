import { useEffect } from 'react';
import Head from 'next/head'
import Prism from 'prismjs';
import { code } from '../constants/isr-3';

function Isr3({ num }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test 3</title>
      </Head>
      <h1>ISR Test #3</h1>
      <p>Fetches a random number from an API. If it's &#60; 5, throws an error. This error gets caught though, and in the catch block, we reurn notFound and also do revalidation. Revalidates every 2 seconds.</p>
      <h2>Num</h2>
      <p>{num}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Local production build:</h2>
      <p>Shows the console message as outlined in the code. When there's an error, the 404 page gets shown and error gets logged to console. On subsequent refreshes, if revaldation results in a success, then the page switches back to success view.</p>
      <h2>Vercel deployments:</h2>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://random-data-api.com/api/number/random_number');
    const data = await res.json();
    const num = data.digit;
    console.log('isr-3 getStaticProps running, num:', num);
    if (num < 5) throw new Error('isr-3 Failed to get static props');

    return {
      props: {
        num,
      },
      revalidate: 2,
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
      revalidate: 2,
    };
  }
}

export default Isr3
