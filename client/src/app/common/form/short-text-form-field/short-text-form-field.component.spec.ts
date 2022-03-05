import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTextFormFieldComponent } from './short-text-form-field.component';

describe('ShortTextFormFieldComponent', () => {
  let component: ShortTextFormFieldComponent;
  let fixture: ComponentFixture<ShortTextFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortTextFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTextFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
