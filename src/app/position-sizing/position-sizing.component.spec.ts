import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSizingComponent } from './position-sizing.component';

describe('PositionSizingComponent', () => {
  let component: PositionSizingComponent;
  let fixture: ComponentFixture<PositionSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionSizingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
