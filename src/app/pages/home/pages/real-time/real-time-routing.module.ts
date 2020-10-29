import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealTimePage } from './real-time.page';

const routes: Routes = [
  {
    path: '',
    component: RealTimePage
  },
  {
    path: 'detail-real-time',
    loadChildren: () => import('./pages/detail-real-time/detail-real-time.module').then( m => m.DetailRealTimePageModule)
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealTimePageRoutingModule {}
