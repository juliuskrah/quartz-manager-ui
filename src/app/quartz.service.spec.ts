import { TestBed, inject } from '@angular/core/testing';

import { QuartzService } from './quartz.service';

describe('QuartzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuartzService]
    });
  });

  it('should be created', inject([QuartzService], (service: QuartzService) => {
    expect(service).toBeTruthy();
  }));
});
