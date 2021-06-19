import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceService);
  });

  it('should be created', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    expect(service).toBeTruthy();
  });
});
