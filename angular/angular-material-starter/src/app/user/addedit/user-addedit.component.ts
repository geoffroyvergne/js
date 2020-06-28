import {Component, Input} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {User, roles} from '../user.modele';
import {UserService} from '../user.service';
import {HttpService} from '../../common/service/http.service';

@Component({
  selector: 'app-user-addedit',
  providers: [ UserService, HttpService ],
  templateUrl: './user-addedit.component.html',
})
export class UserAddeditComponent {
  @Input() user: User;
  public roleData = roles;

  constructor(private userService: UserService, public dialogRef: MdDialogRef<UserAddeditComponent>) { }

  public onSubmit(userForm: any) {
    if (this.user.id) {
      userForm.id = this.user.id;
    }

    this.userService.addEditUser(userForm).then(status => {
      this.dialogRef.close(true);
    });
  }
}
