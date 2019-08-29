import { TestBed } from '@angular/core/testing';

import { HttpSpinnerInterceptorService } from './http-spinner-interceptor.service';

describe('HttpSpinnerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSpinnerInterceptorService = TestBed.get(HttpSpinnerInterceptorService);
    expect(service).toBeTruthy();
  });
});
