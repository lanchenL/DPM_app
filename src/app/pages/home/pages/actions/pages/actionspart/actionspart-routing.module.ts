import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionspartPage } from './actionspart.page';

const routes: Routes = [
  {
    path: '',
    component: ActionspartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionspartPageRoutingModule {}
