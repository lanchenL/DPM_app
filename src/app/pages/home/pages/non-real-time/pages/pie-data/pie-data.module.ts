import { SharedModule } from './../../../../../../shared/shared.module';
import { PieDataPageRoutingModule } from './pie-data-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { PieDataPage } from './pie-data.page';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NonRealTimePageModule } from '../../non-real-time.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PieDataPageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule,
  ],
  declarations: [
    PieDataPage,
  ]
})
export class PieDataPageModule { }
