import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSeleccionadosComponent } from './servicios-seleccionados.component';

describe('ServiciosSeleccionadosComponent', () => {
  let component: ServiciosSeleccionadosComponent;
  let fixture: ComponentFixture<ServiciosSeleccionadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosSeleccionadosComponent]
    });
    fixture = TestBed.createComponent(ServiciosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
