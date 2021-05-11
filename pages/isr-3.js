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
    </div>
  );
}

export async function getStaticProps() {
  try {
  } catch (error) {
  }

  // const res = await fetch('https://random-data-api.com/api/number/random_number');
  // const data = await res.json();
  // const num = data.digit;

  // console.log('isr-2 getStaticProps running, num:', num);

  // if (num < 5) throw new Error('Failed to get static props');

  return {
    props: {
      // num,
    },
    revalidate: 2,
  }
}

export default Isr3
