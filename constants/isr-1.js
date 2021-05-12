export const code = `export async function getStaticProps() {
  console.log('isr-1 getStaticProps running');

  return {
    props: {
      num: 2,
    },
    revalidate: 2,
  }
}`;
