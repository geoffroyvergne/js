import { Component, OnInit } from '@angular/core';
import { DebugService } from './debug.service';
import {Status} from '../common/modele/status.modele';
import {HttpService} from '../common/service/http.service';

@Component({
  selector: 'app-debug',
  providers: [ DebugService ],
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  public statusPromise: Status;
  public status404Promise: Status;
  public statusLongLoadPromise: Status;

  public statusPromiseLoading: boolean;
  public status404PromiseLoading: boolean;
  public statusLongLoadPromiseLoading: boolean;

  private baseUrl = this.debugService.httpService.getBaseUrl();

  constructor(private debugService: DebugService, public httpService: HttpService) { }

  public getTest(): String {
    return this.debugService.getTest();
  }

  public getStatus(): Status {
    return this.debugService.getStatus();
  }

  public getStatusPromise(): void {
    this.statusPromiseLoading = true;

    this.debugService.getStatusPromise(this.baseUrl + '/debug/status').then(status => {
      this.statusPromise = status;
      this.statusPromiseLoading = false;
    }).catch(error => {
      this.statusPromiseLoading = false;
    });

    /*this.httpService.get(this.baseUrl + '/debug/status').subscribe({
      next: (response) => {
        this.statusPromise = response.json() as Status;
        this.statusPromiseLoading = false;
      },
      error: (error) => {
        this.statusPromiseLoading = false;
      }
    });*/

    /*this.http.get(this.baseUrl + '/debug/status').toPromise()
      .then(response => {
        this.statusPromise = response.json() as Status;
        console.log('response : ' + response.json());
        this.statusPromiseLoading = false;
      })
      .catch(error => {
        this.statusPromiseLoading = false;
      });*/
  }

  public getStatusLongLoadPromise(): void {
    this.statusLongLoadPromiseLoading = true;
    this.debugService.getStatusPromise(this.baseUrl + '/longload').then(status => {
      this.statusLongLoadPromise = status;
      this.statusLongLoadPromiseLoading = false;
    }).catch(error => {
      this.statusLongLoadPromiseLoading = false;
    });
  }

  public get404Promise(): void {
    this.status404PromiseLoading = true;
    this.debugService.getStatusPromise(this.baseUrl + '/debug/qsdqsdqsdqsd').then(status => {
      this.status404Promise = status;
      this.status404PromiseLoading = false;
    }).catch(error => {
      this.status404PromiseLoading = false;
    });
  }

  ngOnInit(): void {

  }

}
