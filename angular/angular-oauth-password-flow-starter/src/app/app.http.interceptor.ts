import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse , HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private appservice: AppService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        const token = this.appservice.getAccessToken();

        if (token) {
            if (this.appservice.jwtHelper().isTokenExpired) {
                this.appservice.refresh().map(res => res.json())
                .subscribe(
                    data => {
                        // console.log('data : ' + JSON.stringify(data));
                        this.appservice.saveAccessToken(data.access_token);
                        this.appservice.saveRefreshToken(data.refresh_token);
                    },
                    err => console.log('Invalid Credentials')
                );
            }

            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

        const header = 'Bearer ' + token;
        const headers = req.headers.set('Authorization', header);
        req = req.clone({ headers });

        return next.handle(req)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event: ' + JSON.stringify(event));
                }
            })
            .catch(error => {
                console.log('Caught error', error);

                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        console.log('error 401');
                        this.appservice.logout();
                    }

                    if (error.status === 404) {
                        console.log('error 404');
                    }

                    if (error.status === 400) {
                        console.log('error 400');
                    }
                  }

                return Observable.throw(error);
            });
    }
}
