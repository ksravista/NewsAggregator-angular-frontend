import { TestBed } from '@angular/core/testing';

import { NewsclientService } from './newsclient.service';

describe('NewsclientService', () => {
  let service: NewsclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
