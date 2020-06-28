import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComponent } from './profil.component';
import {HttpSharedModule} from '../common/shared/http.module';
import {LoadingBarSharedModule} from '../common/shared/loading.bar.module';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComponent ],
      imports: [HttpSharedModule, LoadingBarSharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
