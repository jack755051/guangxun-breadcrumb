import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuangxunBreadcrumbComponent } from './guangxun-breadcrumb.component';

describe('GuangxunBreadcrumbComponent', () => {
  let component: GuangxunBreadcrumbComponent;
  let fixture: ComponentFixture<GuangxunBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuangxunBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuangxunBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
