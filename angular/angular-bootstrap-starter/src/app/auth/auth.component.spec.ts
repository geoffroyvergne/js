import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {HttpSharedModule} from '../common/shared/http.module';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [FormsModule, HttpSharedModule, NgBootstrapSharedModule, LoadingBarSharedModule, NotificationSharedModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
