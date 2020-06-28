import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UserComponent} from './user.component';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {HttpSharedModule} from '../common/shared/http.module';
import {BooleanPipe} from '../common/pipe/boolean.pipe';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotificationSharedModule} from '../common/shared/notification.module';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, BooleanPipe ],
      imports: [NgMaterialSharedModule, BrowserAnimationsModule, FormsModule,
        HttpSharedModule, NgxDatatableModule, NotificationSharedModule]
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
