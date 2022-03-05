import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'kun-long-text-form-field',
  templateUrl: './long-text-form-field.component.html',
  styleUrls: ['./long-text-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'long-text-form-field form-field'
  }
})
export class LongTextFormFieldComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  label?: string;

  @Input()
  appearance?: MatFormField['appearance'];

  @Input()
  placeholder?: string;

  @Input()
  rows?: number;

  ngOnInit() {
    if (!this.appearance) {
      this.appearance = 'outline';
    }
    if (!this.rows) {
      this.rows = 10;
    }
  }

  _hasError(validatorFunctionName: string) {
    return this.control.touched && this.control.errors?.[validatorFunctionName];
  }

  _onClearFormField(input: HTMLTextAreaElement) {
    this.control.setValue('');
    input.value = '';
  }

}
