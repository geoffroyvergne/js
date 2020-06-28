import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, LoadingBarSharedModule, NotificationSharedModule, NgBootstrapSharedModule
  ],
  declarations: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
