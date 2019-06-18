import { TestBed } from '@angular/core/testing';

import { BookStore } from './book-store.service';

describe('BookMockStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookStore = TestBed.get(BookStore);
    expect(service).toBeTruthy();
  });
});
