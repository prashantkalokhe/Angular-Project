import { TestBed } from '@angular/core/testing';

import { MyhttpuseServiceService } from './myhttpuse-service.service';

describe('MyhttpuseServiceService', () => {
  let service: MyhttpuseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhttpuseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
