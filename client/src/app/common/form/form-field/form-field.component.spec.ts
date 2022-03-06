/* eslint-disable @typescript-eslint/quotes */
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormFieldComponent]
    })
      .compileComponents();
  });

  it(`1. should render the correct form control's label`, () => {
    const fixture = TestBed.createComponent(FormFieldComponent);

    const component = fixture.componentInstance;
    component.label = 'Test label';
    component.control = new FormControl();

    fixture.detectChanges();

    const formLabelElement: HTMLElement = fixture.debugElement.query(By.css('.form-field__label')).nativeElement;
    expect(formLabelElement.textContent).toContain('Test label');
  });

  it(`2. should render the correct prefix icon`, () => {
    const fixture = TestBed.createComponent(FormFieldComponent);

    const component = fixture.componentInstance;
    component.prefixIcon = 'people';
    component.control = new FormControl();

    fixture.detectChanges();

    const prefixIconElement: HTMLElement = fixture.debugElement.query(By.css('.form-field__icon-prefix')).nativeElement;
    expect(prefixIconElement.textContent).toContain('people');
  });

  it(`3. should add "invalid-input" class if the provided form control is invalid`, () => {
    const formControl = new FormControl();
    const fixture = TestBed.createComponent(FormFieldComponent);

    formControl.setErrors({
      required: true
    });
    formControl.markAsTouched();
    formControl.markAsDirty();

    const component = fixture.componentInstance;
    component.control = formControl;

    fixture.detectChanges();

    const hostElement = fixture.nativeElement as HTMLElement;
    expect(hostElement.classList).toContain('invalid-input');
  });

  it(`4. should add "disabled" class if the provided form control is disabled`, () => {
    const formControl = new FormControl();
    const fixture = TestBed.createComponent(FormFieldComponent);

    formControl.markAsTouched();
    formControl.markAsDirty();
    formControl.disable();

    const component = fixture.componentInstance;
    component.control = formControl;

    fixture.detectChanges();

    const hostElement = fixture.nativeElement as HTMLElement;
    expect(hostElement.classList).toContain('disabled');
  });

});
