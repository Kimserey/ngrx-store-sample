import { Action } from '@ngrx/store';
import { Profile } from '../models/user';

export const SELECT = '[User] Select';
export const LOAD_ALL = '[User] Load All';
export const LOAD_ALL_SUCCESS = '[User] Load All Success';
export const LOAD_ALL_FAIL = '[User] Load All Fail';
export const LOAD_PROFILE_SUCCESS = '[User] Load Profile Success';
export const LOAD_PROFILE_FAIL = '[User] Load Profile Fail';
export const EDIT_FIELD = '[User] Edit Field';

export class LoadAllAction implements Action {
  readonly type = LOAD_ALL;

  constructor(public payload?: any) { }
}

export class LoadAllSuccessAction implements Action {
  readonly type = LOAD_ALL_SUCCESS;

  constructor(public payload: string[]) { }
}

export class LoadAllFailAction implements Action {
  readonly type = LOAD_ALL_FAIL;

  constructor(public payload?: any) { }
}

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

export class EditFieldAction implements Action {
  readonly type = EDIT_FIELD;

  constructor(public payload: string) { }
}

export type Actions
  = SelectAction
  | LoadAllAction
  | LoadAllSuccessAction
  | LoadAllFailAction
  | LoadProfileSuccessAction
  | LoadProfileFailAction
  | EditFieldAction;
