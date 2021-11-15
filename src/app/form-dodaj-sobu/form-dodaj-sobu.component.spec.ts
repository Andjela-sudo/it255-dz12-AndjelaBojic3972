import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajSobuComponent } from './form-dodaj-sobu.component';

describe('FormDodajSobuComponent', () => {
  let component: FormDodajSobuComponent;
  let fixture: ComponentFixture<FormDodajSobuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDodajSobuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajSobuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
