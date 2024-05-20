import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestitaComponent } from './cestita.component';

describe('CestitaComponent', () => {
  let component: CestitaComponent;
  let fixture: ComponentFixture<CestitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CestitaComponent]
    });
    fixture = TestBed.createComponent(CestitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
