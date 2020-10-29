import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MeetingPage } from './meeting.page';
import { MeetingPageRoutingModule } from './meeting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingPageRoutingModule,
  ],
  declarations: [MeetingPage]
})
export class MeetingPageModule {}
