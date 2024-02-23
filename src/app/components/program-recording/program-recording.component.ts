import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Program } from '../../models/program.model';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-program-recording',
  templateUrl: './program-recording.component.html',
  styleUrls: ['./program-recording.component.scss']
})
export class ProgramRecordingComponent implements OnInit {
  newProgram: Program = {
    name: '',
    startTime: '08:00',
    duration: 0,
    isExternal: false,
    capacity: 0
  };
  
  rooms: Room[] = [];
  selectedRoom!: Room;
  programStartTimes: string[] = [];
  displayAlert: boolean = false;
  displayRoomAlert: boolean = false;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.generateProgramTimes();
    this.rooms = this.dataService.getRooms();
  }


  addProgram(): void {
    const programStartTime = new Date(`01/01/2000 ${this.newProgram.startTime}`);
    const programEndTime = new Date(programStartTime.getTime() + this.newProgram.duration * 60 * 60 * 1000);
  
    if (programEndTime.getHours() >= 20) {
      this.displayAlert = true;
      return;
    }
  
    if (this.newProgram.isExternal) {
      this.dataService.addExternalProgram(this.newProgram);
      this.resetProgram();
      return;
    }
    console.log(this.selectedRoom);
    const isRoomAvailable = this.isRoomAvailable(this.selectedRoom, programStartTime, programEndTime);
    if (!isRoomAvailable) {
      this.displayRoomAlert = true;
      return;
    }
    this.dataService.addProgram(this.newProgram, this.selectedRoom);
    this.resetProgram();
  }
    
  resetProgram(): void {
    this.newProgram = {
      name: '',
      startTime: '',
      duration: 0,
      isExternal: false,
      capacity: 0
    };
  }
  
  calculateProgramEndTime(): Date {
    const startTime = new Date(`01/01/2000 ${this.newProgram.startTime}`);
    const endTime = new Date(startTime.getTime() + this.newProgram.duration * 60 * 60 * 1000);
    return endTime;
  }
  
  generateProgramTimes(): void {
    for (let hour = 8; hour <= 19; hour++) {
      this.programStartTimes.push(`${hour.toString().padStart(2, '0')}:00`);
    }
  }

  isRoomAvailable(room: Room, startTime: Date, endTime: Date): boolean {
    const existingPrograms = this.dataService.getProgramsForRoom(room);
    for (const program of existingPrograms) {
      const programStartTime = new Date(program.startTime);
      const programEndTime = new Date(programStartTime.getTime() + program.duration * 60 * 60 * 1000);
  
      if ((startTime >= programStartTime && startTime < programEndTime) || 
          (endTime > programStartTime && endTime <= programEndTime) || 
          (startTime <= programStartTime && endTime >= programEndTime)) {
        return false;
      }
    }
    return true;
  }
}
