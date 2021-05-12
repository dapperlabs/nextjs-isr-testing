export const code = `export async function getStaticProps() {
  try {
    const res = await fetch('https://random-data-api.com/api/number/random_number');
    const data = await res.json();
    const num = data.digit;

    console.log('isr-3 getStaticProps running, num:', num);

    if (!isBuilding() && num < 5) throw new Error('isr-3 Failed to get static props');

    return {
      props: {
        num,
      },
      revalidate: 2,
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
      revalidate: 2,
    };
  }
}`;
