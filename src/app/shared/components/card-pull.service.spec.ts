import { TestBed } from '@angular/core/testing';

import { CardPullService } from './card-pull.service';

describe('CardPullService', () => {
  let service: CardPullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
