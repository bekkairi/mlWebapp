import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatBottomSheetModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegressionDialogComponent} from './regression-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {ErrorBottomSheetComponent} from './error-bottom-sheet-component';




@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    FormsModule,
    MatDialogModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    RegressionDialogComponent,
    ErrorBottomSheetComponent
  ],
  declarations: [RegressionDialogComponent, ErrorBottomSheetComponent],
  entryComponents: [
    RegressionDialogComponent, ErrorBottomSheetComponent
  ]
})
export class RegressionDialogModule {
}
