import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-select-user',
  template: `
    <select (change)="select($event.target.value)">
      <option value=""> -- Select a user -- </option>
      <option value="joe">Joe</option>
      <option value="kim">Kim</option>
      <option value="mike">Mike</option>
    </select>
  `,
  styles: []
})
export class SelectUserContainer {
  constructor(private store: Store<fromRoot.State>) { }

  select(userId: string) {
    this.store.dispatch(new user.SelectAction(userId));
  }
}
