import { TestBed } from '@angular/core/testing';

import { ShoppingcartStore } from './shoppingcart.service';

describe('ShoppingcartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingcartStore = TestBed.get(ShoppingcartStore);
    expect(service).toBeTruthy();
  });
});
