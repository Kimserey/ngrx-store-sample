import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Profile } from '../models/user';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-user-profile',
  template: `
    <app-profile [profile]="profile$ | async"></app-profile>
  `,
  styles: []
})
export class ProfileContainer implements OnInit {
  profile$: Observable<Profile>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.profile$ = this.store.select(fromRoot.getUserProfile);
  }
}
