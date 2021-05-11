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

export const localResults = `isr-1 getStaticProps running, count: 1
isr-1 getStaticProps running, count: 2
isr-1 getStaticProps running, count: 3
isr-1 getStaticProps running, count: 4
isr-1 getStaticProps running, count: 5
isr-1 getStaticProps running, count: 6
isr-1 getStaticProps running, count: 7
isr-1 getStaticProps running, count: 8
isr-1 getStaticProps running, count: 9
`;

export const vercelResults = ``;
