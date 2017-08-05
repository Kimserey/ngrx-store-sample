import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Profile, ProfileName } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
  styles: []
})
export class ProfileComponent {
  @Input() profile: Profile;
  @Input() editedField: string;
  @Output() changeEditField = new EventEmitter<string>();

  submitName(name: ProfileName) {

  }

  toggleEdit(field) {
    this.changeEditField.emit(field);
  }

  resetEdit() {
    this.changeEditField.emit(null);
  }
}
