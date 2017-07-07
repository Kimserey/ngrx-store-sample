import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Group } from '../models/group';
import * as group from '../actions/group';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-groups',
  template: `
    <app-group-listing [groups]="groups$ | async"></app-group-listing>
  `
})
export class GroupsContainer implements OnInit {
  groups$: Observable<Group[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.groups$ = this.store.select(fromRoot.getGroups);
  }
}
