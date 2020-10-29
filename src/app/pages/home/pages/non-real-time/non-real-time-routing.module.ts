import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonRealTimePage } from './non-real-time.page';

const routes: Routes = [
  {
    path: '',
    component: NonRealTimePage
  },
  {
    path: 'pie-data',
    loadChildren: () => import('./pages/pie-data/pie-data.module').then(m => m.PieDataPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonRealTimePageRoutingModule { }
