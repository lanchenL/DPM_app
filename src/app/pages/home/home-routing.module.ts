import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'actions',
    loadChildren: () => import('../home/pages/actions/actions.module').then(m => m.ActionsPageModule)
  },
  {
    path: 'meeting',
    loadChildren: () => import('../home/pages/meeting/meeting.module').then(m => m.MeetingPageModule)
  },
  {
    path: 'non-real-time',
    loadChildren: () => import('../home/pages/non-real-time/non-real-time.module').then(m => m.NonRealTimePageModule)
  },
  {
    path: 'real-time',
    loadChildren: () => import('../home/pages/real-time/real-time.module').then(m => m.RealTimePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../home/pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
