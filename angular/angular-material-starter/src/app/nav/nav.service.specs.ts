/* tslint:disable:no-unused-variable */

import {TestBed, inject, async} from '@angular/core/testing';
import {NavService} from './nav.service';

describe('NavService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
    });
  }));

  it('should ...', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
  }));
});
