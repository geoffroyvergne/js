import {HttpService} from '../common/service/http.service';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

export class Search {
  id?: number;
}

@Injectable()
export class SearchService {

  constructor(public httpService: HttpService) {
  }

  getSearch(url: string): Promise<Search[]> {
    return this.httpService.get(url).map((response) => {
      return this.httpService.extractData(response);
    }).toPromise().then()
      .catch(error => { });
  }
}
