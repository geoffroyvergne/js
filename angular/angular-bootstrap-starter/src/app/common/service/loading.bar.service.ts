import { Injectable } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class LoadingBarService {
  constructor(private slimLoadingBarService: SlimLoadingBarService) { }

  start() {
    this.slimLoadingBarService.start();
  }

  stop() {
    this.slimLoadingBarService.stop();
  }

  complete() {
    this.slimLoadingBarService.complete();
  }
}
