import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugComponent } from './debug.component';
import {NgMaterialSharedModule} from '../common/shared/ngmaterial.module';
import {DebugService} from './debug.service';
import {HttpSharedModule} from '../common/shared/http.module';
import {NotificationService} from '../common/service/notification.service';
import {HeaderModule} from '../header/header.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

describe('DebugComponent', () => {
  let component: DebugComponent;
  let fixture: ComponentFixture<DebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMaterialSharedModule, HeaderModule, HttpSharedModule, TranslateSharedModule],
      providers: [DebugService, NotificationService],
      declarations: [ DebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
