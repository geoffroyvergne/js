import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {TranslateModule} from 'ng2-translate';
import {MaterialModule} from '@angular/material';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';

@NgModule({
  imports: [
    CommonModule, TranslateModule, NgMaterialSharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
