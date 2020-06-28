import {LocalDataSource} from 'ng2-smart-table';
import {Injectable} from '@angular/core';
import {UsersContainer} from './user.modele';
import {UserService} from './user.service';

@Injectable()
export class StaticUserServiceTable extends LocalDataSource {

  constructor(private userService: UserService) {
    super();
  }

  public initData(): void {
    const url = this.userService.httpService.getBaseUrl() + '/user';

    this.userService.getUsers(url).then(usersContainer => {

      this.load(usersContainer.users.rows);

    }).catch(error => {
    });
  }
}
