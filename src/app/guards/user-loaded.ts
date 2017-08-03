import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Injectable()
export class UserLoadedGuard implements CanActivate {
  constructor(private store: Store<fromRoot.State>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoaded$ = this.store.select(fromRoot.getUsers)
      .map(users => users.length > 0);

    isLoaded$
      .take(1)
      .filter(loaded => !loaded)
      .map(() => new user.LoadAllAction())
      .subscribe(this.store);

    return isLoaded$
      .filter(loaded => loaded)
      .take(1);
  }
}
