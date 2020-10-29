import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRealTimePage } from './detail-real-time.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRealTimePage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRealTimePageRoutingModule {}
