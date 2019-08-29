import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinearRegressionComponent} from './linear-regression.component';
import {LinearRegressionDetailComponent} from './linear-regression-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LinearRegressionComponent
  }, {
    path: ':id',
    component: LinearRegressionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinearRegressionRoutingModule { }
