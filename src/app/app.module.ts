import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ButtonModule, DropdownModule, PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { GroupEffects } from './effects/group';
import { UserEffects } from './effects/user';
import { reducer } from './reducers';
import { GroupListingComponent } from './components/group-listing';
import { MainContainer } from './containers/main';
import { GroupsContainer } from './containers/groups';
import { SelectUserContainer } from './containers/select-user';
import { ProfileContainer } from './containers/profile';
import { ProfileComponent, ProfileAddressComponent, ProfileNameComponent, ProfileNumberComponent } from './components/profile';
import { UserLoadedGuard } from './guards/user-loaded';
import { routes } from 'app/route';

@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    ProfileComponent,
    ProfileContainer,
    ProfileAddressComponent,
    ProfileNameComponent,
    ProfileNumberComponent,
    SelectUserContainer,
    GroupsContainer,
    GroupListingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(GroupEffects),
    EffectsModule.run(UserEffects),
    ButtonModule,
    DropdownModule,
    PanelModule
  ],
  providers: [
    AppService,
    UserLoadedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
