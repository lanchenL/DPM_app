import { TestBed } from '@angular/core/testing';

import { OrService } from './or.service';

describe('OrService', () => {
  let service: OrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
