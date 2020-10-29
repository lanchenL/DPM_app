import { EVENTApi } from './../../../../services/sdk/services/custom/EVENT';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.page.html',
  styleUrls: ['./meeting.page.scss'],
})
export class MeetingPage implements OnInit {

  meetings = [];
  constructor(
    private eventApi: EVENTApi,
  ) { }

  async ngOnInit() {
    this.meetings = await this.eventApi.find({where: {type : 1, plantid: 'F136'}}).toPromise();
  }
}
