import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsPage } from './actions.page';


const routes: Routes = [
  {
    path: '',
    component: ActionsPage
  },
 /*  {
    path: 'actionspart',
    loadChildren: () => import('./pages/actionspart/actionspart/actionspart.module').then( m => m.ActionspartPageModule)
  }, */
  {
    path: 'actionspart',
    loadChildren: () => import('./pages/actionspart/actionspart.module').then( m => m.ActionspartPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsPageRoutingModule {}
