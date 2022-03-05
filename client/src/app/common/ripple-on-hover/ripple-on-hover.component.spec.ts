import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleOnHoverComponent } from './ripple-on-hover.component';

describe('RippleOnHoverComponent', () => {
  let component: RippleOnHoverComponent;
  let fixture: ComponentFixture<RippleOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RippleOnHoverComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
