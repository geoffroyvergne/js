import {Component, OnInit} from '@angular/core';
import {User, UsersContainer} from './user.modele';
import {MdDialog} from '@angular/material';
import {UserService} from './user.service';
import {UserAddeditComponent} from './addedit/user-addedit.component';
import {ConfirmationDialogComponent} from '../common/confirmation-dialog/confirmation-dialog.component';
import {Filter, Table} from './table';
import {NotificationService} from '../common/service/notification.service';

@Component({
  selector: 'app-user',
  providers: [ UserService ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private usersDatas: UsersContainer;
  private table = new Table();
  private filter = new Filter();

  private url = this.userService.updateUrl(null);

  constructor(private userService: UserService, public dialog: MdDialog, private notificationService: NotificationService) {
    this.table.page = {limit: 5, offset: 0};
  }

  ngOnInit() {
    this.getUsers();
  }

  public resetFilter() {
    this.filter = new Filter();
    this.url = this.userService.updateUrl(null);
    this.reload();
  }

  public onChangeTable(event) {
    this.url = this.userService.updateTable(event, this.table, this.filter);
    this.reload();

    console.log(this.url);
  }

  public reload(): void {
    this.getUsers();
  }

  public onAddEdit(event: any) {
    this.addEditUser(event.data);
  }

  public getUsers(): void {
    this.userService.getUsers(this.url).then(usersDatas => {
      this.usersDatas = usersDatas;
      this.table.totalElements = usersDatas.users.pagination.size;
    });
  }

  public addEditUser(user?: User): void {

    if (!user) {
      user = new User();
      user.enabled = false;
    }

    const dialogRef = this.dialog.open(UserAddeditComponent);
    dialogRef.componentInstance.user = user;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reload();
      }
    });
  }

  public onDelete(event: any) {
    this.deleteUser(event.data);
  }

  public deleteUser(user?: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.title = 'Please confirm to delete ' + user.login;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user).then(status => {
          this.reload();
        });
      }
    });
  }
}
