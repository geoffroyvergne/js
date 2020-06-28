import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { initializer } from './app-init';
import { AppComponent } from './app.component';
import { KeycloakService, KeycloakAngularModule, KeycloakAuthGuard } from 'keycloak-angular';
import { AppAuthGuard } from './app.authguard.service';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/*
import { NavComponent } from './nav/nav.component';
import {UserModule} from './user/user.module';
import {DebugModule} from './debug/debug.module';
import {TestModule} from './test/test.module';
import {NavModule} from './nav/nav.module';
import {ProfilModule} from './profil/profil.module';*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, KeycloakAngularModule, routing, FormsModule, HttpClientModule, HttpModule
    // NavModule, HomeModule, TestModule, DebugModule, UserModule, SsoModule, ProfilModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }, AppAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
