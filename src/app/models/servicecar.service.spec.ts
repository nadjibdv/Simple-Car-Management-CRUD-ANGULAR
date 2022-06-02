import { TestBed } from '@angular/core/testing';

import { ServicecarService } from './servicecar.service';

describe('ServicecarService', () => {
  let service: ServicecarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
