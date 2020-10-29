import { DlbService } from './services/dlb/dlb.service';
import { IrService } from './services/ir/ir.service';
import { OrService } from './services/or/or.service';
import { UpphService } from './services/upph/upph.service';
import { OeeService } from './services/oee/oee.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';


import { RealTimePage } from './real-time.page';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { RealTimePageRoutingModule } from './real-time-routing.module';
import { PcbaService } from './services/pcba/pcba-service.service';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    RealTimePageRoutingModule,
    IonicModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    SharedModule,
  ],
  declarations: [
    RealTimePage,
  ],
  providers: [
    PcbaService,
    OeeService,
    UpphService,
    OrService,
    IrService,
    DlbService
  ],
})
export class RealTimePageModule { }
