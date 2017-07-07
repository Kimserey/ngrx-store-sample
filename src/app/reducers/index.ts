import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import * as fromUser from './user';
import * as fromGroup from './group';

export interface State {
  user: fromUser.State;
  group: fromGroup.State;
}

const reducers = {
  user: fromUser.reducer,
  group: fromGroup.reducer,
};

const combinedReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combinedReducer(state, action);
}
