import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { ProgramRecordingComponent } from './components/program-recording/program-recording.component';
import { RoomOccupancyScheduleComponent } from './components/room-occupancy-schedule/room-occupancy-schedule.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoomManagementComponent,
    ProgramRecordingComponent,
    RoomOccupancyScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
