import {TestBed} from '@angular/core/testing';

import {HttpWSService} from './http-ws.service';

describe('HttpWSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpWSService = TestBed.get(HttpWSService);
    expect(service).toBeTruthy();
  });
});
