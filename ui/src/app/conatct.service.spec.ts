import { TestBed, inject } from '@angular/core/testing';

import { ConatctService } from './conatct.service';

describe('ConatctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConatctService]
    });
  });

  it('should be created', inject([ConatctService], (service: ConatctService) => {
    expect(service).toBeTruthy();
  }));
});
