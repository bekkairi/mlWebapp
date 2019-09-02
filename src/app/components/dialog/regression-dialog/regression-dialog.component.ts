import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpWSService} from '../../../shared/services/http-ws.service';
import {catchError, map, timeout} from 'rxjs/operators';
import {of} from 'rxjs';
import {SpinnerServiceService} from '../../../shared/services/spinner-service.service';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatSnackBar} from '@angular/material';
import {ErrorBottomSheetComponent} from './error-bottom-sheet-component';
import {Config} from '../../../create-account/test';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regression-dialog',
  templateUrl: './regression-dialog.component.html',
  styleUrls: ['./regression-dialog.component.scss']
})
export class RegressionDialogComponent implements OnInit {
  private type: any;
  private description: any;
  private form: any;
  private modelName: any;
  private file: any;

  constructor(private dialogRef: MatDialogRef<RegressionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) {type, description}: DialogData, private fb: FormBuilder, private httpWSService: HttpWSService,
              public spinnerServiceService: SpinnerServiceService,  private _snackBar: MatSnackBar, private router: Router ) {
    this.type = type;
    this.description = description;

    this.form = new FormGroup({
      modelName: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  save() {
    const input = new FormData();
    input.append('file', this.file);

    const ret = this.httpWSService.doPost<Config>('model/LINEAR_REGRESSION/' + this.modelName, input).pipe(
      map( e =>  e),
      catchError(err => {throw err; })).subscribe(
      res => {},
      err =>  { this._snackBar.open('Server error', 'P', {
        duration: 4000,
      }); },
      () =>    { this.dialogRef.close() ; this.router.navigateByUrl('ml/regression/${this.modelName}'); }

  );



  }


  close() {
    this.dialogRef.close();
  }

  onFileChange(event) {

    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];


    }
  }


}

export interface DialogData {
  type: string;
  description: string;
}




