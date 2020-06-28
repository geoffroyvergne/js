import {Injectable} from '@angular/core';
import {HttpService} from '../common/service/http.service';
import {Status} from '../common/modele/status.modele';
import 'rxjs/add/operator/toPromise';
import {Users, User, UsersContainer} from './user.modele';
import {Filter, Table} from './table';

@Injectable()
export class UserService {

  constructor(public httpService: HttpService) { }

  updateTable(event, table: Table, filter: Filter): string {
    if (event) {
      if (event.limit || event.offset) {
        table.page = {
          limit: event.limit,
          offset: event.offset
        };
      }

      if (event.sorts) {
        if (event.sorts[0]) {
          table.sort = {
            dir: event.sorts[0].dir,
            prop: event.sorts[0].prop
          };
        }
      }

      table.filter = filter;
    }

    return this.updateUrl(table);
  }

  updateUrl(table: Table): string {
    let url = this.httpService.getBaseUrl() + '/user?';

    if (table) {
      if (table.page) {
        url += '&_page=' + (table.page.offset + 1) + '&_limit=' + table.page.limit;
      }

      if (table.sort) {
        url += '&_sort=' + table.sort.prop + '&_order=' + table.sort.dir;
      }

      if (table.filter) {
        if (table.filter.login) {
          url += '&login_like=' + table.filter.login;
        }

        if (table.filter.role) {
          url += '&role_like=' + table.filter.role;
        }

        if (table.filter.enabled) {
          url += '&enabled_like=' + table.filter.enabled;
        }
      }
    }

    return url;
  }

  getUsers(url: string): Promise<UsersContainer> {
    return this.httpService.get(url).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {

    });
  }

  deleteUser(user: User): Promise<Status> {
    const url = this.httpService.getBaseUrl() + '/user/' + user.id;
    return this.httpService.delete(url).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {

    });
  }

  addEditUser(user: User): Promise<Status> {
    if (!user) {
      user = new User();
      user.enabled = false;
    }

    return this.httpService.put(this.httpService.getBaseUrl() + '/user', user).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {

    });
  }
}
