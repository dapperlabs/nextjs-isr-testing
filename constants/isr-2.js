export const code = `export async function getStaticProps() {
  const count = is2Counter();
  console.log('isr-2 getStaticProps running, count:', count);
  if (count === 5) throw new Error('Failed to get static props');

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}`;

export const localResults = `isr-2 getStaticProps running, count: 1
isr-2 getStaticProps running, count: 2
isr-2 getStaticProps running, count: 3
isr-2 getStaticProps running, count: 4
isr-2 getStaticProps running, count: 5
Error: Failed to get static props
isr-2 getStaticProps running, count: 6
isr-2 getStaticProps running, count: 7
isr-2 getStaticProps running, count: 8
isr-2 getStaticProps running, count: 9
`;

export const vercelResults = ``;
