import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User, roles} from '../user.modele';
import {UserService} from '../user.service';
import {NotificationService} from '../../common/service/notification.service';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-addedit',
  templateUrl: './user.addedit.component.html',
  providers: [ UserService ]
})
export class UserAddEditComponent {
  @Input() user: User;
  public roles = roles;
  public adduserLoading = false;

  private baseUrl = this.userService.httpService.getBaseUrl();

  constructor(private userService: UserService, public activeModal: NgbActiveModal, private notificationService: NotificationService) { }

  public onSubmit(userForm: any) {
    this.adduserLoading = true;
    if (this.user.id) {
      userForm.id = this.user.id;
    }

    this.userService.addUser(this.baseUrl + '/user', userForm).then(status => {
      this.notificationService.success('User added', 'Added');
      this.adduserLoading = false;
      this.activeModal.close(true);
    }).catch(error => {
      this.adduserLoading = false;
    });
  }
}
