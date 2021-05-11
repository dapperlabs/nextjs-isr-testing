export const code = `export async function getStaticProps() {
  const count = counter();

  console.log('getStaticProps running', count);

  if (count === 5) throw new Error('Failed to get static props');

  return {
    props: {
      count,
    },
    revalidate: 2,
  }
}`;

export const results = `getStaticProps running 1
getStaticProps running 2
getStaticProps running 3
getStaticProps running 4
getStaticProps running 5
Error: Failed to get static props
getStaticProps running 6
getStaticProps running 7
getStaticProps running 8
getStaticProps running 9
`;
