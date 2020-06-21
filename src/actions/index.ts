import types from '../types';

export interface Action {
  type: string;
  payload: any;
}

export const addScore: Function = (payload: any) => ({
  type: types.ADD_SCORE,
  payload,
});
