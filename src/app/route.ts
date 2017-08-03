import { Routes } from '@angular/router';
import { MainContainer } from './containers/main';
import { UserLoadedGuard } from './guards/user-loaded';

export const routes: Routes = [
  {
    path: '',
    canActivate: [UserLoadedGuard],
    component: MainContainer
  }
];
