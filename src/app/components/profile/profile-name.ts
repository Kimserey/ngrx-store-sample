import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-name',
  templateUrl: 'profile-name.html'
})
export class ProfileNameComponent {
  @Input() defaultFirstname: string;
  @Input() defaultLastname: string;
}
