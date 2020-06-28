import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateSharedModule} from '../common/shared/translate.module';
import {RouterModule} from '@angular/router';
import {NavService} from './nav.service';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {AuthService} from '../auth/auth.service';
import {HttpSharedModule} from '../common/shared/http.module';
import {AuthComponent} from '../auth/auth.component';
import {NavResponsiveComponent} from './nav-responsive/nav-responsive.component';
import {NavSimpleComponent} from './nav-simple/nav-simple.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, TranslateSharedModule, NgMaterialSharedModule, HttpSharedModule
  ],
  exports: [NavSimpleComponent, NavResponsiveComponent],
  declarations: [NavSimpleComponent, NavResponsiveComponent],
  providers: [NavService, AuthService],
  entryComponents: [AuthComponent]
})
export class NavModule { }
