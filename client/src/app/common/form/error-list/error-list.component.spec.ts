import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ErrorListComponent } from './error-list.component';

describe('ErrorListComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ErrorListComponent]
    })
      .compileComponents();
  });

  it('1. should not show errors for pristine form control', () => {
    const fixture = TestBed.createComponent(ErrorListComponent);
    const component = fixture.componentInstance;

    component.control = new FormControl('');

    fixture.detectChanges();

    expect(component._getErrors().length).toBe(0);
  });

  it('2. should not show errors for dirty, but valid form control', () => {
    const fixture = TestBed.createComponent(ErrorListComponent);
    const component = fixture.componentInstance;
    const formControl = new FormControl('');

    formControl.setValue('Test');
    formControl.markAsDirty();
    formControl.markAsTouched();

    component.control = formControl;

    fixture.detectChanges();

    expect(component._getErrors().length).toBe(0);
  });

  it('3. should show an error when form control is not valid', () => {
    const fixture = TestBed.createComponent(ErrorListComponent);
    const component = fixture.componentInstance;
    const formControl = new FormControl('');

    formControl.setErrors({
      required: true
    });
    formControl.markAsDirty();
    formControl.markAsTouched();

    component.control = formControl;

    fixture.detectChanges();

    expect(component._getErrors()).toEqual(['This field is <strong>required</strong>']);
  });
});
