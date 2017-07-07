import { Group } from '../models/group';
import * as group from '../actions/group';

export interface State {
  entites: Group[];
  failure: boolean;
}

export const initialState: State {
  entites: [],
  failure: false
};

export function reducer(state = initialState, action: group.Actions) {
  switch (action.type) {
    case group.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        entites: action.payload,
        failure: false
      });
    }

    case group.LOAD_FAIL: {
      return Object.assign({}, state, {
        failure: true
      });
    }

    default: {
      return state;
    }
  }
}
