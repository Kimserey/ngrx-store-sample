import { Profile } from '../models/user';
import * as user from '../actions/user';

export interface State {
  profile: Profile;
  failure: boolean;
}

export const initialState: State = {
  profile: null,
  failure: false
};

export function reducer(state = initialState, action: user.Actions) {
  switch (action.type) {
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

export const getProfile = (state: State) => state.profile;
