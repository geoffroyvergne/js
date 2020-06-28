import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { Environments } from './environments';
import { config, authConfigKeycloak, authConfigAuth0, authConfigSpring } from './app.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AppService {

    constructor(private oauthService: OAuthService, private http: Http, private httpClient: HttpClient) {
    }

    public getOauthService() {
        return this.oauthService;
    }

    public http404Test() {
        console.log('http404Test');
        return this.http.get('qsdqsd');
    }

    public httpStatusTest() {
        console.log('httpStatusTest');
        return this.http.get('assets/status.json');
      }

    public getToken() {
        /*console.log('getToken : ' + this.oauthService.getAccessToken());
        console.log('getRefreshToken : ' + this.oauthService.getRefreshToken());
        console.log('hasValidAccessToken : ' + this.oauthService.hasValidAccessToken());
        console.log('loginUrl : ' + this.oauthService.loginUrl);
        console.log('logoutUrl : ' + this.oauthService.logoutUrl);
        console.log('userinfoEndpoint : ' + this.oauthService.userinfoEndpoint);
        console.log('getIdentityClaims : ' + JSON.stringify(this.oauthService.getIdentityClaims()));

        console.log('getIdToken : ' + this.oauthService.getIdToken());*/
      }

      public isLogged() {
        return this.oauthService.hasValidAccessToken();
      }

      public loadSecuredTest() {
        return this.httpClient.get(config.apiBaseUrl + 'resource/secured/test');
      }

      public loadUserProfile() {
        if (environment.name === Environments.SPRING) {
          return this.httpClient.get(authConfigSpring.userinfoEndpoint);
        } else if (environment.name === Environments.AUTH0) {
          return this.httpClient.get(authConfigAuth0.userinfoEndpoint);
        } else if (environment.name === Environments.KEYCLOAK) {
          return this.httpClient.get(authConfigKeycloak.userinfoEndpoint);
        }
      }

      public login() {
        this.oauthService.initImplicitFlow();
      }

      public logout() {
        if (environment.name === Environments.SPRING) {
          sessionStorage.clear();
          window.location.href = this.oauthService.logoutUrl;
        } else if (environment.name === Environments.AUTH0) {
          this.oauthService.logOut();
          window.location.href = 'https://gvergne.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:4200&client_id=OHoSdIXqpMp7xz5OFffam94d9OYEvL7h';          
        } else {
          this.oauthService.logOut();
        }
      }

    jwtHelper() {
      return new JwtHelperService();
    }
}
