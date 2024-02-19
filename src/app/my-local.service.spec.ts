import { TestBed } from '@angular/core/testing';

import { MyLocalService } from './my-local.service';

describe('MyLocalService', () => {
  let service: MyLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
