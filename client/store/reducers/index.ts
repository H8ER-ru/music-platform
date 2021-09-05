import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { HYDRATE } from 'next-redux-wrapper';
import { trackReducer } from './trackReducer';

export const rootReducers = combineReducers({
  player: playerReducer,
  track: trackReducer
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducers(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducers>;
