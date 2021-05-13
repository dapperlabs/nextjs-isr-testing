import { useEffect } from 'react';
import Prism from 'prismjs';
import Head from 'next/head'
import { code } from '../constants/isr-1';

function Isr1({ num }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test #1</title>
      </Head>
      <h1>ISR Test #1</h1>
      <p>Returns a number from getStaticProps, with revalidation every 2 seconds.</p>
      <h2>Count</h2>
      <p>{num}</p>
      <h2>Code</h2>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
      <h2>Local production build:</h2>
      <p>Logs every time getStaticProps runs</p>
      <h2>Vercel deployments:</h2>
      <p>Logs every time getStaticProps runs</p>
    </div>
  );
}

export async function getStaticProps() {
  console.log('isr-1 getStaticProps running');

  return {
    props: {
      num: 2,
    },
    revalidate: 2,
  }
}

export default Isr1
