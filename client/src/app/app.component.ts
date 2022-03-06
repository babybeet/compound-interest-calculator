import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'compound-interest-rate-calculator'
  }
})
export class AppComponent {

  readonly _interestCalculatorForm: FormGroup;

  _finalAmount = 0;

  constructor(fb: FormBuilder) {
    this._interestCalculatorForm = fb.group({
      initialAmount: fb.control(1000, [Validators.required, Validators.pattern(/\d+\.?\d*/)]),
      accumulationPeriod: fb.control(10, [Validators.required, Validators.min(1), Validators.pattern(/\d+/)]),
      interestRatePercentagePeriod: fb.control(10, [Validators.required, Validators.pattern(/\d{1,3}\.?\d{0,2}/), Validators.min(1), Validators.max(100)])
    });
    this._interestCalculatorForm.markAsDirty();
  }

  _calculateFinalAmount() {
    const formValue = this._interestCalculatorForm.value;
    const initialAmount = +formValue.initialAmount;
    const accumulationPeriod = +formValue.accumulationPeriod;
    const interestRatePercentagePeriod = +formValue.interestRatePercentagePeriod;
    const normalizedInterestRate = interestRatePercentagePeriod / 100;

    let finalAmount = initialAmount;
    for (let i = 0; i < accumulationPeriod; i++) {
      finalAmount += finalAmount * normalizedInterestRate;
    }
    return finalAmount;
  }

  _findFormControl(controlName: 'initialAmount' | 'accumulationPeriod' | 'interestRatePercentagePeriod') {
    return this._interestCalculatorForm.get(controlName) as FormControl;
  }

  _clearForm() {
    this._interestCalculatorForm.setValue({
      initialAmount: '',
      accumulationPeriod: '',
      interestRatePercentagePeriod: ''
    });
    this._interestCalculatorForm.markAsPristine();
    this._interestCalculatorForm.markAsUntouched();
  }

}
