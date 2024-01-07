import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LUMPSUMFVComponent } from './lumpsum-fv.component';

describe('LUMPSUMFVComponent', () => {
  let component: LUMPSUMFVComponent;
  let fixture: ComponentFixture<LUMPSUMFVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LUMPSUMFVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LUMPSUMFVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
