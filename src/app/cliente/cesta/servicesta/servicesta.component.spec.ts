import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestaComponent } from './servicesta.component';

describe('ServicestaComponent', () => {
  let component: ServicestaComponent;
  let fixture: ComponentFixture<ServicestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicestaComponent]
    });
    fixture = TestBed.createComponent(ServicestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
