import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtarjetasComponent } from './addtarjetas.component';

describe('AddtarjetasComponent', () => {
  let component: AddtarjetasComponent;
  let fixture: ComponentFixture<AddtarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtarjetasComponent]
    });
    fixture = TestBed.createComponent(AddtarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
