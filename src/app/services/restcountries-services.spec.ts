import { TestBed } from '@angular/core/testing';

import { RestcountriesServices } from './restcountries-services';

describe('RestcountriesServices', () => {
  let service: RestcountriesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcountriesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
