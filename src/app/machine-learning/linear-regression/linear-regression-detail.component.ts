import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpWSService} from '../../shared/services/http-ws.service';

@Component({
  selector: 'app-linear-regression-detail',
  templateUrl: './linear-regression-detail.component.html',
  styleUrls: ['./linear-regression-detail.component.scss']
})
export class LinearRegressionDetailComponent implements OnInit {

  regressionName: any;
  model: Regressionmodel;

  constructor(private route: ActivatedRoute, private httpWSService: HttpWSService) { }

  ngOnInit() {
    this.regressionName = this.route.paramMap.subscribe(
      e => {
        const name = e.get('id');
        this.regressionName = name;
        const url = `model/${name}`;
        this.httpWSService.doGet<Regressionmodel>(url).subscribe(
          (data) => { this.model = data; },

        );
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
