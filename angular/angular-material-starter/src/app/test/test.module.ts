import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NotificationService} from '../common/service/notification.service';
import {HeaderComponent} from '../header/header.component';
import {HeaderModule} from '../header/header.module';
import {NotificationSharedModule} from '../common/shared/notification.module';

@NgModule({
  imports: [
    CommonModule, HeaderModule, NgMaterialSharedModule, Ng2SmartTableModule, NgxDatatableModule, NotificationSharedModule
  ],
  declarations: [TestComponent],
  providers: [NotificationService]
})
export class TestModule {

}
