import { TestBed } from '@angular/core/testing';

import { MyLocalMovieServiceService } from './my-local-movie-service.service';

describe('MyLocalMovieServiceService', () => {
  let service: MyLocalMovieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLocalMovieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
