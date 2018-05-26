import { TestBed, inject } from '@angular/core/testing';

import { CatergoyService } from './catergoy.service';

describe('CatergoyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatergoyService]
    });
  });

  it('should be created', inject([CatergoyService], (service: CatergoyService) => {
    expect(service).toBeTruthy();
  }));
});
