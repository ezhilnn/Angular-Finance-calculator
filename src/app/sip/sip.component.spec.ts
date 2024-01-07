import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIPComponent } from './sip.component';

describe('SIPComponent', () => {
  let component: SIPComponent;
  let fixture: ComponentFixture<SIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SIPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
