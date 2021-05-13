import { useEffect } from 'react';
import Prism from 'prismjs';
import Head from 'next/head'
import Link from 'next/link'

function Isr4ById({ id }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Test #4 - ID {id}</title>
      </Head>
      <h1>ISR Test #4 - ID {id}</h1>
      <p>
        <Link href="/isr-4">
          <a>Back to all listings</a>
        </Link>
      </p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      },
      {
        params: { id: '4' }
      },
      {
        params: { id: '5' }
      }
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id,
    },
    revalidate: 2,
  };
}

export default Isr4ById;
