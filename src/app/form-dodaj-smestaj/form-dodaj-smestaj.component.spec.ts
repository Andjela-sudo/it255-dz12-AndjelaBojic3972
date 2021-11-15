import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajSmestajComponent } from './form-dodaj-smestaj.component';

describe('FormDodajSmestajComponent', () => {
  let component: FormDodajSmestajComponent;
  let fixture: ComponentFixture<FormDodajSmestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDodajSmestajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajSmestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
