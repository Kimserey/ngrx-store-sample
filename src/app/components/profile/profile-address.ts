import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileAddress } from '../../models/user';

@Component({
  selector: 'app-profile-address',
  templateUrl: 'profile-address.html'
})
export class ProfileAddressComponent implements OnInit {
  @Input() defaultAddress: string;
  @Input() defaultPostalcode: string;
  @Output() submitForm = new EventEmitter<ProfileAddress>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      address: [this.defaultAddress, Validators.required],
      postalcode: [this.defaultPostalcode, Validators.required]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
