import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppService } from '../app.service';
import * as group from '../actions/group';
import * as user from '../actions/user';

@Injectable()
export class UserEffects {
  @Effect()
  loadAll$: Observable<Action> = this.actions$
    .ofType(user.LOAD_ALL)
    .switchMap(() => {
      return this.service.getAll()
        .map(users => new user.LoadAllSuccessAction(users))
        .catch(() => of(new user.LoadAllFailAction()));
    });

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(user.SELECT)
    .map(toPayload)
    .switchMap(payload => {
      return this.service.getUserProfile(payload)
        .switchMap(profile => [
          new user.LoadProfileSuccessAction(profile),
          new group.LoadAction(profile.userId)
        ])
        .catch(() => of(new user.LoadProfileFailAction()));
    });

  constructor(private actions$: Actions, private service: AppService) { }
}
