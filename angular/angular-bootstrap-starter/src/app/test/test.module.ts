import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule, FormsModule, LoadingBarSharedModule, NotificationSharedModule,
    NgBootstrapSharedModule, NgxDatatableModule, Ng2SmartTableModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }
