import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-select-user></app-select-user>
    <app-user-profile></app-user-profile>
    <app-groups></app-groups>
  `
})
export class AppComponent { }
