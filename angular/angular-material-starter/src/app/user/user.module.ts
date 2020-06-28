import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {HttpSharedModule} from '../common/shared/http.module';
import {UserAddeditComponent} from './addedit/user-addedit.component';
import {FormsModule} from '@angular/forms';
import {ConfirmationDialogComponent} from '../common/confirmation-dialog/confirmation-dialog.component';
import {BooleanPipe} from '../common/pipe/boolean.pipe';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NotificationSharedModule} from '../common/shared/notification.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgMaterialSharedModule, HttpSharedModule, Ng2SmartTableModule, NgxDatatableModule, NotificationSharedModule
  ],
  declarations: [UserComponent, UserAddeditComponent, BooleanPipe],
  entryComponents: [UserAddeditComponent, ConfirmationDialogComponent]
})
export class UserModule { }
