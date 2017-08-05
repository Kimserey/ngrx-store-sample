import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileNumber } from '../../models/user';

@Component({
  selector: 'app-profile-number',
  templateUrl: 'profile-number.html'
})
export class ProfileNumberComponent implements OnInit {
  @Input() defaultHomeNumber: string;
  @Input() defaultMobileNumber: string;
  @Output() submitForm = new EventEmitter<ProfileNumber>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      homeNumber: [this.defaultHomeNumber, Validators.required],
      mobileNumber: [this.defaultMobileNumber, Validators.required]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
