/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpService} from './http.service';
import {HttpSharedModule} from '../shared/http.module';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [ ],
      imports: [ HttpSharedModule, RouterTestingModule.withRoutes([]) ]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
