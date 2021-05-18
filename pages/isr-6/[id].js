import { useEffect } from 'react';
import Prism from 'prismjs';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { promise } from '../../utils/promise';

function Isr6ById({ id }) {
  const router = useRouter()

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  console.log('isr-6 router.isFallback:', router.isFallback);

  return (
    <div>
      <Head>
        <title>ISR Test #5 - ID {id}</title>
      </Head>
      <h1>ISR Test #5 - ID {id}</h1>
      <p>
        <Link href="/isr-6">
          <a>Back to all listings</a>
        </Link>
      </p>
    </div>
  );
}

export async function getStaticPaths() {
  console.log('isr-6 getStaticPaths running');

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
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  console.log('isr-6 getStaticProps running, id:', id);

  await promise();

  return {
    props: {
      id,
    },
    revalidate: 2,
  };
}

export default Isr6ById;
