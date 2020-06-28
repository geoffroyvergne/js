import {Injectable} from '@angular/core';
import {HttpService} from '../common/service/http.service';
import {Status} from '../common/modele/status.modele';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DebugService {
  constructor(public httpService: HttpService) {

  }

  getStatusPromise(url): Promise<Status> {
    return this.httpService.get(url).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
      .catch(error => {
      });
  }
}
