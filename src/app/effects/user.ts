import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppService } from '../app.service';
import * as user from '../actions/user';

@Injectable()
export class UserEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(user.SELECT)
    .map(toPayload)
    .switchMap(payload => {
      return this.service.getUserProfile(payload)
        .map(profile => new user.LoadProfileSuccessAction(profile))
        .catch(() => of(new user.LoadProfileFailAction()));
    });

  constructor(private actions$: Actions, private service: AppService) { }
}
