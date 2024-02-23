import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {
  newRoom: any = {
    name: '',
    capacity: null
  };

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  addRoom(): void {
    if (this.newRoom.name && this.newRoom.capacity) {
      this.dataService.rooms.push({ name: this.newRoom.name, capacity: this.newRoom.capacity, programs: [] });
      this.newRoom.name = '';
      this.newRoom.capacity = null;
    }
  }

  deleteRoom(room: any): void {
    const index = this.dataService.rooms.indexOf(room);
    if (index !== -1) {
      this.dataService.rooms.splice(index, 1);
    }
  }
}