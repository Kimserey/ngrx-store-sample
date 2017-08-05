import { compose } from '@ngrx/core/compose';
import { createSelector } from 'reselect';
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

export const getUserState = (state: State) => state.user;
export const getUserProfile = createSelector(getUserState, fromUser.getProfile);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserEditedField = createSelector(getUserState, fromUser.getEditedField);

export const getGroupState = (state: State) => state.group;
export const getGroups = createSelector(getGroupState, fromGroup.getGroups);
