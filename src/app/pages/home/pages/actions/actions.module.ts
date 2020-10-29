import { SharedModule } from './../../../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ActionsPage } from './actions.page';
import { ActionsPageRoutingModule } from './actions-routing.module';
import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsPageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule,
  ],
  declarations: [
    ActionsPage,
  ],
})
export class ActionsPageModule { }
