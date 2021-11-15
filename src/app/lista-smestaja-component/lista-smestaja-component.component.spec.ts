import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSmestajaComponentComponent } from './lista-smestaja-component.component';

describe('ListaSmestajaComponentComponent', () => {
  let component: ListaSmestajaComponentComponent;
  let fixture: ComponentFixture<ListaSmestajaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSmestajaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSmestajaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
