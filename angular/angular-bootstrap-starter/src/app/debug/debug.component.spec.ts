import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugComponent } from './debug.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpSharedModule} from '../common/shared/http.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';
import {TranslateSharedModule} from '../common/shared/translate.module';

describe('DebugComponent', () => {
  let component: DebugComponent;
  let fixture: ComponentFixture<DebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugComponent ],
      imports: [ HttpSharedModule, LoadingBarSharedModule, TranslateSharedModule ]
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
