import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {appRoutingProviders, routing} from './app.routing';
import {TestModule} from './test/test.module';
import {NavModule} from './nav/nav.module';
import {DebugModule} from './debug/debug.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {RegisterModule} from './register/register.module';
import {SearchModule} from './search/search.module';
import {ProfilModule} from './profil/profil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, routing, FormsModule,
    NavModule, HomeModule, TestModule, DebugModule, AuthModule, UserModule, RegisterModule, SearchModule, ProfilModule
  ],
  exports: [],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
