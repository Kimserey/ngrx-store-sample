import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Profile } from './models/user';
import { Group } from './models/group';

@Injectable()
export class AppService {
  users: { [key: string]: Profile } = {};
  groups: { [key: string]: Group } = {};

  constructor() {
    this.users['kim'] = {
      userId: 'kim',
      address: '29 avenue street',
      groups: [ 'group1', 'group2' ],
      name: 'Kimserey'
    };

    this.users['mike'] = {
      userId: 'mike',
      address: '103 eastern ed',
      groups: [ 'group2' ],
      name: 'Mike'
    };

    this.users['joe'] = {
      userId: 'joe',
      address: '3 balcony dolet',
      groups: [ 'group1' ],
      name: 'Joe'
    };

    this.groups['group1'] = {
      groupId: 'group1',
      name: 'Football avenue street'
    };

    this.groups['group2'] = {
      groupId: 'group2',
      name: 'Basketball gottam'
    };
  }

  getAll(): Observable<string[]> {
    return of(['Kim', 'Mike', 'Joe']);
  }

  getUserProfile(userId: string): Observable<Profile> {
    return of(this.users[userId]);
  }

  getGroups(userId: string): Observable<Group[]> {
    return of(this.users[userId]
      .groups
      .reduce((groups, groupId) =>
        [
          ...groups,
          this.groups[groupId]
        ], [])
    );
  }
}
