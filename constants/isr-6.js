export const code = `export async function getStaticPaths() {
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

  return {
    props: {
      id,
    },
    revalidate: 2,
  };
}`;
