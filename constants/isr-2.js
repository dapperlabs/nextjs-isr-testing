export const code = `export async function getStaticProps() {
  const res = await fetch('https://random-data-api.com/api/number/random_number');
  const data = await res.json();
  const num = data.digit;

  console.log('isr-2 getStaticProps running, num:', num);

  if (!isBuilding() && num < 5) throw new Error('isr-2 Failed to get static props');

  return {
    props: {
      num,
    },
    revalidate: 2,
  }
}`;
