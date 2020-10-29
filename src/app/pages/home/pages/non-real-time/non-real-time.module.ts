// import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonRealTimePageRoutingModule } from './non-real-time-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NonRealTimePage } from './non-real-time.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonRealTimePageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    SharedModule,
  ],
  declarations: [NonRealTimePage,],
  exports: []
})
export class NonRealTimePageModule { }
