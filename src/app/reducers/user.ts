import { Profile } from '../models/user';
import * as user from '../actions/user';

export interface State {
  users: string[];
  profile: Profile;
  failure: boolean;
}

export const initialState: State = {
  users: [],
  profile: null,
  failure: false
};

export function reducer(state = initialState, action: user.Actions) {
  switch (action.type) {
    case user.LOAD_ALL_SUCCESS: {
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    case user.LOAD_PROFILE_SUCCESS: {
      return Object.assign({}, state, {
        profile: action.payload,
        failure: false
      });
    }

    case user.LOAD_PROFILE_FAIL: {
      return Object.assign({}, state, {
        failure: true
      });
    }

    default: {
      return state;
    }
  }
}

export const getUsers = (state: State) => state.users;
export const getProfile = (state: State) => state.profile;
