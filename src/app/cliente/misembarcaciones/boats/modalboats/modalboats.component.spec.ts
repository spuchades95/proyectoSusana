import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboatsComponent } from './modalboats.component';

describe('ModalboatsComponent', () => {
  let component: ModalboatsComponent;
  let fixture: ComponentFixture<ModalboatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalboatsComponent]
    });
    fixture = TestBed.createComponent(ModalboatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
