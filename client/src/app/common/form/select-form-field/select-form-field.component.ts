import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { SelectOption } from './select-option';

@Component({
  selector: 'kun-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'select-form-field form-field'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFormFieldComponent<T> {

  @Input()
  label: string;

  @Input()
  options: SelectOption<T>[];

  @Input()
  control: FormControl;

  @Input()
  appearance?: MatFormField['appearance'];

  _hasError(validatorFunctionName: string) {
    return this.control.touched && this.control.errors?.[validatorFunctionName];
  }

  _isClearSelectionButtonVisible(matSelect: MatSelect) {
    if (this.control.value === undefined || this.control.value === null || this.control.disabled) {
      return false;
    }
    return JSON.stringify(this.control.value) === JSON.stringify(matSelect.value);
  }

  _clearSelection() {
    this.control.setValue(undefined);
  }
}
