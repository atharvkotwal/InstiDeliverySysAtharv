import { TestBed, inject } from '@angular/core/testing';

import { EaterydetService } from './eaterydet.service';

describe('EaterydetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EaterydetService]
    });
  });

  it('should be created', inject([EaterydetService], (service: EaterydetService) => {
    expect(service).toBeTruthy();
  }));
});
