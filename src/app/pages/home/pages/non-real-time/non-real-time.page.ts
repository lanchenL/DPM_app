import { DPMINDIRECTLABORApi } from './../../../../services/sdk/services/custom/DPMINDIRECTLABOR';
import { DPMDIRECTLABORApi } from './../../../../services/sdk/services/custom/DPMDIRECTLABOR';
import { DPMUPPHNDETAILApi } from './../../../../services/sdk/services/custom/DPMUPPHNDETAIL';
import { DPMPRODUCTIVITYDETAILApi } from './../../../../services/sdk/services/custom/DPMPRODUCTIVITYDETAIL';
import { DPMDLBUFFERRATIOGAP_EMPLOYEDApi } from './../../../../services/sdk/services/custom/DPMDLBUFFERRATIOGAP_EMPLOYED';
import { DPMIDLTARGETApi } from './../../../../services/sdk/services/custom/DPMIDLTARGET';
import { DPMOFFLINETARGETApi } from './../../../../services/sdk/services/custom/DPMOFFLINETARGET';
import { DPMUPPHNLINETARGETApi } from './../../../../services/sdk/services/custom/DPMUPPHNLINETARGET';
import { DPMOEELINETARGETApi } from './../../../../services/sdk/services/custom/DPMOEELINETARGET';
import { DPMPRODUCTIVITYLINETARGETApi } from './../../../../services/sdk/services/custom/DPMPRODUCTIVITYLINETARGET';
import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';
import { DPMOEEApi, DPMDLBUFFERRATIOApi } from 'src/app/services/sdk';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-real-time',
  templateUrl: './non-real-time.page.html',
  styleUrls: ['./non-real-time.page.scss'],
})
export class NonRealTimePage implements OnInit {
  public ringData = [];
  // public formatter: string;
  constructor(
    public router: Router,
    // private http: HttpClient,
    private dpmproductivitylinetargetApi: DPMPRODUCTIVITYLINETARGETApi,
    private dpmoeelinetargetApi: DPMOEELINETARGETApi,
    private dpmupphnlinetargetApi: DPMUPPHNLINETARGETApi,
    private dpmofflinetargetApi: DPMOFFLINETARGETApi,
    private dpmidltargetApi: DPMIDLTARGETApi,
    // tslint:disable-next-line: variable-name
    private dpmdlbufferratiogap_employedApi: DPMDLBUFFERRATIOGAP_EMPLOYEDApi,
    private dpmproductivitydetailApi: DPMPRODUCTIVITYDETAILApi,
    private dpmoeeApi: DPMOEEApi,
    private dpmupphndetailApi: DPMUPPHNDETAILApi,
    private dpmdirectlaborApi: DPMDIRECTLABORApi,
    private dpmindirectlaborApi: DPMINDIRECTLABORApi,
    private dpmdlbufferratioApi: DPMDLBUFFERRATIOApi,
  ) { }

  onClickCircularRing(title: string, index: number) {
    console.log('click title name:' + title + '   index:' + index);



    // 跳转页面

    if (title != "IDL Ratio" && title != "Offline Ratio" && title != "DL Buffer Ratio") {
      this.router.navigate(['/home/non-real-time/pie-data/'], {
        // 待传入的参数
        queryParams: {
          mainTitle: this.ringData[index].title,
          mainDataTop: this.ringData[index].dataTop,
          mainDataBottom: this.ringData[index].dataBottom

        }
      });
    }
  }

  async ngOnInit() {
    // throw new Error("Method not implemented.");
    // PCBA和FA目標值
   
    const response1 = await this.dpmproductivitylinetargetApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0001',
        'line': '*',
        'type': 'PCB',
        'plant': 'F136',
        'yearweek': '202039',
      }, {
        'kpiid': 'KPI0002',
        'line': '*',
        'type': 'FA',
        'plant': 'F136',
        'yearweek': '202039',
      }]
    }).toPromise();
    // console.log(response1);
    // OEE1和OEE2的目標值
    const response2 = await this.dpmoeelinetargetApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0009',
        'line': '*',
        'oeetype': 'OEE2',
        'plant': 'F136',
        'type': 'PCB',
        'yearweek': '202039',
      }, {
        'kpiid': 'KPI0032',
        'line': '*',
        'oeetype': 'OEE1',
        'plant': 'F136',
        'type': 'PCB',
        'yearweek': '202039',
      }]
    }).toPromise();
    // DIP UPPH（約當）和FA UPPH（約當）目標值
    const response3 = await this.dpmupphnlinetargetApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0007',
        'line': '*',
        'plant': 'F136',
        'type': 'PCB',
        'yearweek': '202039',
      }, {
        'kpiid': 'KPI0008',
        'line': '*',
        'plant': 'F136',
        'type': 'FA',
        'yearweek': '202039',
      }]
    }).toPromise();
    // Offline Ratio目標值
    const response4 = await this.dpmofflinetargetApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0017',
        'line': '*',
        'plant': 'F136',
        'plantName': 'P1',
        'type': '*',
        'yearweek': '202039',
      }]
    }).toPromise();
    // IDL Ratio实际值
    const response5 = await this.dpmidltargetApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0018',
        'line': '*',
        'plant': 'F136',
        'plantName': 'P1',
        'type': '*',
        'yearweek': '202039',
      }]
    }).toPromise();
    // DL Buffer Ratio实际值
    const response6 = await this.dpmdlbufferratiogap_employedApi.getTargets({
      'targets': [{
        'kpiid': 'KPI0033',
        'line': '*',
        'plant': 'F136',
        'plantName': 'P1',
        'type': '*',
        'yearweek': '202039',
      }]
    }).toPromise();
    // PCBA Productivity實際值
    const response7 = await this.dpmproductivitydetailApi.getProductivity({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'PCB',
      'prds': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['S1B', 'S2B', 'S4B', 'D1', 'D2', 'D3', 'D4', 'D5']
      }]
    },
    ).toPromise();
    // FA Productivity實際值
    const response8 = await this.dpmproductivitydetailApi.getProductivity({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'FA',
      'prds': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['F1', 'F2', 'F3', 'F4', 'F7', 'F9']
      }]
    }).toPromise();
    // OEE1實際值
    const response9 = await this.dpmoeeApi.getOEE({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'PCB',
      'oees': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['S1B', 'S2B', 'S3B']
      },
      {
        'period': '*',
        'periodtype': 'daily',
        'line': ['S1B', 'S3B', 'S5B', 'S7B', 'S7B', 'S9B']
      }]
    }).toPromise();
    // OEE2實際值
    const response10 = await this.dpmoeeApi.getOEE({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'PCB',
      'oees': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['S1B', 'S3B', 'S5B', 'S7B', 'S7B', 'S9B']
      }]
    }).toPromise();
    // DIP UPPH(約當)實際值
    const response11 = await this.dpmupphndetailApi.getUpphn({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'PCB',
      'upphns': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'P1', 'P2', 'P5', 'P6', 'P7', 'P8', 'P9', 'DP1', 'DP5', 'DP9', 'DP3']
      }]
    }).toPromise();
    // FA UPPH(約當)實際值
    const response12 = await this.dpmupphndetailApi.getUpphn({
      'site': 'WZS',
      'plant': 'F136',
      'customer': '*',
      'mfgtype': 'FA',
      'upphns': [{
        'period': '*',
        'periodtype': 'daily',
        'line': ['F1', 'F2', 'F3', 'F4']
      }]
    }).toPromise();
    // Offline Ratio實際值
    const response13 = await this.dpmdirectlaborApi.getOFFLINERATIO({
      'site': 'WZS',
      'plantName': 'P1',
      'department': [
        'MZV600', 'MZVA00', 'MZVB00', 'MZV800', 'MZV900', 'MZVC00', 'MZV000', 'MZV400',
        'MZV500', 'MZV700', 'MZVE00', 'MZV200', 'MZV300', 'MZVK00', 'MZVN00', 'MZVP00',
        'MZVR00', 'MZVD00', 'MZVF00', 'MZVG00', 'MZVH00', 'MZVT00', 'MZVZ00'
      ]
    }).toPromise();
    // IDL Ratio实际值
    const response14 = await this.dpmindirectlaborApi.getDLIDLRATIO({
      'plantName': 'P1',
      'department': [
        'MZV600', 'MZVA00', 'MZVB00', 'MZV800', 'MZV900', 'MZVC00', 'MZV000', 'MZV400',
        'MZV500', 'MZV700', 'MZVE00', 'MZV200', 'MZV300', 'MZVK00', 'MZVN00', 'MZVP00',
        'MZVR00', 'MZVD00', 'MZVF00', 'MZVG00', 'MZVH00', 'MZVT00', 'MZVZ00'
      ]
    }).toPromise();
    // DL Buffer Ratio实际值
    const response15 = await this.dpmdlbufferratioApi.getDLBUFFERRATIO({
      'Kpiid': 'KPI0033',
      'period': '*',
      'periodtype': 'daily',
      'plantName': 'P1',
      'site': 'WZS'
    }).toPromise();
    //  console.log(response15);
    const pieChartData =
    {
      title: 'PCBA Productivity',
      dataTop: response1.data[0].target,
      dataBottom: response7.data[0].productivity
    };
    const pieChartData1 =
    {
      title: 'FA Productivity',
      dataTop: response1.data[1].target,
      dataBottom: response8.data[0].productivity
    };
    const pieChartData3 =
    {
      title: 'OEE1',
      dataTop: response2.data[1].target,
      dataBottom: response9.data[0].oee1
    };
    const pieChartData4 =
    {
      title: 'OEE1',
      dataTop: response2.data[0].target,
      dataBottom: response10.data[0].oee2
    };
    const pieChartData5 =
    {
      title: 'DIP UPPH(約當)',
      dataTop: response3.data[0].target,
      dataBottom: response11.data[0].upph
    };
    const pieChartData6 =
    {
      title: 'FA UPPH(約當)',
      dataTop: response3.data[1].target,
      dataBottom: response12.data[0].upph
    };
    const pieChartData7 =
    {
      title: 'Offline Ratio',
      dataTop: response4.data[0].target,
      dataBottom: response13.data[0].ratio
    };
    const pieChartData8 =
    {
      title: 'IDL Ratio',
      dataTop: response5.data[0].target,
      dataBottom: response14.data[0].ratio
    };
    const pieChartData9 =
    {
      title: 'DL Buffer Ratio',
      dataTop: response6.data[0].target,
      dataBottom: response15.data[0].ratio
    };
    this.ringData.push(pieChartData, pieChartData1, pieChartData3, pieChartData4, pieChartData5,
      pieChartData6, pieChartData7, pieChartData8, pieChartData9);

      

    // Non Real Time首页死数据
    // this.ringData = [
    //     { title: 'PCBA Productivity', dataTop: '0', dataBottom: '0.4619' },
    //     { title: 'FA Productivity', dataTop: '0.95', dataBottom: '0.6574' },
    //     { title: 'DIP UPPH(約當)', dataTop: '1.34', dataBottom: '1.49' },
    //     { title: 'FA UPPH(約當)', dataTop: '2.16', dataBottom: '2.66' },
    //     { title: 'OEE2', dataTop: '0', dataBottom: '0.7649' },
    //     { title: 'Offline Ratio', dataTop: '0.8', dataBottom: '0.5' },
    //     { title: 'IDL Ratio', dataTop: '1:8', dataBottom: '0' },
    //     { title: 'OEE1', dataTop: '0', dataBottom: '0.8619' },
    //     { title: 'Offline DL UPPH', dataTop: '3.45', dataBottom: '1.79' },
    //   ];
  }



}
