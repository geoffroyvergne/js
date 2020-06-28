import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {RouterModule} from '@angular/router';
import {ClaritySharedModule} from '../common/shared/clarity.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, ClaritySharedModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class NavModule { }
