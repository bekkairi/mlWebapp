import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegressionDialogComponent} from '../../../components/dialog/regression-dialog/regression-dialog.component';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  loadModel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
    };

    const dialogRef = this.dialog.open(RegressionDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => console.log('Dialog output:', val)
    );
  }
}
