import { TestBed } from '@angular/core/testing';

import { ProductServeService } from './product-serve.service';

describe('ProductServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServeService = TestBed.get(ProductServeService);
    expect(service).toBeTruthy();
  });
});
