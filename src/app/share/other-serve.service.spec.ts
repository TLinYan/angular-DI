import { TestBed } from '@angular/core/testing';

import { OtherServeService } from './other-serve.service';

describe('OtherServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherServeService = TestBed.get(OtherServeService);
    expect(service).toBeTruthy();
  });
});
