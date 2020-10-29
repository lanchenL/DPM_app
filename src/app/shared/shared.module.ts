import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircularRingPage } from './components/circular-ring/circular-ring.page';
import { PieChart1Page } from './components/pie-chart1/pie-chart1.page';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { ActionComponent } from './components/action/action.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CircularRingPage,
    PieChart1Page,
    ActionComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    IonicModule
  ],
  exports: [
    CircularRingPage,
    PieChart1Page,
    ActionComponent
  ]
   
})
export class SharedModule { }
