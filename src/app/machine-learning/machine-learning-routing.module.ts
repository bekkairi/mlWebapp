import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineLearningComponent} from './machine-learning.component';



const routes: Routes = [
  {
    path: '',
    component: MachineLearningComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ml-dashboard'
      },
      {
        path: 'ml-dashboard',
        loadChildren: './ml-dashboard/ml-dashboard.module#MlDashboardModule'
      }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineLearningRoutingModule {
}
