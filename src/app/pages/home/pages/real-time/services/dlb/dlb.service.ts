import { Injectable } from '@angular/core';
import { DPMDLBUFFERRATIOApi, DPMDLBUFFERRATIOGAP_EMPLOYEDApi } from 'src/app/services/sdk';
import { pieChartData } from '../../classes/pieChartData';

@Injectable({
  providedIn: 'root'
})
export class DlbService {

  constructor(
    public tDLBApi: DPMDLBUFFERRATIOGAP_EMPLOYEDApi,
    public rDLBApi: DPMDLBUFFERRATIOApi,
  ) { }

  targetDLBParm = {
    'targets': [{
      'kpiid': 'KPI0033',
      'line': '*',
      'type': '*',
      'plant': 'F136',
      'plantName': 'P1',
      'yearweek': '202039'
    }]
  };
  realDLBParm = {
    "kpiid": "KPI0033",
    "site": "WZS",
    "plantName": "P1",
    "period": "*",
    "periodtype": "daily",

  };
  titleDLB = 'DL Buffer Ratio';



  requestParm = [

    {
      title: this.titleDLB,
      targetParm: this.targetDLBParm,
      realParm: this.realDLBParm
    }

  ];

  serviceTitle = [this.titleDLB];










  /**
   * 获取首页DIP UPPH或者FA UPPH圆环图的API数据
   * @param index 0表示查找DIP 1表示查找FA
   */
  async getNumber(index: number): Promise<{ title: string, top: string, bom: string, red: boolean }> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];

    // 获取圆环图上方值
    target = await this.tDLBApi.getTargets(this.requestParm[index]['targetParm']).toPromise();

    // 获取圆环图下方图
    real = await this.rDLBApi.getDLBUFFERRATIO(this.requestParm[index]['realParm']).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['ratio']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['ratio']);

    //return pieChartData.formatNumber(this.requestParm[index]['title'], tempTar, tempPro);
    var isRed = (tempTar>tempPro)?true:false;
    
    return {title:this.requestParm[index].title,top:tempTar.toString(),bom:tempPro.toString(),red:isRed};
  }

}
