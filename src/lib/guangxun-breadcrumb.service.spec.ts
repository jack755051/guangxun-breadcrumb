import { TestBed } from '@angular/core/testing';

import { GuangxunBreadcrumbService } from './guangxun-breadcrumb.service';

describe('GuangxunBreadcrumbService', () => {
  let service: GuangxunBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuangxunBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
