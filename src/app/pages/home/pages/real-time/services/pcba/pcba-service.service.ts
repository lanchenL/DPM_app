import { DPMPRODUCTIVITYGROUPTARGETApi } from './../../../../../../services/sdk/services/custom/DPMPRODUCTIVITYGROUPTARGET';

import { DPMOEEGROUPTARGETApi } from './../../../../../../../sdk/services/custom/DPMOEEGROUPTARGET';

import { Injectable } from '@angular/core';
import { DPMPRODUCTIVITYDETAILApi, DPMPRODUCTIVITYLINETARGETApi, } from 'src/app/services/sdk/services';
import { pieChartData } from '../../classes/pieChartData';
import { serviceInterface } from '../../classes/serviceInterface';


@Injectable({
  // 告诉 Angular 在应用的根上提供此服务（用根注入器将你的服务注册成为提供者）
  providedIn: 'root'
})
export class PcbaService implements serviceInterface{

  constructor(
    public tPCBAApi: DPMPRODUCTIVITYLINETARGETApi,
    public rPCBAApi: DPMPRODUCTIVITYDETAILApi,
    public tGApi: DPMPRODUCTIVITYGROUPTARGETApi,
  ) { }


  targetPCBAParm = {
    'targets': [{
      'kpiid': 'KPI0001',
      'line': '*',
      'type': 'PCB',
      'plant': 'F136',
      'yearweek': '202039'
    }]
  };
  realPCBAParm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype":
      "PCB", "prds": [{
        "period": "*",
        "periodtype": "daily", "line": ["S1B", "S2B", "S4B", "D1", "D2", "D3", "D4", "D5"]
      }]
  };
  titlePCBA = 'PCBA Productivity';

  targetFAParm = {
    'targets': [{
      'kpiid': 'KPI0002',
      'line': '*',
      'type': 'FA',
      'plant': 'F136',
      'yearweek': '202039'
    }]
  };

  realFAParm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype": "FA",
    "prds": [{
      "period": "*",
      "periodtype": "daily",
      "line": ["F1", "F2", "F3", "F4", "F7", "F9"]
    }]
  };
  titleFA = 'FA Productivity';




  requestParm = [

    {
      title: this.titlePCBA,
      targetParm: this.targetPCBAParm,
      realParm: this.realPCBAParm
    },
    {
      title: this.titleFA,
      targetParm: this.targetFAParm,
      realParm: this.realFAParm
    }

  ];



  //服务 所管理的两个圆环的名称
  serviceTitle = [this.titlePCBA,this.titleFA];
  

  //子页面的线别option 数组[0]---PCBA 数组[1]---FA
  line = [
    // PCBA的线别
    [{ data: 'S1B' }, { data: "S2B" },
    { data: "S3B" }, { data: "S4B" }, { data: "S5B" },
    { data: "D1" }, { data: "D2" }, { data: "D3" },
    { data: "D4" }, { data: "D5" }, { data: "D6" }, { data: "D7" }],
    // FA的线别
    [{ data: "F1" },
    { data: "F2" },
    { data: "F3" },
    { data: "F4" },
    { data: "F7" },
    { data: "F9" }
    ]
  ];

  //子页面传入的line参数（一开始默认）
  startLine = [
    ["D1", "D2", "D7", "S1B", "S2B", "D3", "D4", "D5", "D6", "S3B", "S4B", "S5B"],
    ["F1", "F2", "F3", "F4", "F7", "F9"]
  ];

  // 子页面的main chart 请求参数  （Target日期未更改）
  tEntireParm = [{
    "targets":
      [{ "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "*" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D1" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D2" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D3" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D4" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D5" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D6" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "D7" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S1B" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S2B" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S3B" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S4B" },
      { "kpiid": "KPI0001", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S5B" }]
  },
  {
    "targets": [{ "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "*" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F1" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F2" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F3" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F4" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F7" },
    { "kpiid": "KPI0002", "yearweek": "202040", "type": "FA", "plant": "F136", "line": "F9" }]

  }
  ];


  //选择的日期
  sPeriod: string;

  // 这下面的日期之后需要更改！！！ 因为后面会动态添加line，所以这里只默认设置只选中一条line的情况
  rEntireParm = [
    {
      "kpiid": "KPI0001", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["D1"],
      "prds": [{ "period": "20200920,20200920", "periodtype": "daily", "line": ["D1"] },
      { "period": "20200920,20200920", "periodtype": "daily" },
      ]

    },
    {
      "kpiid": "KPI0002", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "FA", "line": ["F1"],
      "prds": [{ "period": "*", "periodtype": "daily", "line": ["F1"] },
      { "period": "*", "periodtype": "daily", "line": "F1" }
      ]
    }

  ];

  // 子页面的sub chart 请求参数
  tGroupParm = [
    {
      "targets": [
        {
          "kpiid": "KPI0001", "yearweek": "202039", "plant": "F136", "type": "PCB", "group": "TB2-A"
        },
        { "kpiid": "KPI0001", "yearweek": "202039", "plant": "F136", "type": "PCB", "group": "TB2-B" }]
    },
    {
      "targets": [
        { "kpiid": "KPI0002", "yearweek": "202039", "plant": "F136", "type": "FA", "group": "TB2-A" },
        { "kpiid": "KPI0002", "yearweek": "202039", "plant": "F136", "type": "FA", "group": "TB2-B" }]
    }
  ];

  // group 的real值 
  rGroupParm = [{
    "kpiid": "KPI0001", "site": "WZS", "plant": "F136", "customer": "*",
    "mfgtype": "PCB", "line": ["D7", "S3B", "S4B", "S5B", "D1", "D3", "D6", "S1B"],
    "prds": [{
      "period": "*", "periodtype": "daily", "group": "TB2-A",
      "line": ["D1", "D2", "D3", "D4", "D5", "D6", "D7"]
    },
    { "period": "*", "periodtype": "daily", "group": "TB2-B", "line": ["D1", "D6", "D7", "D8", "D9", "S1B", "S2B", "S3B", "S4B", "S5B"] }]
  },
  {
    "kpiid": "KPI0002", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "FA", "line": ["F1", "F2", "F3", "F4", "F7", "F9"],
    "prds": [{ "period": "20200925,20200925", "periodtype": "daily", "group": "TB2-A", "line": ["F1", "F2", "F3"] },
    { "period": "20200925,20200925", "periodtype": "daily", "group": "TB2-B", "line": ["F1", "F2", "F3", "F4", "F7"] }]
  }

  ];



  /**
   * 获取首页PCBA或者FA圆环图的API数据
   * @param index 0表示查找PCBA 1表示查找FA
   */
  async getNumber(index: number): Promise<{ title: string, top: string, bom: string, red: boolean }> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];

    // 获取圆环图上方值
    target = await this.tPCBAApi.getTargets(this.requestParm[index]['targetParm']).toPromise();

    // 获取圆环图下方图
    real = await this.rPCBAApi.getProductivity(this.requestParm[index]['realParm']).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['productivity']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['productivity']);

    //return pieChartData.formatNumber(this.requestParm[index].title, tempTar, tempPro);

    var isRed = (tempTar > tempPro) ? true : false;

    return { title: this.requestParm[index].title, top: tempTar.toString(), bom: tempPro.toString(), red: isRed };
  }






  /**
   * 获取子页面的Group圆的数组值
   * @param index 0表示查找PCBA 1表示查找FA
   */
  async getGroupNumber(period: string,index:number): Promise<pieChartData[]> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];


    // 修改传入的pro请求参数 rGroupParm
    for (var i = 0; i < this.rGroupParm[index]['prds'].length; i++) {
      console.log("getGroupNumber look length", this.rGroupParm[index]['prds'].length);
      this.rGroupParm[index]['prds'][i]['period'] = period;

    }

    console.log("getGroupNumber look pro请求参数", this.rGroupParm[index]);

    // 获取圆环图上方值
    target = await this.tGApi.getTargets(this.tGroupParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rPCBAApi.getProductivity(this.rGroupParm[index]).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['productivity']);

    // var tempTar: number = target['data'][0]['target'];
    // var tempPro: number = parseFloat(real['data'][0]['productivity']);

    var data: pieChartData[] = [];

    //设定要传给page的参数
    for (var i = 0; i < target['data'].length; i++) {
      var tempTar: number = target['data'][i]['target'];
      var tempPro: number = parseFloat(real['data'][i]['productivity']);
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
  async getEntireNumber(line: string[], period: string,index:number): Promise<{ title: string, top: string, bom: string, red: boolean }> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];

    // 更改 Entire圆环图 pro请求参数 (line和period)
    this.rEntireParm[index]['line'] = line;
    this.rEntireParm[index]['prds'][0]['line'] = line;
    this.rEntireParm[index]['prds'][0]['period'] = period;

    for (var i = 0; i < line.length; i++) {
      this.rEntireParm[index]['prds'][i + 1] = { "period": period, "periodtype": "daily" };
    }

    console.log("getEntireNumber look pro请求参数", this.rEntireParm[index]);
    // 获取圆环图上方值
    target = await this.tPCBAApi.getTargets(this.tEntireParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rPCBAApi.getProductivity(this.rEntireParm[index]).toPromise();

    console.log("PCBA Entire 圆环图target值", target['data'][0]['target']);
    console.log("PCBA Entire 圆环图real值", real['data'][0]['productivity']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['productivity']);

    //return pieChartData.formatNumber(this.requestParm[index].title, tempTar, tempPro);
    var isRed: boolean = false;
    if (tempPro == tempTar && tempTar == 0 && tempPro == 0) {
      isRed = undefined;
    } else {
      isRed = (tempTar > tempPro) ? true : false;
    }

    


    //这里的title 要改！！！
    return { title: this.serviceTitle[index], top: tempTar.toString(), bom: tempPro.toString(), red: isRed };
  }






}
