import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegressionDialogComponent} from './regression-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RegressionDialogComponent,
  ],
  declarations: [RegressionDialogComponent],
  entryComponents: [
    RegressionDialogComponent
  ]
})
export class RegressionDialogModule {
}
