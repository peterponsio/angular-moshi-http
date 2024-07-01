import { TestBed } from '@angular/core/testing';

import { AngularMoshiHttpService } from './angular-moshi-http.service';

describe('AngularMoshiHttpService', () => {
  let service: AngularMoshiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMoshiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
