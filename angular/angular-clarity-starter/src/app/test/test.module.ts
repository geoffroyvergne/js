import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {ClaritySharedModule} from '../common/shared/clarity.module';

@NgModule({
  imports: [
    CommonModule, ClaritySharedModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }
