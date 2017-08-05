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
    this.users['Kim'] = {
      userId: 'Kim',
      address: '29 avenue street',
      postalcode: '930303',
      groups: [ 'group1', 'group2' ],
      firstname: 'Kimserey',
      lastname: 'Lam',
      homeNumber: '123214',
      mobileNumber: '424144'
    };

    this.users['Mike'] = {
      userId: 'Mike',
      address: '103 eastern ed',
      postalcode: '930303',
      groups: [ 'group2' ],
      firstname: 'Mike',
      lastname: 'Johnson',
      homeNumber: '654654654',
      mobileNumber: '64364344'
    };

    this.users['Joe'] = {
      userId: 'Joe',
      address: '3 balcony dolet',
      postalcode: '930303',
      groups: [ 'group1' ],
      firstname: 'Joe',
      lastname: 'Polgiony',
      homeNumber: '324342352',
      mobileNumber: '532535235'
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
