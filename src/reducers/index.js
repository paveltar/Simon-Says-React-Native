import types from '../types';

const INITIAL_STATE = {
  scores: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case types.ADD_SCORE:
  		return { ...state, scores: [...state.scores, action.payload] }
  	default:
  		return state
  }
  return state;
};
