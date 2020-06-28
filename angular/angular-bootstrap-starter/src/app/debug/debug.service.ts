import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import 'rxjs/add/operator/toPromise';
import {Status} from '../common/modele/status.modele';
import {LoadingBarService} from '../common/service/loading.bar.service';

@Injectable()
export class DebugService {

  constructor(public httpService: HttpService, private loadingBarService: LoadingBarService) { }

  public getTest(): string {
    return 'test';
  }

  public getStatus(): Status {
    const status: Status = {
      code: 0,
      message: 'test'
    };

    return status;
  }

  getStatusPromise(url): Promise<Status> {
    this.loadingBarService.start();
    return this.httpService.get(url)
      .toPromise()
      .then((response) => {
        this.loadingBarService.complete();
        return this.httpService.extractData(response) as Promise<Status>;
      }).catch((error) => {
        // this.loadingBarService.stop;
      });
  }
}
