import { TestBed } from '@angular/core/testing';

import { JonnyramenLibService } from './jonnyramen-lib.service';

describe('JonnyramenLibService', () => {
  let service: JonnyramenLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JonnyramenLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
