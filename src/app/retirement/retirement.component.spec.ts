import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementComponent } from './retirement.component';

describe('RetirementComponent', () => {
  let component: RetirementComponent;
  let fixture: ComponentFixture<RetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetirementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
