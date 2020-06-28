import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

@NgModule({
  imports: [
    CommonModule, NgBootstrapSharedModule, TranslateSharedModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
