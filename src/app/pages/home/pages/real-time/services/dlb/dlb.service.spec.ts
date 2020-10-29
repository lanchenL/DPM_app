import { TestBed } from '@angular/core/testing';

import { DlbService } from './dlb.service';

describe('DlbService', () => {
  let service: DlbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
