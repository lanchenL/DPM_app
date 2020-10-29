import { title } from 'process';
import { DPMPDTISSUESApi } from './../../../../../../services/sdk/services/custom/DPMPDTISSUES';
import { EChartOption } from 'echarts';
import { Component, Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-actionspart',
  templateUrl: './actionspart.page.html',
  styleUrls: ['./actionspart.page.scss'],
})
export class ActionspartPage implements OnInit {

  public items = [];

  constructor(

    private dpmpdtissuesApi: DPMPDTISSUESApi,
  ) { }

  async ngOnInit() {
    const response = await this.dpmpdtissuesApi.getStatus({
      'actions': [
        {
          "plant": "F136",
          "mfgtype": "PCB",
          "kpiid": "PROD",
          "line": [
            "S1B",
            "S2B",
            "S3B",
            "S4B",
            "S5B",
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7"
          ]
        },
        {
          "plant": "F136",
          "mfgtype": "FA",
          "kpiid": "PROD"
        },
        {
          "plant": "F136",
          "mfgtype": "FA",
          "kpiid": "FPYR"
        },
        {
          "plant": "F136",
          "mfgtype": "PCB",
          "kpiid": "FPYR"
        },
        {
          "plant": "F136",
          "mfgtype": "PCB",
          "kpiid": "OEE2",
          "line": [
            "S1B",
            "S3B",
            "S5B",
            "S7B",
            "S9B",
          ]
        }
      ],
    }).toPromise();
    console.log(response);
    let datas = response.data;
    datas = datas.filter(data => data.status);
    const table = {};
    const titleMap = {
      'PCB PROD': 'PCB productivity',
      'FA PROD': 'FA productivity',
    };

    for (const data of datas) {
      if (!data.status) {
        continue;
      }
      let key = `${data.mfgtype} ${data.kpiid}`; // title唯一
      // `${data.kpiid}`: "productivity";
      key = titleMap[key] || key;
      const value: any = {};
      if (data.status === 1) {
        value.open = data.rate * 100 + '%';
        value.open1 = data.count;
      } else if (data.status === 2) {
        value.ongoing = data.rate * 100 + '%';
        value.ongoing1 = data.count;
      }else {
        value.overdue = data.rate * 100 + '%';
        value.overdue1 = data.count;
      }
      if (table[key]) {
        Object.assign(table[key], value);
      } else {
        table[key] = value;
        table[key].title = key; // title显示
      }
      // table[key] = Object.assign(table[key] || {}, value);
    }
    console.log({ table }, Object.values(table));
    this.items = Object.values(table);
  }

}
