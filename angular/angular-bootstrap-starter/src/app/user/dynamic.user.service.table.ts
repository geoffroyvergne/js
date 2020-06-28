import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {LocalDataSource, ServerDataSource} from 'ng2-smart-table';
import {UserService} from './user.service';

@Injectable()
export class DynamicUserServiceTable extends LocalDataSource {

  lastRequestCount = 0;

  constructor(private userService: UserService) {
    super();
  }

  public initData(): void {
    this.getElements();
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {

    let url = this.userService.httpService.getBaseUrl() + '/user?';

    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        url += `_sort=${fieldConf.field}&_order=${fieldConf.direction.toUpperCase()}&`;
      });
    }

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      url += `_page=${this.pagingConf['page']}&_limit=${this.pagingConf['perPage']}&`;
    }

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf) => {
        if (fieldConf['search']) {
          url += `${fieldConf['field']}_like=${fieldConf['search']}&`;
        }
      });
    }

    return this.userService.getUsers(url).then(usersContainer => {
      this.lastRequestCount = usersContainer.users.pagination.size;
      return usersContainer.users.rows;
    });
  }
}
