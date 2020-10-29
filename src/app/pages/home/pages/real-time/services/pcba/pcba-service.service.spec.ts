import { TestBed } from '@angular/core/testing';

import { PcbaService } from './pcba-service.service';

describe('PcbaService', () => {
  let service: PcbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
