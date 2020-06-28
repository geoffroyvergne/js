/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DebugService } from './debug.service';
import { HttpSharedModule } from '../common/shared/http.module';

describe('DebugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [ DebugService ],
      imports: [ HttpSharedModule ]
    });
  });

  it('should ...', inject([DebugService], (service: DebugService) => {
    expect(service).toBeTruthy();
  }));
});
