import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Profile } from '../models/user';
import * as user from '../actions/user';
import * as fromRoot from '../reducers';

@Component({
  template: `
    <div class="container">
      <div class="my-3">
        <app-select-user></app-select-user>
      </div>
      <div class="my-3">
        <app-user-profile></app-user-profile>
      </div>
      <div class="my-3">
        <app-groups></app-groups>
      </div>
    </div>
  `,
  styles: []
})
export class MainContainer { }
