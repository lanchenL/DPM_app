import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circular-ring',
  templateUrl: './circular-ring.page.html',
  styleUrls: ['./circular-ring.page.scss'],
})
export class CircularRingPage implements OnInit {
  color: any;
  color1: any;
  val1: number;
  val2: number;
  public Top: string;
  public Bottom: string;
  constructor() { }

  @Input()
  title: string;
  @Input()
  dataTop: string;
  @Input()
  dataBottom: string;
  // tslint:disable-next-line: no-output-native
  @Output()
  clickEmitter = new EventEmitter<string>();

  // public color: string;
  options: echarts.EChartOption = {};

  ngOnInit() {
    this.getPieChart();
  }
  /**
   * 圆环图点击事件
   * @param title 
   */
  clickCircularRing(title: string) {
    this.clickEmitter.emit(title);
  }

  getPieChart() {
    // 指定环状图表的配置项和数据
    if ( this.dataTop <= this.dataBottom ) {
      this.color = '#04B404';
      this.val1 = 100;
      this.val2 = 0;
      this.color1 = '#f2f2f2';
    }else if ( this.dataTop === '0' && this.dataBottom === '0' ) {
      this.color = '#f2f2f2';
      this.val1 = 100;
      this.val2 = 0;
    }else {
      this.color = '#ff0000';   // 红色
      this.val1 = parseFloat(this.dataBottom);
      this.val2 = parseFloat(this.dataTop) - parseFloat(this.dataBottom);
      this.color1 = '#f2f2f2';
    }

    // 转化为百分比
    if ( parseFloat(this.dataTop) < 1 || parseFloat(this.dataBottom) < 1) {
        this.Top = (parseFloat(this.dataTop) * 100 ).toString().replace(/(\.\d{2})\d+$/, '$1' ) + '%';
        this.Bottom = (parseFloat(this.dataBottom) * 100 ).toString().replace(/(\.\d{2})\d+$/, '$1' ) + '%';
    }else{
      this.Top = this.dataTop;
      this.Bottom = this.dataBottom;
    }

    const labelTop = {
      color: this.color
    };
    const label1 = {
      show: false,
      position: 'center',
      // formatter: '{b}',
      textStyle: {
      }
    };
    const labelMiddle = {
      color: '#04B404'
    };
    const label2 = {
      show: true,
      position: 'center',
      textStyle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 12,
       }
    };
    const labelMiddleLine = {
      color: '#04B404'
    };
    const label3 = {
      show: true,
      position: 'center',
      textStyle: {
        color: '#A9A9A9',
        fontWeight: 'bold',
        fontSize: 13,
      }
    };

  // 数据位置

    const labelBottom = {
      color: this.color1
    };
    // const label4 = {
    //   show: true,
    //   position: 'center',
    //   formatter: '{b}',
    //   textStyle: {
    //     color: '#000000',
    //     baseline: 'bottom',  // 垂直对齐方式
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     align: 'center'  // 水平对齐方式
    //   }
    // };

    this.options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        textStyle: {
          fontSize: 12
        },
        formatter: this.title + '<br/>Daily<br/>Line : ＊<br/>'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            normal: {
            }
          },
          data: [
            { name: 'dataTop', value: this.val1, itemStyle: labelTop, label: label1},
            { name: this.Top + '\n\n', value: 0, itemStyle: labelMiddle, label: label2},
            { name: '─────', value: 0, itemStyle: labelMiddleLine, label: label3 },
            { name: '\n\n' + this.Bottom , value: 0, itemStyle: labelMiddle, label: label2},
            { name: 'dataBottom', value: this.val2, itemStyle: labelBottom, label: label1 },
          ],
        }
      ],
      title: {
        text: this.title,
        // bottom: '1 %',
        top: '85%',
        left: 'center',
        textStyle: {
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      // color: [
      //   '#f3f2f3', '#ff1c01', '#ff1c01'
      // ],
    };
  }


}
