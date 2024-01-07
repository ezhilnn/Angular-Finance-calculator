import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalculatorComponent } from './savings-calculator.component';

describe('SavingsCalculatorComponent', () => {
  let component: SavingsCalculatorComponent;
  let fixture: ComponentFixture<SavingsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingsCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
