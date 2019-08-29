import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linear-regression-detail',
  templateUrl: './linear-regression-detail.component.html',
  styleUrls: ['./linear-regression-detail.component.scss']
})
export class LinearRegressionDetailComponent implements OnInit {

  regressionName: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.regressionName = this.route.paramMap.subscribe(
      e => {
        console.log('reached');
        this.regressionName = e.get('id');
        console.log(this.regressionName);
      }
    );
  }

}

export interface Regressionmodel  {
  model: {
    nin: Number,
    nout: Number,
  };
  train: {
    currentPredictionMean: {
      data: number[],
      shape: number[],

    },
    currentMean: {
      data: number[],
      shape: number[],

    },
    sumSquaredErrorsPerColumn: {
      data: number[],
      shape: number[],

    },
  };
  test: {
    currentPredictionMean: {
      data: number[],
      shape: number[],

    },
    currentMean: {
      data: number[],
      shape: number[],

    },
    sumSquaredErrorsPerColumn: {
      data: number[],
      shape: number[],

    },
  };

  analysis: {
    columnAnalysis: ColumnAnalysis[];
    schema: {
      columns: Column[]
    }
  };

}

export interface ColumnAnalysis {
  histogramBucketCounts: number [];
  histogramBuckets: number[];
}

export interface Column {
  name: String;
}
