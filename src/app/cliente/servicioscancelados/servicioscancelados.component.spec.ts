import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioscanceladosComponent } from './servicioscancelados.component';

describe('ServicioscanceladosComponent', () => {
  let component: ServicioscanceladosComponent;
  let fixture: ComponentFixture<ServicioscanceladosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioscanceladosComponent]
    });
    fixture = TestBed.createComponent(ServicioscanceladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
