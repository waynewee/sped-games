export const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const arrayFromNum = (num: number) => {
  if (num < 0) {
    return [];
  }

  return Array.from(Array(num).keys());
};
