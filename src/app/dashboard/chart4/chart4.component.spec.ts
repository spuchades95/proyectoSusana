import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart4Component } from './chart4.component';

describe('Chart4Component', () => {
  let component: Chart4Component;
  let fixture: ComponentFixture<Chart4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chart4Component]
    });
    fixture = TestBed.createComponent(Chart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
