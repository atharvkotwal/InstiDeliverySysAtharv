import { TestBed, inject } from '@angular/core/testing';

import { UserdetService } from './userdet.service';

describe('UserdetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdetService]
    });
  });

  it('should be created', inject([UserdetService], (service: UserdetService) => {
    expect(service).toBeTruthy();
  }));
});
