import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Profile } from '../models/user';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Component({
  template: `
    <app-select-user></app-select-user>
    <app-user-profile></app-user-profile>
    <app-groups></app-groups>
  `,
  styles: []
})
export class MainContainer { }
