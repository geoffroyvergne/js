import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from '../header/header.module';
import {NotificationService} from '../common/service/notification.service';
import {NotificationSharedModule} from '../common/shared/notification.module';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HeaderModule, NgMaterialSharedModule, NgxDatatableModule, Ng2SmartTableModule, NotificationSharedModule],
      declarations: [ TestComponent ],
      providers: [NotificationService]
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
