import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MachineLearningComponent} from './machine-learning.component';
import {MachineLearningRoutingModule} from './machine-learning-routing.module';
import {TopnavComponent} from '../components/topnav/topnav.component';
import {MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from '../components/component.module';

@NgModule({
  declarations: [MachineLearningComponent],
  imports: [
    CommonModule,
    MachineLearningRoutingModule,
    MatIconModule,
    MatInputModule,
    TranslateModule,
    MatMenuModule,
    MatToolbarModule,
    ComponentModule
  ]
})
export class MachineLearningModule { }
