import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MlDashboardRoutingModule } from './ml-dashboard-routing.module';
import {MlDashboardComponent} from './ml-dashboard.component';
import {StatModule} from '../../shared/modules/stat/stat.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [MlDashboardComponent],
  imports: [
    CommonModule,
    MlDashboardRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class MlDashboardModule { }
