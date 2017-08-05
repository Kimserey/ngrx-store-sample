import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileName } from '../../models/user';

@Component({
  selector: 'app-profile-name',
  templateUrl: 'profile-name.html'
})
export class ProfileNameComponent implements OnInit {
  @Input() defaultFirstname: string;
  @Input() defaultLastname: string;
  @Output() submitForm = new EventEmitter<ProfileName>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: [this.defaultFirstname, Validators.required],
      lastname: [this.defaultLastname, Validators.required]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
