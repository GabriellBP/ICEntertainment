import { TestBed, inject } from '@angular/core/testing';

import { AprovePostService } from './approve-post.service';

describe('AprovePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AprovePostService]
    });
  });

  it('should be created', inject([AprovePostService], (service: AprovePostService) => {
    expect(service).toBeTruthy();
  }));
});
