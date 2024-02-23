import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOccupancyScheduleComponent } from './room-occupancy-schedule.component';

describe('RoomOccupancyScheduleComponent', () => {
  let component: RoomOccupancyScheduleComponent;
  let fixture: ComponentFixture<RoomOccupancyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomOccupancyScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomOccupancyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
