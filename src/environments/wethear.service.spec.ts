import { TestBed } from '@angular/core/testing';

import { WethearService } from '../app/wethear.service';

describe('WethearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WethearService = TestBed.get(WethearService);
    expect(service).toBeTruthy();
  });
});
