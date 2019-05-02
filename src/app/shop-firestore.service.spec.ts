import { TestBed } from '@angular/core/testing';

import { ShopFirestoreService } from './shop-firestore.service';

describe('ShopFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopFirestoreService = TestBed.get(ShopFirestoreService);
    expect(service).toBeTruthy();
  });
});
