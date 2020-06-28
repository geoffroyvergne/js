import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BooleanViewComponent, UserComponent} from './user.component';
import {BooleanPipe} from '../common/pipe/boolean.pipe';
import {HttpSharedModule} from '../common/shared/http.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateSharedModule} from '../common/shared/translate.module';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpSharedModule, NgBootstrapSharedModule, LoadingBarSharedModule,
        NotificationSharedModule, Ng2SmartTableModule, TranslateSharedModule],
      declarations: [ UserComponent, BooleanPipe, BooleanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
