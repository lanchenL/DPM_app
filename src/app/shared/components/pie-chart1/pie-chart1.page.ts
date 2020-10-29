import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.page.html',
  styleUrls: ['./pie-chart1.page.scss'],
})
export class PieChart1Page implements OnInit {

  constructor() { }

  // 圆环图标题、上面数字和下面数字
  @Input() title: string;
  @Input() topNumber: string;
  @Input() bomNumber: string;
  @Input() titleSize: number;
  @Input() numSize: number;
  @Input() isRed: boolean;

  red: boolean;
  top: number;
  bom: number;
  topString: string;
  bomString: string;
  // 主要颜色
  colorTop: string;

  @Output() clickEmitter = new EventEmitter<string>();

  options: echarts.EChartOption = {};


  ngOnInit() {
    //查看传进来的值
    console.log("pie-chart:", this.title, this.isRed, Number(this.topNumber), Number(this.bomNumber));


    this.getPieChart();

  }


  clickPieChart(title: string) {
    // 发射信号至父组件
    this.clickEmitter.emit(title);
  }


  // 当父组件更新input值时，需要这里调用
  ngOnChanges(changes: SimpleChanges): void {
    this.getPieChart();
  }

  /**
   * 生成圆环图
   * 配置圆环图option
   */
  getPieChart() {


    //对传进来的数字进行格式化操作
    this.red = this.isRed;
    if (this.red == true) {
      this.top = parseFloat(this.topNumber);
      this.bom = parseFloat(this.bomNumber);
      this.colorTop = '#ff1c01';
    } else if(this.red == false){
      this.top = 100;
      this.bom = 0;
      this.colorTop = '#04B404';
    }
    // 显示灰色
    if(parseFloat(this.topNumber)== parseFloat(this.bomNumber) && parseFloat(this.bomNumber)==0){
      this.top = 100;
      this.bom = 0;
      this.colorTop = '#f2f2f2';

    }
    
    if (parseFloat(this.topNumber) < 1 || parseFloat(this.bomNumber) < 1) {
      this.topString = (parseFloat(this.topNumber) * 100).toString().replace(/(\.\d{2})\d+$/, '$1') + '%';
      this.bomString = (parseFloat(this.bomNumber) * 100).toString().replace(/(\.\d{2})\d+$/, '$1') + '%';
    } else {
      this.topString = this.topNumber;
      this.bomString = this.bomNumber;
    }






    let labelTop = {
      show: false,
      position: 'center',
      textStyle: {
      }
    }
    let labelMiddle = {
      show: true,
      position: 'center',
      textStyle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: this.numSize
      }
    };

    let labelMiddleLine = {
      show: true,
      position: 'center',
      textStyle: {
        color: '#7b7b7b',
        fontWeight: 'bold',
        fontSize: this.numSize
      }

    };
    let labelBottom = {
      show: false,
      position: 'center',

    };

    let radius = ['50%', '70%'];





    // 指定环状图表的配置项和数据
    this.options = {
      title: {
        itemGap: 7,
        textStyle: {
          fontSize: this.titleSize,
          color: '#000000',
          fontWeight: 'bold'
        },
        subtextStyle: {
          color: '#000000',
          fontWeight: 'bold'
        },
        text: this.title,
        left: 'center',
        top: "bottom"
      },
      tooltip: {         // Option config. Can be overwrited by series or data
        trigger: 'item',
        triggerOn: 'mousemove',
        show: true,   //default true

        // textStyle: {
        //     align: "left"
        // },
        // position: function (p) {
        //     // 位置回调
        //     // console.log && console.log(p);
        //     return [p[0] + 10, p[1] - 10];
        // },
        // formatter: this.formatter
        formatter: this.title + '<br/>Daily<br/>Line : ＊<br/>'

      },
      series: [
        {
          type: 'pie',
          center: ['50%', '50%'],
          // 需设置radius才有圆形出来
          radius: ['50%', '70%'],
          animation: false,
          silent: false,


          // 当显示在中间的字符重叠时，加个\n换行即可
          data: [
            { name: 'Top', value: this.top, itemStyle: { color: this.colorTop }, label: labelTop },
            { name: this.topString + '\n\n', value: 0, itemStyle: { color: '#04B404' }, label: labelMiddle },
            { name: '————', value: 0, itemStyle: { color: '#04B404' }, label: labelMiddleLine },
            { name: '\n\n' + this.bomString, value: 0, itemStyle: { color: '#04B404' }, label: labelMiddle },
            { name: 'Down', value: this.bom, itemStyle: { color: '#f2f2f2' }, label: labelBottom }
          ]
        }
      ]

    }
  }
}
