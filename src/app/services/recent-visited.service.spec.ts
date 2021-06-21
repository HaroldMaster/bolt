import { TestBed } from '@angular/core/testing';

import { RecentVisitedService } from './recent-visited.service';

describe('RecentVisitedService', () => {
  let service: RecentVisitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentVisitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
