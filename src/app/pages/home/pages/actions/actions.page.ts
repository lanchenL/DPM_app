import { title } from 'process';
import { DPMPDTISSUESApi } from './../../../../services/sdk/services/custom/DPMPDTISSUES';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  item: {
    title: string;
    overdue: string;
    ongoing: string;
    open: string;
  } = {} as {
    title: string;
    overdue: string;
    ongoing: string;
    open: string;
  };



  constructor(
    private dpmpdtissuesApi: DPMPDTISSUESApi,
  ) { }

  async ngOnInit() {
    const response = await this.dpmpdtissuesApi.getStatus({
      actions: [
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
      "groupBy": "status",
    }).toPromise();
    console.log(response);
    const datas = response.data;
    this.item = {
      title: '',
      overdue: datas[3].count,
      ongoing: datas[2].count,
      open: datas[1].count,
    };
    console.log(this);
  }
  // nihao(){
  //   this.router.navigate(['/home/actions/actionspart']);
  // }

}
