import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistetarjetaComponent } from './existetarjeta.component';

describe('ExistetarjetaComponent', () => {
  let component: ExistetarjetaComponent;
  let fixture: ComponentFixture<ExistetarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistetarjetaComponent]
    });
    fixture = TestBed.createComponent(ExistetarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
