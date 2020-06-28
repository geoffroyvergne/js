/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DebugService } from './debug.service';
import { HttpSharedModule } from '../common/shared/http.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpService} from '../common/service/http.service';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';

describe('DebugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [ DebugService ],
      imports: [ HttpSharedModule, LoadingBarSharedModule ]
    });
  });

  it('should ...', inject([DebugService], (service: DebugService) => {
    expect(service).toBeTruthy();
  }));
});
