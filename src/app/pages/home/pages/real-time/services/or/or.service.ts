import { Injectable } from '@angular/core';
import { DPMDIRECTLABORApi, DPMOFFLINETARGETApi } from 'src/app/services/sdk';
import { pieChartData } from '../../classes/pieChartData';

@Injectable({
  providedIn: 'root'
})
export class OrService {

  constructor(
    public tORApi: DPMOFFLINETARGETApi,
    public rORApi: DPMDIRECTLABORApi,
  ) { }


  targetORParm = {
    'targets': [{
      'kpiid': 'KPI0017',
      'line': '*',
      'type': '*',
      'plant': 'F136',
      'plantName': 'P1',
      'yearweek': '202039'
    }]
  };
  realORParm = {
    "site": "WZS",
    "plantName": "p1",
    "department": ['MZV600', 'MZVA00', 'MZVB00', 'MZV800', 'MZV900', 'MZVC00', 'MZV000', 'MZV400',
      'MZV500', 'MZV700', 'MZVE00', 'MZV200', 'MZV300', 'MZVK00', 'MZVN00', 'MZVP00', 'MZVR00',
      'MZVD00', 'MZVF00', 'MZVG00', 'MZVH00', 'MZVT00', 'MZVZ00']

  };
  titleOR = 'Offline Ratio';



  requestParm = [

    {
      title: this.titleOR,
      targetParm: this.targetORParm,
      realParm: this.realORParm
    }

  ];








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
    target = await this.tORApi.getTargets(this.requestParm[index]['targetParm']).toPromise();

    // 获取圆环图下方图
    real = await this.rORApi.getOFFLINERATIO(this.requestParm[index]['realParm']).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['ratio']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['ratio']);

    //return pieChartData.formatNumber(this.requestParm[index]['title'], tempTar, tempPro);
    var isRed = (tempTar>tempPro)?true:false;
    
    return {title:this.requestParm[index].title,top:tempTar.toString(),bom:tempPro.toString(),red:isRed};
  }



}
