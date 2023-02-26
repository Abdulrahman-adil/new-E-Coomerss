import { TestBed } from '@angular/core/testing';

import { HomeServiesService } from './home-servies.service';

describe('HomeServiesService', () => {
  let service: HomeServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
