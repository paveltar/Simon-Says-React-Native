export const sleep = time => new Promise((resolve) => setTimeout(resolve, time));

export const getRandomInt = (min, max) => {
  const _min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - _min + 1)) + _min;
};
