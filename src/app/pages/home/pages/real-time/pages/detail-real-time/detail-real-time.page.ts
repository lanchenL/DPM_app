import { serviceInterface } from './../../classes/serviceInterface';
import { PcbaService } from './../../services/pcba/pcba-service.service';
import { DPMPRODUCTIVITYGROUPTARGETApi } from './../../../../../../services/sdk/services/custom/DPMPRODUCTIVITYGROUPTARGET';
import { Component, HostListener, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { pieChartData } from '../../classes/pieChartData';
import { OeeService } from '../../services/oee/oee.service';
import { UpphService } from '../../services/upph/upph.service';
import { OrService } from '../../services/or/or.service';
import { IrService } from '../../services/ir/ir.service';
import { DlbService } from '../../services/dlb/dlb.service';


@Component({
  selector: 'app-detail-real-time',
  templateUrl: './detail-real-time.page.html',
  styleUrls: ['./detail-real-time.page.scss'],
})
export class DetailRealTimePage implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public pcbaservice: PcbaService,
    public oeeservice: OeeService,
    public upphservice: UpphService,
    public dlbservice: DlbService
  ) {

  }

  // 传进来的圆环图的标题大小和数字大小
  titleSize: number;
  numSize: number;


  // Main Chart的 信息 （Entire圆环图）
  mainChartData: pieChartData = { title: '', topNumber: '', bomNumber: '', isRed: true };

  //选择的产线(传入的参数)
  sline: string[];
  //获取到的日期数据
  dateStart: string = '';
  dateEnd: string = '';
  period: string = '20200925,20200925';

  // 服务
  service: serviceInterface;
  // 服务下的哪个类别
  serviceIndex: number;

  //下拉框的子item
  lineDataList = [];

  //Group 子圆环图的数据列表 
  subChartDataList = [];



  ngOnInit() {

    // 接收路由传过来的对象   
    this.activatedRoute.queryParams.subscribe((data: Params) => {
      //Entire 显示的参数
      this.mainChartData.title = data['mainTitle'];
      this.mainChartData.topNumber = data['mainTopNumber'];
      this.mainChartData.bomNumber = data['mainBomNumber'];
      // 避免传过来boolean变成字符串
      if (data['mainIsRed'] == 'true') {
        this.mainChartData.isRed = true;
      } else {
        this.mainChartData.isRed = false;
      }

    });

    
    var title: string = this.mainChartData.title;

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


    // line下拉框子项赋值
    this.lineDataList = this.service.line[this.serviceIndex];
    //一开始默认 line全选
    this.sline = this.service.startLine[this.serviceIndex];



    //調用服務，獲取Group圓環信息，Entire圓環信息已由傳進來的參數來顯示了，所以這裡不調用Entire服務了
    this.service.getGroupNumber(this.period, this.serviceIndex).then(r => {

      console.log("pcba子页面Group", r);

      this.subChartDataList = [];

      //传进来是一个数组
      for (var item of r) {
        console.log("look item", item.title, item.topNumber, item.bomNumber, item.isRed);
        // 传入数组，以便ngfor显示圆环图
        this.subChartDataList.push(new pieChartData(item.title, item.topNumber, item.bomNumber, item.isRed));
      }

    });

    
    
    /*
    // 硬数据部分，避免DPM系统崩溃影响演示
    this.lineDataList = [{ data: 'S1B' }, { data: "S2B" },
    { data: "S3B" }, { data: "S4B" }, { data: "S5B" },
    { data: "D1" }, { data: "D2" }, { data: "D3" },
    { data: "D4" }, { data: "D5" }, { data: "D6" }, { data: "D7" }];
    this.sline = ["D1", "D2", "D7", "S1B", "S2B", "D3", "D4", "D5", "D6", "S3B", "S4B", "S5B"];
    this.dateStart = "2020-09-28";
    this.dateEnd = "2020-09-28";
    this.subChartDataList.push(new pieChartData('TB2-A', '0', '0', false));
    this.subChartDataList.push(new pieChartData('TB2-B', '0', '1.2596', false));

    */

  }


  /**
   * 监听下拉框line值的改变
   * @param event 
   */
  onLineValueChanged() {
    //方便日期更改调用服务的时候，传line参数
    
    this.service.getEntireNumber(this.sline, this.period, this.serviceIndex).then(
      r => {
        this.mainChartData.topNumber = r.top;
        this.mainChartData.bomNumber = r.bom;
        this.mainChartData.isRed = r.red;

        console.log("value change", this.mainChartData.topNumber, this.mainChartData.bomNumber);

      }
    );
    
    // 硬数据
    //this.subChartDataList[1]['topNumber'] = '1';



  }

  /**
   * 监听日期输入 两个日期输入框都指向这个值
   * @param event 
   */
  onDateValueChanged(event: {}) {


    // 這兩個變量在html處已經雙向綁定了
    console.log("dateStart", this.dateStart);
    console.log("dateEnd", this.dateEnd);


    ////方便产线更改调用服务的时候，传period参数
    this.period = this.getPeriod(this.dateStart, this.dateEnd);

    console.log("test period format:", this.period);

    console.log("日期调用服务前看看参数", this.sline, this.period);

    
    //调用服务，传入period和line，獲取Entire圓環信息
    this.service.getEntireNumber(this.sline, this.period, this.serviceIndex).then(
      r => {
        this.mainChartData.topNumber = r.top;
        this.mainChartData.bomNumber = r.bom;
        this.mainChartData.isRed = r.red;

      }
    );
    //調用服務，獲取group圓環信息
    this.service.getGroupNumber(this.period, this.serviceIndex).then(
      r => {
        console.log("pcba子页面Group", r);

        this.subChartDataList = [];

        //传进来是一个数组
        for (var item of r) {
          console.log("look item", item.title, item.topNumber, item.bomNumber, item.isRed);

          this.subChartDataList.push(new pieChartData(item.title, item.topNumber, item.bomNumber, item.isRed));
        }
      }
    );
    

    /* 硬数据

    this.subChartDataList[0]['topNumber'] = '0.95';
    this.subChartDataList[0]['bomNumber'] = '0.96';

    */



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

      //变换一下两个时间的格式
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


  /**
   * 監聽頁面尺寸變化，並對字體實時調整
   */
  @HostListener('window:resize', ['$event'])
  private resize() {

    console.log('width:' + screen.width + '\nheight:' + screen.height);
    const width: number = screen.width;

    if (width > 0 && width < 330) {
      this.titleSize = 8;
      this.numSize = 10;
    }
    else if (width < 340) {
      this.titleSize = 12;
      this.numSize = 12;
    } else if (width < 360) {
      this.titleSize = 14;
      this.numSize = 14;
    }
    else if (width < 380) {
      this.titleSize = 15;
      this.numSize = 15;
    }
    else if (width < 400) {
      this.titleSize = 15;
      this.numSize = 15;
    }
    else if (width < 420) {
      this.titleSize = 16;
      this.numSize = 16;
    }

  }




}
