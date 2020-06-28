import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AppAuthGuard } from './app.authguard.service';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';
import { Configuration } from './configration';
import { HttpClient } from '@angular/common/http';

export class Status {
  code?: number;
  message?: string;
  result?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedin = false;
  profile: Keycloak.KeycloakProfile;
  userName: string;
  userRoles: string[];
  token: string;
  tokenParsed: any;
  status: Status;

  constructor(private httpClient: HttpClient, private http: Http,
    private route: ActivatedRoute, private appAuthGuard: AppAuthGuard, private keycloakService: KeycloakService) {

  }

  ngOnInit() {
    this.keycloakService.isLoggedIn().then(loggedin => {
      console.log('isLoggedIn : ' + loggedin);

      this.appAuthGuard.isAccessAllowed(this.route.snapshot).then(accessAllowed => {
        console.log('accessAllowed : ' + accessAllowed);
      });

      if (loggedin) {
        this.loggedin = loggedin;

        const keycloakInstance = this.keycloakService.getKeycloakInstance();
        this.tokenParsed = keycloakInstance.tokenParsed;

        if (this.keycloakService.isTokenExpired) {
          this.keycloakService.updateToken();
        }

        this.keycloakService.loadUserProfile().then(profile => {
          this.profile = profile;
        });

        this.userName = this.keycloakService.getUsername();
        this.userRoles = this.keycloakService.getUserRoles();

        this.keycloakService.getToken().then(token => {
          this.token = token;
        });
      }
    });
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }

  register() {
    this.keycloakService.register();
  }

  account() {
    const keycloakInstance = this.keycloakService.getKeycloakInstance();
    return keycloakInstance.createAccountUrl();
  }

  isUserInRole(role: string) {
    return this.keycloakService.isUserInRole(role);
  }

  getRestIndex() {
    this.http.get('/api/test/index/test')
    .map(res => res.json())
    .subscribe(status => {
      this.status = status;
      console.log('Status : ' + JSON.stringify(this.status));
    });
  }

  getRestAdmin() {
    this.httpClient.get('/api/test/admin/test')
    .subscribe(status => {
      this.status = status;
      console.log('Status : ' + JSON.stringify(this.status));
    });
  }

  getRestMe() {
    this.httpClient.get('/api/test/user/me')
    .subscribe(status => {
      this.status = status;
      console.log('Status : ' + JSON.stringify(this.status));
    });
  }
}
