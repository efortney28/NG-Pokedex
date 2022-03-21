import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesBadgeComponent } from './types-badge.component';

describe('TypesBadgeComponent', () => {
  let component: TypesBadgeComponent;
  let fixture: ComponentFixture<TypesBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
