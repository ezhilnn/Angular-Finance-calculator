import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesmentRetuernComponent } from './invesment-retuern.component';

describe('InvesmentRetuernComponent', () => {
  let component: InvesmentRetuernComponent;
  let fixture: ComponentFixture<InvesmentRetuernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvesmentRetuernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvesmentRetuernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
