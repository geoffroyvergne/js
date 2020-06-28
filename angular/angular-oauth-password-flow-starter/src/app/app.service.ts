import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';
import { config } from './app.config';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

    constructor(private http: Http, private httpClient: HttpClient) {
    }

    login(loginData) {
        console.log('login : ' + JSON.stringify(loginData));
        /*curl -XPOST -k foo:foosecret@localhost:9000/identity/oauth/token \
        -d grant_type=password \
        -d client_id=foo \
        -d client_secret=foosecret \
        -d username=user \
        -d password=user*/

        const params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', environment.grantType);
        params.append('client_id', environment.clientId);
        params.append('client_secret', environment.clientSecret);

        const headers = new Headers(
        {
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret)
        });
        const options = new RequestOptions({ headers: headers });
        console.log(params.toString());

        this.http.post(environment.tokenUrl, params.toString(), options)
        .map(res => res.json())
        .subscribe(
            data => {
                this.saveAccessToken(data.access_token);
                this.saveRefreshToken(data.refresh_token);
            },
            err => console.log('Invalid Credentials')
        );
    }

    refresh(): Observable<any> {
        /*curl -XPOST -k foo:foosecret@localhost:9000/identity/oauth/token \
        -d grant_type=refresh_token \
        -d refresh_token=$REFRESH_TOKEN*/

        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', this.getRefreshToken());

        const headers = new Headers(
        {
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret)
        });

        const options = new RequestOptions({ headers: headers });
        // console.log(params.toString());

        return this.http.post(environment.tokenUrl, params.toString(), options);
        /*.map(res => res.json())
        .subscribe(
            data => {
                console.log('data : ' + JSON.stringify(data));
                this.saveAccessToken(data.access_token);
                this.saveRefreshToken(data.refresh_token);
            },
            err => console.log('Invalid Credentials')
        );*/
    }

    logout() {
        if (sessionStorage.getItem('access_token')) {
            sessionStorage.removeItem('access_token');
        }

        if (sessionStorage.getItem('refresh_token')) {
            sessionStorage.removeItem('refresh_token');
        }
    }

    getAccessToken() {
        return sessionStorage.getItem('access_token');
    }

    getRefreshToken() {
        return sessionStorage.getItem('refresh_token');
    }

    saveAccessToken(token) {
        sessionStorage.setItem('access_token', token);
    }

    saveRefreshToken(token) {
        sessionStorage.setItem('refresh_token', token);
    }

    getResource(resourceUrl): Observable<any> {
        return null;
    }

    checkCredentials(): boolean {
        if (sessionStorage.getItem('access_token')) {
            return true;
        }

        return false;
    }

    jwtHelper() {
        return new JwtHelperService();
    }

    public loadSecuredTest() {
        return this.httpClient.get(config.apiBaseUrl + 'resource/secured/test');
    }

    public loadUserProfile() {
        // return this.httpClient.get(config.apiBaseUrl + 'resource/users/me');
        return this.httpClient.get(environment.userInfoUri);
    }
}
