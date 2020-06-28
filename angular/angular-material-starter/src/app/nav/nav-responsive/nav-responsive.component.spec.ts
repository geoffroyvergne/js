import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResponsiveComponent } from './nav-responsive.component';
import {AuthService} from '../../auth/auth.service';
import {NavService} from '../nav.service';
import {HttpSharedModule} from '../../common/shared/http.module';
import {NgMaterialSharedModule} from '../../common/shared/ngmaterial.module';
import {TranslateSharedModule} from '../../common/shared/translate.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NavSimpleComponent} from '../nav-simple/nav-simple.component';

describe('NavResponsiveComponent', () => {
  let component: NavResponsiveComponent;
  let fixture: ComponentFixture<NavResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavResponsiveComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [TranslateSharedModule, NgMaterialSharedModule, HttpSharedModule]  ,
      providers: [NavService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
