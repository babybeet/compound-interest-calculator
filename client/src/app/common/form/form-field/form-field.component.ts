import { ChangeDetectionStrategy, Component, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kun-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'form-field',
    '[class.invalid-input]': 'control.invalid && control.touched',
    '[class.disabled]': 'control.disabled'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {

  @Input()
  label: string;

  @Input()
  control: FormControl;

  @Input()
  prefixIcon?: string;

  @Input()
  hasPlaceholder: boolean;

  readonly _hasFocus$ = new BehaviorSubject(false);

  constructor(private readonly _renderer: Renderer2) {

  }

  focus() {
    this._hasFocus$.next(true);
    this._renderer.setAttribute(document.body, 'data-has-keyboard-focus', 'true');
  }

  blur() {
    this._hasFocus$.next(false);
    this._renderer.setAttribute(document.body, 'data-has-keyboard-focus', 'false');
  }

  clear(input: HTMLInputElement) {
    this.control.setValue('');
    input.value = '';
    input.focus();
  }

  _shouldShiftLabelUp() {
    return String(this.control.value).length > 0 || this.hasPlaceholder;
  }

}
