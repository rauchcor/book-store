import { TestBed } from '@angular/core/testing';

import { BookMockService } from './book-mock.service';

describe('BookMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookMockService = TestBed.get(BookMockService);
    expect(service).toBeTruthy();
  });
});
