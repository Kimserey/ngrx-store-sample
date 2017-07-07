import { Action } from '@ngrx/store';
import { Group } from '../models/group';

export const LOAD = '[Group] Load';
export const LOAD_SUCCESS = '[Group] Load Success';
export const LOAD_FAIL = '[Group] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: string) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Group) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload?: any) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
