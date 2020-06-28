import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooleanViewComponent, UserComponent} from './user.component';
import {BooleanPipe} from '../common/pipe/boolean.pipe';
import {UserAddEditComponent} from './addedit/user.addedit.component';
import {FormsModule} from '@angular/forms';
import {ConfirmationComponent} from '../common/confirmation/confirmation.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateSharedModule} from '../common/shared/translate.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, Ng2SmartTableModule, TranslateSharedModule
  ],
  declarations: [UserComponent, BooleanViewComponent, ConfirmationComponent, UserAddEditComponent, BooleanPipe],
  entryComponents: [ConfirmationComponent, UserAddEditComponent]
})
export class UserModule { }
