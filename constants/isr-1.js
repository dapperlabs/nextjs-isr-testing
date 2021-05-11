export const code = `export async function getStaticProps() {
  const count = isr1Counter();
  console.log('isr-1 getStaticProps running, count:', count);

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}`;
