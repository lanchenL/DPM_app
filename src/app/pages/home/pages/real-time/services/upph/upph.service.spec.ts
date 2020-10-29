import { TestBed } from '@angular/core/testing';

import { UpphService } from './upph.service';

describe('UpphService', () => {
  let service: UpphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
