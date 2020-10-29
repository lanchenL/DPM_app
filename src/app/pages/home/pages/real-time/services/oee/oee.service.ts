
import { serviceInterface } from './../../classes/serviceInterface';
import { Injectable } from '@angular/core';
import { DPMOEEApi, DPMOEELINETARGETApi,DPMOEEGROUPTARGETApi } from 'src/app/services/sdk';
import { pieChartData } from '../../classes/pieChartData';

@Injectable({
  providedIn: 'root'
})
export class OeeService implements serviceInterface {

  constructor(
    public tOEEApi: DPMOEELINETARGETApi,
    public rOEEApi: DPMOEEApi,
    public tGApi: DPMOEEGROUPTARGETApi ) { }

  targetOEE1Parm = {
    'targets': [{
      'kpiid': 'KPI0032',
      'line': '*',
      "type": "PCB",
      'plant': 'F136',
      'oeetype': 'OEE1',
      'yearweek': '202039'
    }]
  };
  realOEE1Parm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype": "PCB",
    'line': ['S1B', 'S2B', 'S3B'],
    "oees": [{
      "period": "*",
      "periodtype": "daily",
      "line": ["S1B", "S2B", "S3B"]
    }]
  };
  titleOEE1 = 'OEE1';

  targetOEE2Parm = {
    'targets': [{
      'kpiid': 'KPI0009',
      'line': '*',
      'oeetype': 'OEE2',
      'plant': 'F136',
      'type': 'PCB',
      'yearweek': '202039'
    }]
  };

  realOEE2Parm = {
    "site": "WZS",
    "plant": "F136",
    "customer": "*",
    "mfgtype": "PCB",
    'line': ['S1B', 'S3B', 'S5B', 'S7B', 'S9B'],
    "oees": [{
      "period": "*",
      "periodtype": "daily",
      "line": ['S1B', 'S3B', 'S5B', 'S7B', 'S9B']
    }]
  };
  titleOEE2 = 'OEE2';


  requestParm = [

    {
      title: this.titleOEE1,
      targetParm: this.targetOEE1Parm,
      realParm: this.realOEE1Parm
    },
    {
      title: this.titleOEE2,
      targetParm: this.targetOEE2Parm,
      realParm: this.realOEE2Parm
    }

  ];


  //服务 所管理的两个圆环的名称
  serviceTitle = [this.titleOEE1, this.titleOEE2];


  //子页面的线别option 数组[0]---OEE1 数组[1]---OEE2
  line = [
    // PCBA的线别
    [{ data: 'S1B' }, { data: "S2B" },
    { data: "S3B" }],
    // FA的线别
    [{ data: 'S1B' }, { data: "S3B" },
    { data: "S5B" },{ data: 'S7B' }, { data: "S9B" },
    
    ]
  ];



  //子页面传入的line参数（一开始默认）
  startLine = [
    ["S1B", "S2B", "S3B"],
    ["S1B", "S3B", "S5B", "S7B", "S9B"]
  ];

  // 子页面的main chart 请求参数  （Target日期未更改）
  tEntireParm = [
    {
      "targets": [
        { "kpiid": "KPI0032", "yearweek": "201946", "type": "PCB", "plant": "F136", "line": "*", "oeetype": "OEE1" },
        { "kpiid": "KPI0032", "yearweek": "201946", "type": "PCB", "plant": "F136", "line": "S1B", "oeetype": "OEE1" },
        { "kpiid": "KPI0032", "yearweek": "201946", "type": "PCB", "plant": "F136", "line": "S2B", "oeetype": "OEE1" },
        { "kpiid": "KPI0032", "yearweek": "201946", "type": "PCB", "plant": "F136", "line": "S3B", "oeetype": "OEE1" }]
    },
    {
      "targets": [
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "*", "oeetype": "OEE2" },
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S1B", "oeetype": "OEE2" },
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S3B", "oeetype": "OEE2" },
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S5B", "oeetype": "OEE2" },
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S7B", "oeetype": "OEE2" },
        { "kpiid": "KPI0009", "yearweek": "202040", "type": "PCB", "plant": "F136", "line": "S9B", "oeetype": "OEE2" }]
    }
  ];


  //选择的日期
  sPeriod: string;

  // 这下面的日期之后需要更改！！！ 因为后面会动态添加line，所以这里只默认设置只选中一条line的情况
  rEntireParm = [
    {
      "kpiid": "KPI0032", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["S2B"],
      "oees": [
        { "period": "20191113,20191113", "periodtype": "daily", "line": ["S2B"] },
        { "period": "20191113,20191113", "periodtype": "daily" },
      ]
    },
    {
      "kpiid": "KPI0009", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["S3B"],
      "oees": [
        { "period": "20191113,20191113", "periodtype": "daily", "line": ["S3B"] },
        { "period": "20191113,20191113", "periodtype": "daily" }]
    }

  ];

  // 子页面的sub chart 请求参数
  tGroupParm = [
    {
      "targets": [
        { "kpiid": "KPI0032", "yearweek": "201946", "plant": "F136", "oeetype": "OEE1", "group": "TB2-A" },
        { "kpiid": "KPI0032", "yearweek": "201946", "plant": "F136", "oeetype": "OEE1", "group": "TB2-B" }]
    },
    {
      "targets": [
        { "kpiid": "KPI0009", "yearweek": "201946", "plant": "F136", "oeetype": "OEE2", "group": "TB2-A" },
        { "kpiid": "KPI0009", "yearweek": "201946", "plant": "F136", "oeetype": "OEE2", "group": "TB2-B" }]
    }
  ];

  // group 的real值 
  rGroupParm = [
    {
      "kpiid": "KPI0032", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["S2B", "S3B", "S1B"],
      "oees": [
        { "period": "20191113,20191113", "periodtype": "daily", "group": "TB2-A", "line": ["S15B", "S16B", "S17B", "S18B", "S19", "S22", "S26B"] },
        { "period": "20191113,20191113", "periodtype": "daily", "group": "TB2-B", "line": ["S1B", "S2B", "S3B", "S4B", "S5B", "S6B", "S7B", "S8B", "S9B", "S10B", "S11", "S12"] }]
    },
    {
      "kpiid": "KPI0009", "site": "WZS", "plant": "F136", "customer": "*", "mfgtype": "PCB", "line": ["S3B", "S5B", "S7B", "S9B", "S1B"],
      "oees": [
        { "period": "20191113,20191113", "periodtype": "daily", "group": "TB2-A", "line": ["S15B", "S16B", "S17B", "S18B", "S19", "S22", "S26B"] },
        { "period": "20191113,20191113", "periodtype": "daily", "group": "TB2-B", "line": ["S1B", "S2B", "S3B", "S4B", "S5B", "S6B", "S7B", "S8B", "S9B", "S10B", "S11", "S12"] }]
    }

  ];






  /**
  * 获取子页面的Group圆的数组值
  * @param index 0表示查找PCBA 1表示查找FA
  */
  async getGroupNumber(period: string, index: number): Promise<pieChartData[]> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];


    // 修改传入的pro请求参数 rGroupParm
    for (var i = 0; i < this.rGroupParm[index]['oees'].length; i++) {
      console.log("getGroupNumber look length", this.rGroupParm[index]['oees'].length);
      this.rGroupParm[index]['oees'][i]['period'] = period;

    }

    console.log("getGroupNumber look pro请求参数", this.rGroupParm[index]);

    // 获取圆环图上方值
    target = await this.tGApi.getTargets(this.tGroupParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rOEEApi.getOEE(this.rGroupParm[index]).toPromise();

    console.log("OEE  GROUP 圆环图target值", target['data'][0]['target']);
    console.log("OEE  GROUP 圆环图real值", real['data'][0]['oee1']);

    // var tempTar: number = target['data'][0]['target'];
    // var tempPro: number = parseFloat(real['data'][0]['productivity']);

    var data: pieChartData[] = [];

    //设定要传给page的参数
    for (var i = 0; i < target['data'].length; i++) {
      var tempTar: number = target['data'][i]['target'];
      var tempPro: number = parseFloat(real['data'][i]['oee1']);
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
    this.rEntireParm[index]['oees'][0]['line'] = line;
    this.rEntireParm[index]['oees'][0]['period'] = period;

    for (var i = 0; i < line.length; i++) {
      this.rEntireParm[index]['oees'][i + 1] = { "period": period, "periodtype": "daily" };
    }

    console.log("getEntireNumber look pro请求参数", this.rEntireParm[index]);
    // 获取圆环图上方值
    target = await this.tOEEApi.getTargets(this.tEntireParm[index]).toPromise();

    // 获取圆环图下方图
    real = await this.rOEEApi.getOEE(this.rEntireParm[index]).toPromise();

    console.log("OEE Entire 圆环图target值", target['data'][0]['target']);
    console.log("OEE Entire 圆环图real值", real['data'][0]['oee1']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['oee1']);

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
   * 获取首页PCBA或者FA圆环图的API数据
   * @param index 0表示查找PCBA 1表示查找FA
   */
  async getNumber(index: number): Promise<{ title: string, top: string, bom: string, red: boolean }> {

    //接收target值
    var target = [];
    //接收real值
    var real = [];

    // 获取圆环图上方值
    target = await this.tOEEApi.getTargets(this.requestParm[index]['targetParm']).toPromise();

    // 获取圆环图下方图
    real = await this.rOEEApi.getOEE(this.requestParm[index]['realParm']).toPromise();

    console.log("PCBA 圆环图target值", target['data'][0]['target']);
    console.log("PCBA 圆环图real值", real['data'][0]['oee1']);

    var tempTar: number = target['data'][0]['target'];
    var tempPro: number = parseFloat(real['data'][0]['oee1']);

    //return pieChartData.formatNumber(this.requestParm[index]['title'], tempTar, tempPro);
    var isRed = (tempTar > tempPro) ? true : false;

    return { title: this.requestParm[index].title, top: tempTar.toString(), bom: tempPro.toString(), red: isRed };
  }




}
