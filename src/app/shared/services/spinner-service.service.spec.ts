import { TestBed } from '@angular/core/testing';

import { SpinnerServiceService } from './spinner-service.service';

describe('SpinnerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinnerServiceService = TestBed.get(SpinnerServiceService);
    expect(service).toBeTruthy();
  });

  it (' should return false once created', () => {
    const service: SpinnerServiceService = TestBed.get(SpinnerServiceService);
    expect(service.visibility.getValue()).toBe(false);
  });

  it (' should return true after show', () => {
    const service: SpinnerServiceService = TestBed.get(SpinnerServiceService);
    service.show();
    expect(service.visibility.getValue()).toBe(true);
  });

  it (' should return true after hide', () => {
    const service: SpinnerServiceService = TestBed.get(SpinnerServiceService);
    service.hide()
    expect(service.visibility.getValue()).toBe(false);
  });
});
