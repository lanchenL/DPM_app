import { SharedModule } from './../../../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRealTimePageRoutingModule } from './detail-real-time-routing.module';

import { DetailRealTimePage } from './detail-real-time.page';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRealTimePageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    SharedModule,
  ],
  declarations: [DetailRealTimePage]
})
export class DetailRealTimePageModule {}
