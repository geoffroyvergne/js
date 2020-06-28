import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {RouterModule} from '@angular/router';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {BackToTopComponent} from '../common/back-to-top/back-to-top.component';
import {TranslateModule} from 'ng2-translate';
import {TranslateSharedModule} from '../common/shared/translate.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, LoadingBarSharedModule, TranslateSharedModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent, BackToTopComponent]
})
export class NavModule { }
