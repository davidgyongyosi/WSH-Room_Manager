import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramRecordingComponent } from './program-recording.component';

describe('ProgramRecordingComponent', () => {
  let component: ProgramRecordingComponent;
  let fixture: ComponentFixture<ProgramRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramRecordingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
