import { combineReducers } from 'redux';

export interface RootState {
  router?: any;
}

export const rootReducer = combineReducers<RootState>({
  // Add reducers here
}) as any;
