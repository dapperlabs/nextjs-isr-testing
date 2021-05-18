export async function promise(result = 'pass') {
  return new Promise((resolve, reject) => {
    setTimeout(result === 'pass' ? resolve : reject, 1000);
  });
}
