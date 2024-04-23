import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalservicioComponent } from './modalservicio.component';

describe('ModalservicioComponent', () => {
  let component: ModalservicioComponent;
  let fixture: ComponentFixture<ModalservicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalservicioComponent]
    });
    fixture = TestBed.createComponent(ModalservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
