import { TestBed } from '@angular/core/testing';

import { ServicepersonService } from './serviceperson.service';

describe('ServicepersonService', () => {
  let service: ServicepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
