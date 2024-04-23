import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenpedidoComponent } from './resumenpedido.component';

describe('ResumenpedidoComponent', () => {
  let component: ResumenpedidoComponent;
  let fixture: ComponentFixture<ResumenpedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenpedidoComponent]
    });
    fixture = TestBed.createComponent(ResumenpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
