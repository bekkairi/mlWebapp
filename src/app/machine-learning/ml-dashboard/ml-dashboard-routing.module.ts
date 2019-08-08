import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MlDashboardComponent} from './ml-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MlDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MlDashboardRoutingModule { }
