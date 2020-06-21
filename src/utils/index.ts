import {Score} from '../reducers';

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getRandomInt = (min: number, max: number) => {
  const _min = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max) - _min + 1)) + _min;
};

export const sortScores = (a: Score, b: Score) => b.score - a.score;
