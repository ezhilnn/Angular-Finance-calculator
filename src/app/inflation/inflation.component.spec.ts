import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflationComponent } from './inflation.component';

describe('InflationComponent', () => {
  let component: InflationComponent;
  let fixture: ComponentFixture<InflationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InflationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InflationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
