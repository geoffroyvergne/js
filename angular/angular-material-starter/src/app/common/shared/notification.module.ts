import { NotificationService} from '../service/notification.service';
import {NgModule} from '@angular/core';
import {ToastrConfig, ToastrModule} from 'toastr-ng2';

/*let options: ToastOptions = new ToastOptions({
  animate: 'flyRight',
  positionClass: 'toast-bottom-right'
});*/

// let options: ToastOptions = new ToastOptions();

@NgModule({
  exports: [ ToastrModule  ],
  imports: [
    ToastrModule.forRoot()
  ],
  providers: [ NotificationService ]
})

export class NotificationSharedModule {

}
