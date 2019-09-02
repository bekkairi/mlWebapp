import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LinearRegressionDetailComponent, Regressionmodel} from './linear-regression-detail.component';
import {ActivatedRoute, Params} from '@angular/router';
import {of} from 'rxjs';


describe('LinearRegressionDetailComponent', () => {
  let component: LinearRegressionDetailComponent;
  let fixture: ComponentFixture<LinearRegressionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionDetailComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({
            get: () => {
              return 10;
            }
          })
        }
      }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearRegressionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('parse json ' , ()  => {
    const model: Regressionmodel = require('./test.json');
   expect(model.analysis.columnAnalysis.length).toBe(10);

  });
});
