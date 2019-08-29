import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionDetailComponent } from './linear-regression-detail.component';

describe('LinearRegressionDetailComponent', () => {
  let component: LinearRegressionDetailComponent;
  let fixture: ComponentFixture<LinearRegressionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearRegressionDetailComponent ]
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
});
