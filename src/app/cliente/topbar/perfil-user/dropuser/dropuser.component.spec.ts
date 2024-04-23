import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropuserComponent } from './dropuser.component';

describe('DropuserComponent', () => {
  let component: DropuserComponent;
  let fixture: ComponentFixture<DropuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropuserComponent]
    });
    fixture = TestBed.createComponent(DropuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
