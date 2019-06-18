import { TestBed, async, inject } from '@angular/core/testing';

import { ContributeGuard } from './contribute.guard';

describe('ContributeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContributeGuard]
    });
  });

  it('should ...', inject([ContributeGuard], (guard: ContributeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
