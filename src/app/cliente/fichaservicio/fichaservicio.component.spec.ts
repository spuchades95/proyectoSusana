import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaservicioComponent } from './fichaservicio.component';

describe('FichaservicioComponent', () => {
  let component: FichaservicioComponent;
  let fixture: ComponentFixture<FichaservicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaservicioComponent]
    });
    fixture = TestBed.createComponent(FichaservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
