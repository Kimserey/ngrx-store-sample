import { Profile } from '../models/user';
import * as user from '../actions/user';

export interface State {
  users: string[];
  profile: Profile;
  failure: boolean;
  editedField: string;
}

export const initialState: State = {
  users: [],
  profile: null,
  failure: false,
  editedField: null
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

    case user.EDIT_FIELD: {
      return Object.assign({}, state, {
        editedField: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getEditedField = (state: State) => state.editedField;
export const getUsers = (state: State) => state.users;
export const getProfile = (state: State) => state.profile;
