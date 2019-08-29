import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {LinearRegressionRoutingModule} from './linear-regression-routing.module';
import {LinearRegressionComponent} from './linear-regression.component';
import {LinearRegressionDetailComponent} from './linear-regression-detail.component';

@NgModule({
  declarations: [LinearRegressionComponent, LinearRegressionDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LinearRegressionRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class LinearRegressionModuleModule { }
