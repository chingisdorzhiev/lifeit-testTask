export const makeOperation = (
  value: number,
  additional: number,
): Promise<number> =>
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(value + additional);
    }, 1000);
  });
