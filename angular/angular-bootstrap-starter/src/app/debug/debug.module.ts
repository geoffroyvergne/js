import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug.component';
import {HttpSharedModule} from '../common/shared/http.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

@NgModule({
  imports: [
    CommonModule, HttpSharedModule, TranslateSharedModule
  ],
  declarations: [DebugComponent]
})
export class DebugModule { }
