import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Room } from '../../models/room.model';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-room-occupancy-schedule',
  templateUrl: './room-occupancy-schedule.component.html',
  styleUrls: ['./room-occupancy-schedule.component.scss']
})
export class RoomOccupancyScheduleComponent implements OnInit {
  rooms: Room[] = [];
  extPrograms: Program[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.rooms = this.dataService.rooms;
    this.extPrograms = this.dataService.programs;
  }
}
