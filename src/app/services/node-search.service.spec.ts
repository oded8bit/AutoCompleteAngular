import { TestBed, inject } from '@angular/core/testing';

import { NodeSearchService } from './node-search.service';

describe('NodeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeSearchService]
    });
  });

  it('should be created', inject([NodeSearchService], (service: NodeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
