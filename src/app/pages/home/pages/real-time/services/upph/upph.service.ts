

import { serviceInterface } from './../../classes/serviceInterface';
import { Injectable } from '@angular/core';
import { DPMUPPHNDETAILApi, DPMUPPHNLINETARGETApi,DPMUPPHNGROUPTARGETApi } from 'src/app/services/sdk';
import { pieChartData } from '../../classes/pieChartData';

@Injectable({
  providedIn: 'root'
})
export class UpphService implements serviceInterface {

  constructor(
    public rUPPHApi: DPMUPPHNDETAILApi,
    public tUPPHApi: DPMUPPHNLINETARGETApi,
    public tGApi: DPMUPPHNGROUPTARGETApi  ) { }


  targetDIPParm = {
    'targets': [{
      'kpiid': 'KPI0007',
      'line': '*',
      'type': 'PCB',
      'plant': 'F136',
      'yearweek': '202036'
    }]
  };
  realDIPParm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype": "PCB",
    "upphns": [{
      "period": "*",
      "periodtype": "daily",
      "line": ["D1", "D2", "D3", "D4", "D5", "D6", "P1", "P2", "P4", "P8", "P9", "DP1", "DP5", "DP9", "DP3"]
    }]
  };
  titleDIP = 'DIP UPPH(約當)';

  targetFAParm = {
    'targets': [{
      'kpiid': 'KPI0008',
      'line': '*',
      'type': 'FA',
      'plant': 'F136',
      'yearweek': '202036'
    }]
  };

  realFAParm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype": 'FA',
    "upphns": [{
      "period": "*",
      "periodtype": "daily",
      "line": ["F1", "F2", "F3", "F4"]
    }]
  };
  titleFA = 'FA UPPH (約當)';


  requestParm = [

    {
      title: this.titleDIP,
      targetParm: this.targetDIPParm,
      realParm: this.realDIPParm
    },
    {
      title: this.titleFA,
      targetParm: this.targetFAParm,
      realParm: this.realFAParm
    }

  ];






  //子页面的线别option 数组[0]---OEE1 数组[1]---OEE2
  line = [
    // DIP 的线别
    [{ data: 'D1' }, { data: "D2" },
    { data: "D3" }, { data: "DP1" }, { data: "DP3" },
    { data: "DP5" }, { data: "P1" }, { data: "P2" },
    { data: "P4" }, { data: "P5" }],
    // FA 的线别
    [{ data: "F1" },
    { data: "F2" },
    { data: "F3" },
    ]
  ];



  //子页面传入的line参数（一开始默认）
  startLine = [
    ["D1", "D2", "D3", "DP1", "DP3", "DP5", "P1", "P2", "P4", "P5"],
    ["F1", "F2", "F3"]
  ];

  // 子页面的main chart 请求参数  （Target日期未更改）
  tEntireParm = [
    {
      "targets":
        [{ "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "*" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "D1" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "D2" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "D3" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "DP1" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "DP3" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "DP5" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "P1" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "P2" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "P4" },
        { "kpiid": "KPI0007", "yearweek": "202036", "type": "PCB", "plant": "F136", "line": "P5" }]
    },
    {
      "targets":
        [{ "kpiid": "KPI0008", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "*" },
        { "kpiid": "KPI0008", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F1" },
        { "kpiid": "KPI0008", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F2" },
        { "kpiid": "KPI0008", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F3" }]
    }
  ];


  //选择的日期
  sPeriod: string;

  // 这下面的日期之后需要更改！！！ 因为后面会动态添加line，所以这里只默认设置只选中一条line的情况
  rEntireParm = [
    {
      "kpiid": "KPI0007", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["D2"],
      "upphns": [
        { "period": "20200831,20200831", "periodtype": "daily", "line": ["D2"] },
        { "period": "20200831,20200831", "periodtype": "daily" },
      ]
    },
    {
      "kpiid": "KPI0008", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "FA", "line": ["F2"],
      "upphns": [
        { "period": "20200831,20200831", "periodtype": "daily", "line": ["F2"] },
        { "period": "20200831,20200831", "periodtype": "daily" },
      ]
    }

  ];

  // 子页面的sub chart 请求参数
  tGroupParm = [
    {
      "targets": [
        { "kpiid": "KPI0007", "yearweek": "202040", "plant": "F136", "type": "PCB", "group": "TB2-A" },
        { "kpiid": "KPI0007", "yearweek": "202040", "plant": "F136", "type": "PCB", "group": "TB2-A Baol" },
        { "kpiid": "KPI0007", "yearweek": "202040", "plant": "F136", "type": "PCB", "group": "TB2-B" }]
    },
    {
      "targets": [
        { "kpiid": "KPI0008", "yearweek": "202040", "plant": "F136", "type": "FA", "group": "TB2-A" },
        { "kpiid": "KPI0008", "yearweek": "202040", "plant": "F136", "type": "FA", "group": "TB2-B" }]
    }
  ];

  // group 的real值 
  rGroupParm = [
    {
      "kpiid": "KPI0007", "site": "WZS", "plant": "F136", "customer": "*",
      "mfgtype": "PCB",
      "line": ["D3", "DP1", "DP3", "DP5", "P1", "P2", "P4", "P5", "D2", "D1"],
      "upphns": [
        { "period": "20200801,20200930", "periodtype": "daily", "group": "TB2-A", "line": ["D1", "D2", "D3", "D4", "D5"] },
        { "period": "20200801,20200930", "periodtype": "daily", "group": "TB2-A Baol", "line": ["D1", "D2", "D3", "D4", "D5", "D6"] },
        { "period": "20200801,20200930", "periodtype": "daily", "group": "TB2-B", "line": ["D6", "D7", "D8", "D9", "D10"] }]
    },
    {
      "kpiid": "KPI0008", "site": "WZS", "plant": "F136", "customer": "*",
      "mfgtype": "FA",
      "line": ["F3", "F1", "F2"],
      "upphns": [
        { "period": "20200901,20200930", "periodtype": "daily", "group": "TB2-A", "line": ["F1", "F2"] },
        { "period": "20200901,20200930", "periodtype": "daily", "group": "TB2-B", "line": ["F3", "F4"] }]
    }

  ];

  //服务 所管理的两个圆环的名称
  serviceTitle = [this.titleDIP,this.titleFA];





  /**
  * 获取子页面的Group圆的数组值
  * @param index 0表示查找PCBA 1表示查找FA
  */
  async getGroupNumber(period: string, index: number): Promise<pieChartData[]> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];


    // 修改传入的real请求参数的period rGroupParm
    for (var i = 0; i < this.rGroupParm[index]['upphns'].length; i++) {
      console.log("getGroupNumber look length", this.rGroupParm[index]['upphns'].length);
      this.rGroupParm[index]['upphns'][i]['period'] = period;

    }

    console.log("getGroupNumber look pro请求参数", this.rGroupParm[index]);

    // 获取圆环图上方值
    target = await this.tGApi.getTargets(this.tGroupParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rUPPHApi.getUpphn(this.rGroupParm[index]).toPromise();

    console.log("upph GROUP 圆环图target值", target['data'][0]['target']);
    console.log("upph GROUP 圆环图real值", real['data'][0]['upph']);

    // var tempTar: number = target['data'][0]['target'];
    // var tempPro: number = parseFloat(real['data'][0]['productivity']);

    var data: pieChartData[] = [];

    //设定要传给page的参数
    for (var i = 0; i < target['data'].length; i++) {
      var tempTar: number = target['data'][i]['target'];
      var tempPro: number = parseFloat(real['data'][i]['upph']);
      var isRed: boolean = false;
      if (tempTar > tempPro) {
        var isRed = true;
      }
      var title: string = this.tGroupParm[index]['targets'][i]['group'];
      // 用pieChartData封装
      var tempData = new pieChartData(title, tempTar.toString(), tempPro.toString(), isRed);
      data.push(tempData);
    }

    // return pieChartData.formatNumber(this.requestParm[index].title, tempTar, tempPro);

    return data;
  }




  /**
   * 获取子页面PCBA或者FA Entire圆环图的API数据 根据line和period的影响
   * @param index 0表示查找PCBA 1表示查找FA
   */
  async getEntireNumber(line: string[], period: string, index: number): Promise<{ title: string, top: string, bom: string, red: boolean }> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];

    // 更改 Entire圆环图 pro请求参数 (line和period)
    this.rEntireParm[index]['line'] = line;
    this.rEntireParm[index]['upphns'][0]['line'] = line;
    this.rEntireParm[index]['upphns'][0]['period'] = period;

    for (var i = 0; i < line.length; i++) {
      this.rEntireParm[index]['upphns'][i + 1] = { "period": period, "periodtype": "daily" };
    }

    console.log("getEntireNumber look pro请求参数", this.rEntireParm[index]);
    // 获取圆环图上方值
    target = await this.tUPPHApi.getTargets(this.tEntireParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rUPPHApi.getUpphn(this.rEntireParm[index]).toPromise();

    console.log("UPPH Entire 圆环图target值", target['data'][0]['target']);
    console.log("UPPH Entire 圆环图real值", real['data'][0]['upph']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['upph']);

    // return pieChartData.formatNumber(this.requestParm[index].title, tempTar, tempPro);
    var isRed: boolean = false;
    if (tempPro == tempTar && tempTar == 0 && tempPro == 0) {
      isRed = undefined;
    } else {
      isRed = (tempTar > tempPro) ? true : false;
    }


    //这里的title 要改！！！
    return { title: this.serviceTitle[index], top: tempTar.toString(), bom: tempPro.toString(), red: isRed };
  }









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
    target = await this.tUPPHApi.getTargets(this.requestParm[index]['targetParm']).toPromise();

    // 获取圆环图下方图
    real = await this.rUPPHApi.getUpphn(this.requestParm[index]['realParm']).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['upph']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['upph']);

    //return pieChartData.formatNumber(this.requestParm[index]['title'], tempTar, tempPro);
    var isRed = (tempTar > tempPro) ? true : false;

    return { title: this.requestParm[index].title, top: tempTar.toString(), bom: tempPro.toString(), red: isRed };
  }


}
