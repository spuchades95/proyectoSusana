import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPedidoPagoComponent } from './resumen-pedido-pago.component';

describe('ResumenPedidoPagoComponent', () => {
  let component: ResumenPedidoPagoComponent;
  let fixture: ComponentFixture<ResumenPedidoPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenPedidoPagoComponent]
    });
    fixture = TestBed.createComponent(ResumenPedidoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
