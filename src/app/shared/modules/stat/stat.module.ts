import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatComponent} from './stat.component';
import {MatCardModule, MatGridListModule, MatIconModule} from '@angular/material';
import {RegressionDialogModule} from '../../../components/dialog/regression-dialog/regression-dialog.module';

@NgModule({
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule, RegressionDialogModule],
  declarations: [StatComponent],
  exports: [StatComponent]
})
export class StatModule {
}
