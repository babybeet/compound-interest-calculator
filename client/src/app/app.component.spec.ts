import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { BoxModule } from '@client:common/box';
import { FormModule } from '@client:common/form';
import { RippleOnHoverModule } from '@client:common/ripple-on-hover';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        BoxModule,
        FormModule,
        RippleOnHoverModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it('1. should show the correct final amount', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    app._interestCalculatorForm.setValue({
      initialAmount: '1000',
      accumulationPeriod: '1',
      interestRatePercentagePeriod: '10'
    });
    expect(Math.trunc(app._calculateFinalAmount())).toBe(1100);

    app._interestCalculatorForm.setValue({
      initialAmount: '1500',
      accumulationPeriod: '10',
      interestRatePercentagePeriod: '20'
    });
    expect(Math.trunc(app._calculateFinalAmount())).toBe(9287);

    app._interestCalculatorForm.setValue({
      initialAmount: '5000',
      accumulationPeriod: '20',
      interestRatePercentagePeriod: '1'
    });
    expect(Math.trunc(app._calculateFinalAmount())).toBe(6100);
  });

});
