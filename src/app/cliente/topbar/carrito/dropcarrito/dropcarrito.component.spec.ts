import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropcarritoComponent } from './dropcarrito.component';

describe('DropcarritoComponent', () => {
  let component: DropcarritoComponent;
  let fixture: ComponentFixture<DropcarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropcarritoComponent]
    });
    fixture = TestBed.createComponent(DropcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
