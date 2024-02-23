import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramRecordingComponent } from './components/program-recording/program-recording.component';
import { RoomOccupancyScheduleComponent } from './components/room-occupancy-schedule/room-occupancy-schedule.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';

const routes: Routes = [
  { path: 'room-management', component: RoomManagementComponent },
  { path: 'program-recording', component: ProgramRecordingComponent },
  { path: 'room-occupancy-schedule', component: RoomOccupancyScheduleComponent },
  { path: '', redirectTo: '/room-management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
