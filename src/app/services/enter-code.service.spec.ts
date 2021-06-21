import { TestBed } from '@angular/core/testing';

import { EnterCodeService } from './enter-code.service';

describe('EnterCodeService', () => {
  let service: EnterCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
