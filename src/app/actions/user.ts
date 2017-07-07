import { Action } from '@ngrx/store';
import { Profile } from '../models/user';

export const SELECT = '[User] Select';
export const LOAD_PROFILE_SUCCESS = '[User] Load Profile Success';
export const LOAD_PROFILE_FAIL = '[User] Load Profile Fail';

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export class LoadProfileSuccessAction implements Action {
  readonly type = LOAD_PROFILE_SUCCESS;

  constructor(public payload: Profile) { }
}

export class LoadProfileFailAction implements Action {
  readonly type = LOAD_PROFILE_FAIL;

  constructor(public payload?: any) { }
}

export type Actions
  = SelectAction
  | LoadProfileSuccessAction
  | LoadProfileFailAction;
