import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSIPComponent } from './goal-sip.component';

describe('GoalSIPComponent', () => {
  let component: GoalSIPComponent;
  let fixture: ComponentFixture<GoalSIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalSIPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalSIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
