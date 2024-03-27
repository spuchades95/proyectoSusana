import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisembarcacionesComponent } from './misembarcaciones.component';

describe('MisembarcacionesComponent', () => {
  let component: MisembarcacionesComponent;
  let fixture: ComponentFixture<MisembarcacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisembarcacionesComponent]
    });
    fixture = TestBed.createComponent(MisembarcacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
