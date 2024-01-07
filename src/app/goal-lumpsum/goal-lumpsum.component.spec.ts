import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOALLumpsumComponent } from './goal-lumpsum.component';

describe('GOALLumpsumComponent', () => {
  let component: GOALLumpsumComponent;
  let fixture: ComponentFixture<GOALLumpsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GOALLumpsumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GOALLumpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
