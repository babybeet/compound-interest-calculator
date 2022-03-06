import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import type { FormControl } from '@angular/forms';

@Component({
  selector: 'kun-short-text-form-field',
  templateUrl: './short-text-form-field.component.html',
  styleUrls: ['./short-text-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'short-text-form-field'
  }
})
export class ShortTextFormFieldComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  control: FormControl;

  @Input()
  type?: 'text' | 'email' | 'number';

  @Input()
  placeholder?: string;

  @Input()
  autofocus?: boolean;

  @Input()
  prefixIcon?: string;

  ngOnInit() {
    this.type = this.type || 'text';
    this.prefixIcon = this.prefixIcon || (this.type === 'email' ? 'mail' : 'keyboard');
    this.placeholder = this.placeholder || '';
  }

}
