import { AbstractControl } from '@angular/forms';

export const PASSWORD_HINTS = [
  {
    label: 'Must be between 8 and 64 characters',
    validatorName: 'length'
  },
  {
    label: 'Must contain at least one number',
    validatorName: 'number'
  },
  {
    label: 'Must contain lower and upper case letters',
    validatorName: 'casing'
  },
  {
    label: 'May only contain **!@#$%^&*()_+**',
    validatorName: 'symbols'
  }
];

export function validatePassword(control: AbstractControl) {
  const enteredValue = (control.value || '') as string;
  const error = {} as any;
  if (!control.hasError('required') && enteredValue.length === 0) {
    return null;
  }
  if (enteredValue.length < 8 || length > 64) {
    error.length = 'Password must be between 8 and 64 characters';
  }
  if (!(/\d/.test(enteredValue))) {
    error.number = 'Password must contain at least one number';
  }
  if (!(/[a-z]/.test(enteredValue)) || !(/[A-Z]/.test(enteredValue))) {
    error.casing = 'Password must contain uppercase and lowercase letters';
  }
  if (/[^a-zA-Z0-9!@#$%^&*()_+]/.test(enteredValue)) {
    error.symbols = 'Password can only contain !@#$%^&*()_+';
  }
  return Object.keys(error).length === 0 ? null : error;
}

export function validatePasswordRepeat(passwordControl: AbstractControl) {
  return (control: AbstractControl) => {
    if (!passwordControl) {
      return null;
    }
    if (control.value.length === 0) {
      if (passwordControl.hasError('required') || passwordControl.value.length > 0) {
        return {
          passwordRepeatEmpty: 'Please re-enter your password'
        };
      }
    }
    if (passwordControl.value !== control.value) {
      return {
        passwordRepeat: 'Passwords do not match'
      };
    }
    return null;
  };
}
