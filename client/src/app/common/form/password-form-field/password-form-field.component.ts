import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kun-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['./password-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'password-form-field'
  }
})
export class PasswordFormFieldComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  label?: string;

  @Input()
  placeholder?: string;

  @Input()
  hints?: Array<{ label: string; validatorName: string }>;

  _passwordVisible = false;

  ngOnInit() {
    this.placeholder = this.placeholder || '';
  }

  _hasError(validatorFunctionName: string) {
    return this.control.touched && (this.control.hasError(validatorFunctionName) || this.control.hasError('required'));
  }

  _togglePasswordFieldVisibility() {
    this._passwordVisible = !this._passwordVisible;
  }

}
