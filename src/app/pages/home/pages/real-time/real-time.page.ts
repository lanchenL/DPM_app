import { DlbService } from './services/dlb/dlb.service';
import { IrService } from './services/ir/ir.service';
import { OrService } from './services/or/or.service';
import { UpphService } from './services/upph/upph.service';
import { OeeService } from './services/oee/oee.service';
import { PcbaService } from './services/pcba/pcba-service.service';


import { Component, OnInit, NgModule, SimpleChanges, HostListener, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { pieChartData } from './classes/pieChartData';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.page.html',
  styleUrls: ['./real-time.page.scss'],
})
export class RealTimePage implements OnInit {

  // 跳转页面对象定义在这括号里
  constructor(public router: Router,

    public pcbaservice: PcbaService,
    public oeeservice: OeeService,
    public upphservice: UpphService,
    public orservice: OrService,
    public irservice: IrService,
    public dlbservice: DlbService) {
  }

  // 圆环图上的数据类型的一个数组
  //pieChartDataList: pieChartData[] = new Array(1);
  // 用这种方式定义，异步
  pieChartDataList = [];

  // 获取某个圆环图item索引
  index: number;

  // 传进来的圆环图的标题大小和数字大小
  titleSize: number;
  numSize: number;






  ngOnInit() {



    //console.log("test",this.testData);

    
    //PCBA ----1
    this.pcbaservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });
    // FA ----2
    this.pcbaservice.getNumber(1).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);


      this.pieChartDataList.push(apiPieChartData);
    });

    // OEE1 ----3
    this.oeeservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });

    // OEE2 ----4
    this.oeeservice.getNumber(1).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });

    // DIP UPPH ----5
    this.upphservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });
    // FA UPPH ----6
    this.upphservice.getNumber(1).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });

    // OR ----7
    this.orservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });
    // IR ----8
    this.irservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(r.title,
        r.top,
        r.bom, r.red);

      this.pieChartDataList.push(apiPieChartData);
    });

    // DLB ----9
    this.dlbservice.getNumber(0).then(r => {
      var apiPieChartData = new pieChartData(
        r.title,
        r.top,
        r.bom,
        r.red);

      this.pieChartDataList.push(apiPieChartData);
    });
    
    
    /*
    // 硬数据部分，避免DPM系统崩溃影响演示
    this.pieChartDataList.push(new pieChartData(this.pcbaservice.titlePCBA,'0','0.4619',false));
    this.pieChartDataList.push(new pieChartData(this.pcbaservice.titleFA,'0.95','0.6574',true));
    this.pieChartDataList.push(new pieChartData(this.oeeservice.titleOEE1,'0','0.8619',false));
    this.pieChartDataList.push(new pieChartData(this.oeeservice.titleOEE2,'0','0.7649',false));
    this.pieChartDataList.push(new pieChartData(this.upphservice.titleDIP,'1.34','1.49',false));
    this.pieChartDataList.push(new pieChartData(this.upphservice.titleFA,'2.16','2.66',false));
    this.pieChartDataList.push(new pieChartData(this.orservice.titleOR,'0.80','0.50',true));
    this.pieChartDataList.push(new pieChartData(this.irservice.titleIR,'1.1','10.1',false));
    this.pieChartDataList.push(new pieChartData(this.dlbservice.titleDLB,'0.002','1.2262',true));
    */
    



  }

  

  /**
   * 监听圆环图被点击的事件
   */
  onClickPieChart(title: string, index: number) {

    console.log('click title name111:' + title + '   index:' + index);


    // 若点击了IDL Ratio、Offline Ratio和DL Buffer Ratio圆环图的话，则不跳转 
    if (title != "IDL Ratio" && title != "Offline Ratio" && title != "DL Buffer Ratio") {
      // 跳转页面
      this.router.navigate(['/home/real-time/detail-real-time/'], {
        // 待传入的参数（给子页面的）
        queryParams: {

          mainTitle: this.pieChartDataList[index].title,
          mainTopNumber: this.pieChartDataList[index].topNumber,
          mainBomNumber: this.pieChartDataList[index].bomNumber,
          mainIsRed: this.pieChartDataList[index].isRed

        }
      });
    }else{
      console.log("不跳转");
    }



  }

  /**
  * 监听屏幕尺寸变化
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




