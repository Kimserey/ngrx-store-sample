import { Component, Input } from '@angular/core';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-listing',
  template: `
    <p-panel header="Groups">
      <ul>
        <li *ngFor="let group of groups">{{group.name}}</li>
      </ul>
    </p-panel>
  `
})
export class GroupListingComponent {
  @Input() groups: Group[];
}
