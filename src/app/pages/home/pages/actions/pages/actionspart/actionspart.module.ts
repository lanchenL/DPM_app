import { SharedModule } from './../../../../../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionspartPageRoutingModule } from './actionspart-routing.module';

import { ActionspartPage } from './actionspart.page';

import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionspartPageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule,
  ],
  declarations: [
    ActionspartPage,
  ]
})
export class ActionspartPageModule { }
