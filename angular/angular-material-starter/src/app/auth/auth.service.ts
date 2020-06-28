import { Injectable } from '@angular/core';
import {User} from '../user/user.modele';
import {HttpService} from '../common/service/http.service';

export class Auth {
  token: string;
  login: string;
  role: string;
}

@Injectable()
export class AuthService {

  private baseUrl = this.httpService.getBaseUrl();

  constructor(public httpService: HttpService) { }

  public login(user: User): Promise<Auth> {
    return this.httpService.post(this.baseUrl + '/auth/login?login=' + user.login + '&password=' + user.password).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
    .catch(error => {
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
    // this.httpService.router.navigate(['/']);
  }

  public haseRole(role: string): boolean {
    if (! role) {
      return true;
    }

    if (this.tokenExists()) {
      const auth = this.getAuthStorage();
      if (auth.role === role) {
        return true;
      }

      return false;
    }

    return false;
  }
}
