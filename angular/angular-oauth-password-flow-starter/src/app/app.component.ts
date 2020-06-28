import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AppService} from './app.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  title = 'app';
  environmentName = environment.name;
  public loginData = {username: 'user', password: 'user'};

  constructor(private http: Http, private httpClient: HttpClient, private appService: AppService) {
  }

  isLogged() {
    return this.appService.checkCredentials();
  }

  login() {
    this.appService.login(this.loginData);
  }

  async refresh() {
    console.log('refresh');
    await this.appService.refresh().map(res => res.json())
    .subscribe(
        data => {
          console.log('data : ' + JSON.stringify(data));
        });
  }

  logout() {
    console.log('logout');
    this.appService.logout();
  }

  getAccessToken() {
    const token = this.appService.getAccessToken();
    console.log('getAccessToken : ' + token);
    console.log('decodeToken : ' + JSON.stringify(this.appService.jwtHelper().decodeToken(token)));
    console.log('isTokenExpired : ' + this.appService.jwtHelper().isTokenExpired(token));
  }

  getRefreshToken() {
    console.log('getRefreshRoken : ' + this.appService.getRefreshToken());
  }

  getUserInfo() {
    console.log('getUserInfo');
    console.log('getUserInfo' + JSON.stringify(this.appService.jwtHelper().decodeToken(this.appService.getAccessToken())));
  }

  private loadSecuredTest() {
    this.appService.loadSecuredTest()
    .subscribe(
      data => {
         console.log('loadSecuredTest : ' + JSON.stringify(data));
    });
  }

  private loadUserProfile() {
    this.appService.loadUserProfile()
    .subscribe(
      data => {
         console.log('loadUserProfile : ' + JSON.stringify(data));
    });
  }
}
