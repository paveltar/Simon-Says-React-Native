import types from '../types';
import {Action} from '../actions';

const INITIAL_STATE = {
  scores: [],
};

export interface Score {
  name: string;
  score: number;
}

export interface State {
  scores: Array<Score>;
}

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.ADD_SCORE:
      return {...state, scores: [...state.scores, action.payload]};
    default:
      return state;
  }
};
