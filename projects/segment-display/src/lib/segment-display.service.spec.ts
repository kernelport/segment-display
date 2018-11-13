import { TestBed } from '@angular/core/testing';

import { SegmentDisplayService } from './segment-display.service';

describe('SegmentDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SegmentDisplayService = TestBed.get(SegmentDisplayService);
    expect(service).toBeTruthy();
  });
});
