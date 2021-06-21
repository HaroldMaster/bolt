import { TestBed } from '@angular/core/testing';

import { VerifyNumberGuard } from './verify-number.guard';

describe('VerifyNumberGuard', () => {
  let guard: VerifyNumberGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyNumberGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
