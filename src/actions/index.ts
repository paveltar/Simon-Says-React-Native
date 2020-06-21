import types from '../types';

export const addScore = (payload) => ({
  type: types.ADD_SCORE,
  payload,
});
