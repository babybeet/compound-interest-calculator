import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTextFormFieldComponent } from './long-text-form-field.component';

describe('LongTextFormFieldComponent', () => {
  let component: LongTextFormFieldComponent;
  let fixture: ComponentFixture<LongTextFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTextFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTextFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
