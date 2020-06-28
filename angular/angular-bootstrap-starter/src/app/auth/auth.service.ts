import { Injectable } from '@angular/core';
import {User} from '../user/user.modele';
import {HttpService} from '../common/service/http.service';
import {LoadingBarService} from '../common/service/loading.bar.service';

export class Auth {
  token: string;
  login: string;
  role: string;
}

@Injectable()
export class AuthService {

  private baseUrl = this.httpService.getBaseUrl();

  constructor(public httpService: HttpService, private loadingBarService: LoadingBarService) { }

  public login(user: User): Promise<Auth> {
    this.loadingBarService.start();
    return this.httpService.post(this.baseUrl + '/auth/login?login=' + user.login + '&password=' + user.password).map((response) => {
      this.loadingBarService.complete();
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {
      this.loadingBarService.stop();
    });
  }

  public addAuthStorage(auth: Auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  public getAuthStorage(): Auth {
    return JSON.parse(localStorage.getItem('auth'));
  }

  public tokenExists(): boolean {
    if (localStorage.getItem('auth')) {
      return true;
    }

    return false;
  }

  public logged(): boolean {
    return this.tokenExists();
  }

  public logout() {
    localStorage.removeItem('auth');
    this.httpService.router.navigate(['/']);
    this.loadingBarService.start();
    this.loadingBarService.complete();
  }

  public haseRole(role: string): boolean {
    if (this.tokenExists()) {
      const auth = this.getAuthStorage();
      if (auth.role === role) {
        return true;
      }

      return false;
    }
  }
}
