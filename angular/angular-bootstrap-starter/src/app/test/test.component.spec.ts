import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {FormsModule} from '@angular/forms';
import {NgBootstrapSharedModule} from '../common/shared/ngbootstrap.module';
import {NotificationService} from '../common/service/notification.service';
import {ToastrConfig, ToastrService} from 'toastr-ng2';
import {LoadingBarServiceMock, NotificationServiceMock} from '../common/mock.services';
import {LoadingBarService} from '../common/service/loading.bar.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {NotificationSharedModule} from '../common/shared/notification.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {Ng2SmartTableModule} from 'ng2-smart-table';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [FormsModule, NgBootstrapSharedModule, LoadingBarSharedModule,
        NotificationSharedModule, NgxDatatableModule, Ng2SmartTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
