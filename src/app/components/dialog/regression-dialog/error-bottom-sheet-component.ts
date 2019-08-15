import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

@Component({
  selector: 'app-error-bottom-sheet',
  template: 'passed in {{ data }}',
})
export class ErrorBottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}
