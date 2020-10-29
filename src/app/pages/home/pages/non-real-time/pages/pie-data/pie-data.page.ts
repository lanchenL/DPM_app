import { LINE } from './../../../../../../services/sdk/models/LINE';
import { DPMPRODUCTIVITYDETAILApi } from './../../../../../../services/sdk/services/custom/DPMPRODUCTIVITYDETAIL';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DPMPRODUCTIVITYLINETARGETApi } from 'src/app/services/sdk';
import { DlbService } from '../../../real-time/services/dlb/dlb.service';
import { UpphService } from '../../../real-time/services/upph/upph.service';
import { OeeService } from '../../../real-time/services/oee/oee.service';
import { PcbaService } from '../../../real-time/services/pcba/pcba-service.service';
import { serviceInterface } from '../../../real-time/classes/serviceInterface';


@Component({
  selector: 'app-pie-data',
  templateUrl: './pie-data.page.html',
  styleUrls: ['./pie-data.page.scss'],
})
export class PieDataPage implements OnInit {
  public pieData = [];
  Line = [];
  name: string;
  // Entire 圆环数据
  mainTitle: string;
  mainDataTop: string;
  mainDataBottom: string;
  // title: string;
  // dataTop: string;
  // dataBottom: string;


  // 服务
  service: serviceInterface;
  // 服务下的哪个类别
  serviceIndex: number;
  // 获取到的日期数据
  dateStart: string = '';
  dateEnd: string = '';
  period: string = '20200928,20200928';





  constructor(
    public activatedRoute: ActivatedRoute,
    // private dpmproductivitylinetargetApi: DPMPRODUCTIVITYLINETARGETApi,
    // private dpmproductivitydetalilApi: DPMPRODUCTIVITYDETAILApi,
    public pcbaservice: PcbaService,
    public oeeservice: OeeService,
    public upphservice: UpphService,
    public dlbservice: DlbService
  ) {

  }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: Params) => {
      this.mainTitle = data.mainTitle;
      this.mainDataTop = data.mainDataTop;
      this.mainDataBottom = data.mainDataBottom;
    });

    var title: string = this.mainTitle;
    // 以传来的标题作为 service的 判断（9個service）
    switch (title) {
      case 'PCBA Productivity': {
        this.service = this.pcbaservice;
        this.serviceIndex = 0;
        // 初始化一開始的時間
        this.dateStart = '2020-09-28';
        this.dateEnd = '2020-09-28';
        this.period = '20200928,20200928';
        break;
      }
      case 'FA Productivity': {
        this.service = this.pcbaservice;
        this.serviceIndex = 1;
        this.dateStart = '2020-09-28';
        this.dateEnd = '2020-09-28';
        this.period = '20200928,20200928';
        break;
      }
      case 'OEE1': {
        this.service = this.oeeservice;
        this.serviceIndex = 0;
        // 参照DPM测试系统上的，刚点OEE1进到子页面，时间默认为2019-11-13
        this.dateStart = '2019-11-13';
        this.dateEnd = '2019-11-13';
        this.period = '20191113,20191113';
        break;
      }
      case 'OEE2': {
        this.service = this.oeeservice;
        this.serviceIndex = 1;
        this.dateStart = '2019-11-13';
        this.dateEnd = '2019-11-13';
        this.period = '20191113,20191113';
        break;
      }
      case 'DIP UPPH(約當)': {
        this.service = this.upphservice;
        this.serviceIndex = 0;
        this.dateStart = '2020-08-31';
        this.dateEnd = '2020-08-31';
        this.period = '20200831,20200831';
        break;
      }
      case 'FA UPPH (約當)': {
        this.service = this.upphservice;
        this.serviceIndex = 1;
        this.dateStart = '2020-08-31';
        this.dateEnd = '2020-08-31';
        this.period = '20200831,20200831';
        break;
      }

      default: {
        console.log("跳转至detail页面了，但没有匹配的服务~");
        break;
      }
    }
    // 产线子option值
    this.Line = this.service.startLine[this.serviceIndex];
    // 調用服務，獲取Group圓環信息，Entire圓環信息已由傳進來的參數來顯示了，所以這裡不調用Entire服務了
    this.service.getGroupNumber(this.period, this.serviceIndex).then(r => {

      console.log("pcba子页面Group", r);

      this.pieData = [];

      // 传进来是一个数组
      for (var item of r) {
        console.log("look item", item.title, item.topNumber, item.bomNumber, item.isRed);
        // 传入数组，以便ngfor显示圆环图
        this.pieData.push({title: item.title, dataTop: item.topNumber, dataBottom: item.bomNumber});
      }

    });
    



    // 子页面死数据
    // this.Line = ['D1', 'D2', 'D3', 'D4', 'D5'];
    // this.dateStart = '2020-09-28';
    // this.dateEnd = '2020-09-28';
    // this.pieData = [{ title: 'TB2-A', dataTop: 0, dataBottom: 0 },
    // { title: 'TB2-B', dataTop: 0.5, dataBottom: 0.5 },
    // { title: 'Entire', dataTop: 0.5, dataBottom: 0.5 },
    // { title: 'Entire', dataTop: 0.5, dataBottom: 0.5 },
    // { title: 'Entire', dataTop: 0.5, dataBottom: 0.5 }];

  }



  /**
   * 监听下拉框line值的改变
   * @param event
   */
  onLineValueChanged() {
    // 方便日期更改调用服务的时候，传line参数

    this.service.getEntireNumber(this.Line, this.period, this.serviceIndex).then(
      r => {
        this.mainDataTop = r.top;
        this.mainDataBottom = r.bom;


        console.log("line value change", this.mainDataTop, this.mainDataBottom);

      }
    );

      // this.pieData[0]['dataBottom'] = '0.66';

  }


  /**
   * 监听日期输入 两个日期输入框都指向这个值
   * @param event
   */
  onDateValueChanged(event: {}) {


    // 這兩個變量在html處已經雙向綁定了
    console.log("dateStart", this.dateStart);
    console.log("dateEnd", this.dateEnd);


    //// 方便产线更改调用服务的时候，传period参数
    this.period = this.getPeriod(this.dateStart, this.dateEnd);

    console.log("test period format:", this.period);

    console.log("日期调用服务前看看参数", this.Line, this.period);


    // 调用服务，传入period和line，獲取Entire圓環信息
    this.service.getEntireNumber(this.Line, this.period, this.serviceIndex).then(
      r => {
        this.mainDataTop = r.top;
        this.mainDataBottom = r.bom;
        this.mainTitle = r.title;


      }
    );
    // 調用服務，獲取group圓環信息
    this.service.getGroupNumber(this.period, this.serviceIndex).then(
      r => {
        console.log("pcba子页面Group", r);

        this.pieData = [];

        //传进来是一个数组
        for (var item of r) {
          console.log("look item", item.title, item.topNumber, item.bomNumber, item.isRed);

          this.pieData.push({title: item.title, dataTop: item.topNumber, dataBottom: item.bomNumber});
        }
      }
    );

      // this.pieData[0]['dataTop'] = '0.99';




  }


  /**
   * 根据日期input组件获取到的value值，将其转为符合请求参数格式的period值
   * @param dateStart
   * @param dateEnd
   */
  getPeriod(dateStart: string, dateEnd: string): string {

    var tempStart: string = '';
    var tempEnd: string = '';
    var tempPeriod: string = '';

    // 当二者时间不为undefined的时候
    if (this.dateStart != undefined && this.dateEnd != undefined) {

      // 变换一下两个时间的格式
      for (var i = 0; i < this.dateStart.length; i++) {
        if (this.dateStart.charAt(i) != '-') {
          tempStart += this.dateStart.charAt(i);
          tempEnd += this.dateEnd.charAt(i);
        }
      }

      tempPeriod = tempStart + ',' + tempEnd;
      return tempPeriod;
    }
  }







}
