import { Injectable } from '@angular/core';
import { Program } from '../models/program.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rooms: Room[] = [
    {
      name: 'Sándor Petőfi room',
      capacity: 30,
      programs: []
    },
    {
      name: 'John Doe room',
      capacity: 20,
      programs: []
    }
  ];

  programs: Program[] = [];

  constructor() {
    this.createSamplePrograms();
   }

  addProgram(program: Program, room: Room): boolean {
    if (room && program) {
      room.programs.push(program);
      return true;
    }
    return false;
  }

  addExternalProgram(program: Program): boolean {
    if (program.isExternal) {
      this.programs.push(program);
      return true;
    }
    return false;
  }

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  getRooms(): Room[] {
    return this.rooms;
  }

  getProgramsForRoom(room: Room): Program[] {
    return room.programs;
  }

  getExtPrograms(): Program[] {
    return this.programs.filter(p => p.isExternal === true);
  }


  createSamplePrograms(): void {
    const program1: Program = {
      name: 'Yoga Class',
      startTime: '08:00',
      duration: 1,
      isExternal: false,
      capacity: 20
    };

    const program2: Program = {
      name: 'Guest Lecture',
      startTime: '10:00',
      duration: 2,
      isExternal: false,
      capacity: 20
    };

    const externalProgram: Program = {
      name: 'Party',
      startTime: '17:00',
      duration: 3,
      isExternal: true,
      capacity: 100
    };

    this.programs.push(externalProgram);
    this.rooms[0].programs.push(program1);
    this.rooms[1].programs.push(program2);
  }
}
