export async function promise() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
