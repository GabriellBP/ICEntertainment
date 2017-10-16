import { TestBed, inject } from '@angular/core/testing';

import { RankingPostService } from './ranking-post.service';

describe('RankingPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankingPostService]
    });
  });

  it('should be created', inject([RankingPostService], (service: RankingPostService) => {
    expect(service).toBeTruthy();
  }));
});
