import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DebugModule} from './debug/debug.module';
import {TestModule} from './test/test.module';
import {HomeModule} from './home/home.module';
import {NavModule} from './nav/nav.module';
import {UserModule} from './user/user.module';
import {appRoutingProviders, routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, routing, FormsModule,
    NavModule, HomeModule, TestModule, DebugModule, UserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
