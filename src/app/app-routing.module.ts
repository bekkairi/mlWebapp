import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule'
    // canActivate: [AuthGuard]
  },
  {
    path: 'ml',
    loadChildren: './machine-learning/machine-learning-module.module#MachineLearningModule'
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'create-account',
    loadChildren: './create-account/create-account.module#CreateAccountModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
