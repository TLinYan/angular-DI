import { TestBed } from '@angular/core/testing';

import { ProductServe2Service } from './product-serve2.service';

describe('ProductServe2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServe2Service = TestBed.get(ProductServe2Service);
    expect(service).toBeTruthy();
  });
});
