import { Component, Input } from '@angular/core';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-listing',
  template: `
    <div>
      <strong>Groups</strong>
    </div>
    <ul>
      <li *ngFor="let group of groups">{{group.name}}</li>
    </ul>
  `
})
export class GroupListingComponent {
  @Input() groups: Group[];
}
