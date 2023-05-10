import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardauthService } from '../core/guards/guardauth.service';

import { DefaultComponent } from './dashboards/default/default.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/login',pathMatch: 'full'  },
  { path: 'calendar', component: CalendarComponent },

  { path: 'dashboard', component: DefaultComponent,canActivate:[GuardauthService] },

  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },

  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },

  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },

  { path: 'RH', loadChildren: () => import('./espaceRh/rh.module').then(m => m.RhModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
