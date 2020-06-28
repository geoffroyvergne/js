import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {NavService} from '../nav.service';
import {HttpSharedModule} from '../../common/shared/http.module';
import {NgMaterialSharedModule} from '../../common/shared/ngmaterial.module';
import {TranslateSharedModule} from '../../common/shared/translate.module';
import {NavSimpleComponent} from './nav-simple.component';



describe('NavSimpleComponent', () => {
  let component: NavSimpleComponent;
  let fixture: ComponentFixture<NavSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSimpleComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [TranslateSharedModule, NgMaterialSharedModule, HttpSharedModule]  ,
      providers: [NavService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
