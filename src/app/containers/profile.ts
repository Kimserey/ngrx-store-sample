import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Profile } from '../models/user';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-user-profile',
  template: `
    <app-profile
      [profile]="profile$ | async"
      [editedField]="editedField$ | async"
      (changeEditedField)="changeEditedField($event)">
     </app-profile>
  `,
  styles: []
})
export class ProfileContainer implements OnInit {
  profile$: Observable<Profile>;
  editedField$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.profile$ = this.store.select(fromRoot.getUserProfile);
    this.editedField$ = this.store.select(fromRoot.getUserEditedField);
  }

  changeEditedField(field) {
    this.store.dispatch(new user.EditFieldAction(field));
  }
}
