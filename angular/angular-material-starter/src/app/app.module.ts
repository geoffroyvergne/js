import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {appRoutingProviders, routing} from './app.routing';
import {NavModule} from './nav/nav.module';

import 'hammerjs';
import {HttpSharedModule} from './common/shared/http.module';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {TestModule} from './test/test.module';
import {RegisterModule} from './register/register.module';
import {DebugModule} from './debug/debug.module';
import {NgMaterialSharedModule} from './common/shared/ngmaterial.module';
import {ConfirmationDialogComponent} from './common/confirmation-dialog/confirmation-dialog.component';
import { HeaderComponent } from './header/header.component';
import {HeaderModule} from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import {FooterModule} from './footer/footer.module';
import {BackToTopComponent} from './common/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent, ConfirmationDialogComponent, FooterComponent, BackToTopComponent
  ],
  imports: [
    BrowserAnimationsModule, NgMaterialSharedModule, BrowserModule, routing, FormsModule,
    HeaderModule, FooterModule, NavModule, HomeModule, AuthModule, UserModule, AuthModule, TestModule, RegisterModule, DebugModule
  ],
  providers: [appRoutingProviders, HttpSharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
