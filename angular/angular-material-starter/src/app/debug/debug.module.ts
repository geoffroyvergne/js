import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug.component';
import {HttpSharedModule} from '../common/shared/http.module';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {DebugService} from './debug.service';
import {HeaderModule} from '../header/header.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

@NgModule({
  imports: [
    CommonModule, HeaderModule, HttpSharedModule, NgMaterialSharedModule, TranslateSharedModule
  ],
  declarations: [DebugComponent],
  providers: [DebugService]
})
export class DebugModule { }
