import { EVENTApi } from './../../../../services/sdk/services/custom/EVENT';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  public calendars = [];
  constructor(
    private eventApi: EVENTApi,
  ) { }

  async ngOnInit() {
    const datas = await this.eventApi.find({ where: { type: 2, plantid: 'f136' } }).toPromise();
    console.log('datas', datas);
    this.calendars = datas;
    // datas.forEach(item => {
    //   if (item.type === 2) {
    //     this.calendars.push(item);
    //   }
    // });
  }
}
