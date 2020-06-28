import { Component, OnInit } from '@angular/core';
import {DebugService} from './debug.service';
import {Status} from '../common/modele/status.modele';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  public statusPromise: Status;
  public statusPromiseLoading: boolean;

  public statusLongLoadPromise: Status;
  public statusLongLoadPromiseLoading: boolean;

  public loadingBarStatus = 'determinate';

  private baseUrl = this.debugService.httpService.getBaseUrl();

  constructor(private debugService: DebugService) { }

  ngOnInit() {
  }

  public getStatusPromise(): void {
    this.statusPromiseLoading = true;
    this.loadingBarStatus = 'indeterminate';
    this.debugService.getStatusPromise(this.baseUrl + '/debug/status').then(status => {
      this.statusPromise = status;
      this.statusPromiseLoading = false;
      this.loadingBarStatus = 'determinate';
    }).catch(error => {
      this.statusPromiseLoading = false;
      this.loadingBarStatus = 'determinate';
    });
  }

  public getStatusLongLoadPromise(): void {
    this.statusLongLoadPromiseLoading = true;
    this.loadingBarStatus = 'indeterminate';
    this.debugService.getStatusPromise(this.baseUrl + '/longload').then(status => {
      this.statusLongLoadPromise = status;
      this.statusLongLoadPromiseLoading = false;
      this.loadingBarStatus = 'determinate';
    }).catch(error => {
      this.statusLongLoadPromiseLoading = false;
      this.loadingBarStatus = 'determinate';
    });
  }

}
