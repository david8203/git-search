import { TestBed } from '@angular/core/testing';

import { ReposServiceService } from './repo-service.service';

describe('RepoServiceService', () => {
  let service: ReposServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposServiceService);
  });

  it('should be created', () => {
    const service: ReposServiceService = TestBed.get(ReposServiceService);
    expect(service).toBeTruthy();
  });
});
