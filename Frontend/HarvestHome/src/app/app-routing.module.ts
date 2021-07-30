import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './Informationlayouts/default/default.component';
import { DashboardComponent } from './Informationmodules/dashboard/dashboard.component';
import { ProfitComponent } from './Informationmodules/profit/profit.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profit',
    component: ProfitComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }