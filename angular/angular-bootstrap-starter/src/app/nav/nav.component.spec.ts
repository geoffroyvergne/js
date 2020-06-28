import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpSharedModule} from '../common/shared/http.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [AuthService],
      imports: [HttpSharedModule, LoadingBarSharedModule, NgBootstrapSharedModule, NotificationSharedModule, TranslateSharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
