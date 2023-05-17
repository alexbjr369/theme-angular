import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBadgeComponent } from './app-badge.component';

describe('AppBadgeComponent', () => {
  let component: AppBadgeComponent;
  let fixture: ComponentFixture<AppBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBadgeComponent]
    });
    fixture = TestBed.createComponent(AppBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
