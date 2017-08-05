import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Profile, ProfileName, ProfileAddress, ProfileNumber } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
  styles: []
})
export class ProfileComponent {
  @Input() profile: Profile;
  @Input() editedField: string;
  @Output() changeEditedField = new EventEmitter<string>();

  submitName(name: ProfileName) { }

  submitAddress(name: ProfileAddress) { }

  submitNumber(name: ProfileNumber) { }

  toggleEdit(field) {
    this.changeEditedField.emit(field);
  }

  resetEdit() {
    this.changeEditedField.emit(null);
  }
}
