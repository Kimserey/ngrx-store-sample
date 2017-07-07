import { Group } from '../models/group';
import * as group from '../actions/group';

export interface State {
  entities: Group[];
  failure: boolean;
}

export const initialState: State {
  entities: [],
  failure: false
};

export function reducer(state = initialState, action: group.Actions) {
  switch (action.type) {
    case group.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        entities: action.payload,
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

export const getGroups = (state: State) => state.entities;
