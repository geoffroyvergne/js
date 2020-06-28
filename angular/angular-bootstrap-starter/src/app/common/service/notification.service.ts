import {Injectable} from '@angular/core';
import {ToastrService} from 'toastr-ng2';

@Injectable()
export class NotificationService {
  constructor (private toastr: ToastrService) {

  }

  success(message: string, title: string, options?: any) {
    this.toastr.success(message, title, options);
  }

  info(message: string, title: string, options?: any) {
    this.toastr.info(message, title, options);
  }

  error(message: string, title: string, options?: any) {
    this.toastr.error(message, title, options);
  }

  warning(message: string, title: string, options?: any) {
    this.toastr.warning(message, title, options);
  }
}
