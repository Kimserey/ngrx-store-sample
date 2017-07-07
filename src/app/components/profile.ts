import { Component, Input } from '@angular/core';
import { Profile } from '../models/user';

@Component({
  selector: 'app-profile',
  template: `
    <div>
      <strong>Profile</strong>
    </div>
    <dl>
      <dt>Name</dt>
      <dd>{{ profile?.name }}</dd>
      <dt>Address</dt>
      <dd>{{ profile?.address }}</dd>
    </dl>
  `,
  styles: []
})
export class ProfileComponent {
  @Input() profile: Profile;
}
