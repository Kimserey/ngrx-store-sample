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

@Injectable()
export class GroupEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(group.LOAD)
    .map(toPayload)
    .switchMap(userId => {
      return this.service.getGroups(userId)
        .map(groups => new group.LoadSuccessAction(groups))
        .catch(() => of(new group.LoadFailAction()));
    });

  constructor(private actions$: Actions, private service: AppService) { }
}
