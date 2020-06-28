import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import 'rxjs/add/operator/toPromise';
import { Status } from '../common/modele/status.modele';
import {UsersContainer, User} from './user.modele';
import {LoadingBarService} from '../common/service/loading.bar.service';
import { NotificationService } from '../common/service/notification.service';

@Injectable()
export class UserService {

  constructor(public httpService: HttpService, private loadingBarService: LoadingBarService,
              private notificationService: NotificationService) { }

  getUsers(url): Promise<UsersContainer> {
    this.loadingBarService.start();
    return this.httpService.get(url).map((response) => {
      this.loadingBarService.complete();
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {
      this.loadingBarService.stop();
    });
  }

  deleteUser(url): Promise<Status> {
    this.loadingBarService.start();
    return this.httpService.delete(url).map((response) => {
      this.loadingBarService.complete();
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {
      this.loadingBarService.stop();
    });
  }

  addUser(url, user: User): Promise<Status> {
    this.loadingBarService.start();
    return this.httpService.put(url, user).map((response) => {
      this.loadingBarService.complete();
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {
      this.loadingBarService.stop();
    });
  }
}
