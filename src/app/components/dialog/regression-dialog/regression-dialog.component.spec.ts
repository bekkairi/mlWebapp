import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionDialogComponent } from './regression-dialog.component';

describe('RegressionDialogComponent', () => {
  let component: RegressionDialogComponent;
  let fixture: ComponentFixture<RegressionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
