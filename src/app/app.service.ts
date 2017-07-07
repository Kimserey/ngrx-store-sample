import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Profile } from './models/user';
import { Group } from './models/group';

@Injectable()
export class AppService {
  getUserProfile(userId: string): Observable<Profile> {
    return of(<Profile>{
      userId: userId,
      address: '29 avenue street',
      groups: [ 'group1', 'group2' ],
      name: 'Kim'
    });
  }

  getGroup(userId: string): Observable<Group[]> {
    return of([<Group>{
      groupId: 'group1',
      name: 'Football avenue street'
    }, <Group>{
      groupId: 'group2',
      name: 'Basketball gottam'
    }]);
  }
}
