import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule, CommonModule, NgMaterialSharedModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
